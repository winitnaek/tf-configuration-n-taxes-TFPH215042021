import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tftools } from "../../base/constants/TFTools";
import { ReusableGrid, ConfirmModal, ViewPDF } from "bsiuilib";
import { setFilterFormData } from "../actions/filterFormActions";
import { setFormData } from "../actions/formActions";
//import { getRecentUsage } from "../actions/usageActions";
import { getUsageData } from "../api/getUsageDataAPI";
import savegriddataAPI from "../api/savegriddataAPI";
import mappingToolUsageAPI from "../api/mappingToolUsageAPI";
import deletegriddataAPI from "../api/deletegriddataAPI";
import getPdfDataAPI from "../api/getPdfDataAPI";
import formDataAPI from "../api/formDataAPI";
import * as gridStyles from "../../base/constants/AppConstants";
import ButtonBar from "./ButtonBar";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { compMetaData,populateParentData} from "../../base/utils/tfUtils";
import {setParentInfo} from '../../app/actions/parentInfoActions';
import store from "../../tf-configuration-n-taxes";
import {calculateTaxesPDFInput} from '../../base/utils/tfWhatIfUtil'
class CustomGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      isOpen: false,
      clickedPageId: '',
      modalGridData: [],
      showSummary: false,
      showConfirm:false,
      cheader:'',
      cbody:'',
      showPDF: false,
      pdfData: {},
      viewPdfMode: false,
    };

    this.renderGrid = pgData => {
      renderTFConfigNTaxes("pageContainer", pgData);
    };

    this.formAction = data => {
      console.log(data);
      console.log("you made it back to customGrid");
      this.props.setFormData(data);
    };

    this.filterFormAction = formData => {
      console.log("Setting filterForm Data");
      const mode = "Edit";
      const index = null;
      const data = { data: this.props.formFilterData, mode, index };
      console.log(this.props.formFilterData);
      //  this.props.setFormData(data)    //  This is needed for subsequent edits to get form data
      this.props.setFilterFormData(formData); // This is used to make the api call to render the grid
    };
    
    this.handleOk = () => {
      this.setState({
        showAlert: false
      });
    };

    this.openTaxLocator = () => {
      const data = tftools.find(tool => tool.id === "taxLocator");
      if (data) {
        renderTFConfigNTaxes("pageContainer", data);
      }
    };

    this.handlePDF = async (event, fromBar) => {
      event.preventDefault();
        const { pageid, formData } = this.props;
        const pdfData = await getPdfDataAPI.getPdfData(pageid, {}, undefined, fromBar);
        this.setState({
          viewPdfMode: !this.state.viewPdfMode,
          pdfData,
        });
    }
    
    this.handleRunLocator = this.handleRunLocator.bind(this);
    this.clickCheckBox = this.clickCheckBox.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getGridPopupData = this.getGridPopupData.bind(this);
    this.parentInfoAction = this.parentInfoAction.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleConfirmDeleteOk = this.handleConfirmDeleteOk.bind(this);
    this.handleConfirmDeleteCancel = this.handleConfirmDeleteCancel.bind(this);
    this.handleCalculateTaxes=this.handleCalculateTaxes.bind(this);
    this.handleHidePDF = this.handleHidePDF.bind(this);
    this.handleShowPDF = this.handleShowPDF.bind(this);
  }

  componentDidMount() {
    const { metadata, pageid } = this.props;
    const { pgdef } = metadata;
    const { metaInfo } = pgdef;
    this.setState({
      showAlert: !!metaInfo
    });
  }
  handleHidePDF() {
    this.setState({ showPDF: false })
  }
  handleRunLocator(clickPageId) {
    this.setState({
      clickedPageId: clickPageId,
    }, () => {
      this.getGridPopupData();
    });
  }
  handleCalculateTaxes(clickPageId) {
    if(clickPageId==='whatifTaxes'){
      let getGridDataInput = calculateTaxesPDFInput(clickPageId,"false");
      getPdfDataAPI.getPdf(clickPageId,getGridDataInput,true).then().then((response) => response).then((repos) => {
        console.log(repos)
        this.handleShowPDF(repos, 'Employee Taxes');
      });
    }else if(clickPageId==='whatifGarnishment'){
      let getGridDataInput = calculateTaxesPDFInput(clickPageId,"true");
      getPdfDataAPI.getPdf(clickPageId,getGridDataInput,true).then().then((response) => response).then((repos) => {
        console.log(repos)
        this.handleShowPDF(repos,'Employee Garnishment');
      });
    }
  }
  handleShowPDF(rowdata, title) {
    this.renderPDFData(rowdata,title);
  }
  
  renderPDFData(pdfData,title){
    this.setState({
      showPDF: true,
      title:title,
      pdfData :pdfData
    });
  }
  renderErrorPDF(yrEndTaxDoc) {
      var printFrame = document.getElementById('pdfi-frametf');
      let errorContent = `<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></head><body><div class="alert alert-danger" style="margin:3px;" role="alert"><strong>Error: </strong>Unable to Get Year End Tax Document. Please contact your system administrator.</div></body></html>`;
      if (printFrame) {
          printFrame.height='100'
          printFrame.src = "data:text/html;charset=utf-8,"+errorContent
      }
  }
  handleGotoTaxLocator(clickPageId) {
    if(clickPageId==='whatifTaxes'){
      const data = tftools.find(tool => tool.id === 'taxLocator');
      if (data) {
        renderTFConfigNTaxes("pageContainer", data);
      }
    }
  }
  handleDeleteAll(clickPageId) {
    if(clickPageId==='whatifEmp'){
      this.showConfirm(true,'Warning!','Are you sure you want to delete all?');
    }else if(clickPageId==='whatifDeductionBenefits'){
      this.showConfirm(true,'Warning!','Are you sure you want to delete all?');
    }
  }
  showConfirm(cshow, cheader, cbody){
    this.setState({
        showConfirm: cshow,
        cheader:cheader,
        cbody:cbody
    });
  }
  handleConfirmDeleteOk(){
    this.setState({
      showConfirm: false
    });
    if(this.props.pageid==='whatifEmp' || this.props.pageid==='whatifDeductionBenefits'){
      deletegriddataAPI.deleteAllGridData(this.props.pageid).then().then((response) => response).then((repos) => {
        alert(repos.message)
        const data = tftools.find(tool => tool.id === this.props.pageid);
        if (data) {
          renderTFConfigNTaxes("pageContainer", data);
        }
      });
    }
  }
  handleConfirmDeleteCancel(){
      this.setState({
          showConfirm: !this.state.showConfirm
      });
  }
  
  clickCheckBox(event) {
    this.setState({
      showSummary: event.target.value === "on",
    })
  }

  parentInfoAction(formData){
    this.props.setParentInfo(formData);
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  async getGridPopupData(){
    const data = await this.props.getDataForChildGrid({ pgid: this.state.clickedPageId, showSummary: this.state.showSummary });
    this.setState({
      modalGridData: data.length === 1 ? data[0].locationTaxes : data,
      isOpen: true,
    })
  }

  render() {
    const {
      pageid,
      metadata,
      pid,
      permissions,
      griddata,
      help,
      gridProps,
      formData,
      formFilterData,
      fieldData,
      formMetaData,
      className = "",
      getDataForChildGrid,
    } = this.props;

    const { pgdef, griddef } = metadata;
    const { metaInfo } = pgdef;
   
    const { formAction, filterFormAction , parentInfoAction } = this;
    return (
      <Fragment>
        <ViewPDF view={this.state.viewPdfMode} handleHidePDF={() => this.setState({viewPdfMode: false })} pdfData={this.state.pdfData} />
        <ReusableGrid
          pageid={pageid}
          metadata={metadata}
          pid={pid}
          permissions={permissions}
          griddata={griddata}
          help={help}
          gridProps={gridProps}
          tftools={tftools}
          saveGridData={savegriddataAPI}
          setFilterFormData={filterFormAction}
          setFormData={formAction}
          deleteGridData={deletegriddataAPI}
          recentUsage={getUsageData}
          renderGrid={this.renderGrid}
          formMetaData={formMetaData}
          formData={formData}
          formFilterData={formFilterData}
          fieldData={fieldData}
          getFormData={formDataAPI}
          styles={gridStyles}
          mapToolUsage={mappingToolUsageAPI}
          className={className}
          getDataForChildGrid={getDataForChildGrid}
          getPdfDataAPI={getPdfDataAPI}
          clickCheckBox={this.clickCheckBox}
          setParentInfo={parentInfoAction}
          fillParentInfo={populateParentData}
        />
        {griddef.hasButtonBar && griddef.hasButtonBar == true ? (
          <ButtonBar
            pageid={pageid}
            metadata={metadata}
            pid={pid}
            permissions={permissions}
            tftools={tftools}
            handleRunLocator={this.handleRunLocator}
            handleDeleteAll={this.handleDeleteAll}
            handleGotoTaxLocator={this.handleGotoTaxLocator}
            handleCalculateTaxes={this.handleCalculateTaxes}
            handlePdf={(event) => this.handlePDF(event, true)}
            handleTaxLocator={this.openTaxLocator}
          />
        ) : null}
        <ConfirmModal showConfirm={this.state.showAlert} handleOk={this.handleOk} {...metaInfo} />

        <Modal isOpen={this.state.isOpen} size="lg" style={gridStyles.modal}>
          <ModalHeader toggle={this.toggle}>
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col className='grid-modal mr-2 ml-2'>
                {this.state.isOpen ? (
                  <ReusableGrid
                    parentPageid={pageid}
                    pageid={this.state.clickedPageId}
                    metadata={compMetaData(this.state.clickedPageId)}
                    permissions={permissions}
                    griddata={this.state.modalGridData}
                    gridProps={gridProps}
                    tftools={tftools}
                    saveGridData={savegriddataAPI}
                    setFilterFormData={filterFormAction}
                    setFormData={formAction}
                    deleteGridData={deletegriddataAPI}
                    recentUsage={getUsageData}
                    renderGrid={this.renderGrid}
                    formMetaData={formMetaData}
                    formData={formData}
                    formFilterData={formFilterData}
                    fieldData={fieldData}
                    getFormData={formDataAPI}
                    clickCheckBox={this.clickCheckBox}
                    styles={gridStyles}
                    mapToolUsage={mappingToolUsageAPI}
                    className={className}
                    hideModal={this.toggle}
                    getPdfDataAPI={getPdfDataAPI}
                    setParentInfo={this.parentInfoAction}
                    fillParentInfo={this.populateParentData}
                  />
                ) : null}
              </Col>
            </Row>
          </ModalBody>
        </Modal>
       <ConfirmModal handleOk={this.handleConfirmDeleteOk} handleCancel={this.handleConfirmDeleteCancel}  showConfirm={this.state.showConfirm} cheader={this.state.cheader} cbody={this.state.cbody} okbtnlbl={'Ok'} cancelbtnlbl={'Cancel'}/>
       {this.state.showPDF ? (<ViewPDF view={this.state.showPDF} title={this.state.title} handleHidePDF={this.handleHidePDF} pdfData={this.state.pdfData} />) : null}
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    formData: state.formData,
    formFilterData: state.formFilterData,
    parentInfo:state.parentInfo
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setFilterFormData, setFormData, setParentInfo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomGrid);
