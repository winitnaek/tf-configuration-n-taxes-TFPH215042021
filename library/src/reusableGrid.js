import React, { Fragment } from "react";
import { copyToClipboard } from "./utils/copyToClipboard";
import ClipboardToast from "./clipboardToast";
import { Modal, ModalHeader } from "reactstrap";
import {Col,Row,UncontrolledTooltip,Button,ModalBody,ModalFooter} from "reactstrap";
import DynamicForm from "./dynamicForm";
import Grid from "../../src/deps/jqwidgets-react/react_jqxgrid";
import { autocompleteURL } from "../../src/base/utils/tfUtils";
const customFormulasChild = "customFormulasChild";

let GridFunctions;

class ReusableGrid extends React.Component {
  constructor(props) {
    super(props);
    let metadata = this.props.metadata(this.props.pageid);
    let permissions = this.props.permissions(this.props.pid);
    //let gridDataUrl = this.props.dataurl(this.props.pageid);
    let data = this.props.griddata;
    let source = {
      datatype: "json",
      datafields: metadata.griddef.dataFields,
      localdata: data
    };

    this.state = {
      value: "",
      pgdef: metadata.pgdef,
      pgid: metadata.pgdef.pgid,
      griddef: metadata.griddef,
      cruddef: metadata.cruddef,
      columns: metadata.griddef.columns,
      dataFields: metadata.griddef.dataFields,
      title: metadata.pgdef.pgtitle,
      subtitle: metadata.pgdef.pgsubtitle,
      addNewLabel: metadata.pgdef.addNewLabel,
      recordEdit: metadata.griddef.recordEdit,
      recordDelete: metadata.griddef.recordDelete,
      noResultsFoundTxt: metadata.griddef.noResultsFoundTxt || "",
      hasAddNew: metadata.pgdef.hasAddNew,
      actiondel: metadata.pgdef.actiondel,
      helpLabel: metadata.pgdef.helpLblTxt,
      isfilterform: metadata.griddef.isfilterform,
      childConfig: metadata.pgdef.childConfig,
      parentConfig: metadata.pgdef.parentConfig,
      isfilter: metadata.griddef.isfilter,
      mockData: [],
      child: this.props.child,
      allSelected: false,
      showClipboard: false,
      numOfRows: 0,
      source: source,
      isOpen: false
    };

    this.editClick = (index, pgid) => {
      let _id = document.querySelector("div[role='grid']").id;
      let dataRecord = $("#" + _id).jqxGrid("getrowdata", index);
      const data = { formData: dataRecord, mode: "Edit", index: index };
      const setIsOpen = () => {
        this.setState({ isOpen: true  });
      }

      async function dispathAction(dispatch, setFormData, setIsOpen) {
        dispatch(setFormData(data));
        await setIsOpen()
      }
      const { dispatch, setFormData } = this.props.gridProps;
      dispathAction(dispatch, setFormData, setIsOpen);
    };

    this.handleChildGrid = pgid => {
      const {tftools} = this.props;
      const pgData = tftools.filter(item => {
        if (item.id === pgid) {
          return item;
        }
      })
      this.props.gridProps.renderGrid("pageContainer", pgData[0]);
    };

    this.handleFilter = e => {
      e.preventDefault();
      const { parentConfig } = this.state;
      parentConfig
        ? this.handleChildGrid(parentConfig.pgdef.pgid)
        : this.handleNewForm(e).bind(this);
    };

 

    this.handleNewForm = e => {
      e.preventDefault();
      const payload = { data: {}, mode: "New" };
      this.props.gridProps.dispatch(this.props.gridProps.setFormData(payload));
      this.setState({ isOpen: true });
    };

    this.handleSubmit = (pgid, payload, mode, rowid) => {
      const {saveGridData} = this.props;
      saveGridData.saveGridData(pgid, payload, mode);
      this.props.closeForm();
    }; 

    this.handleFilterFormView = (pgid, payload) => {
      console.log("You made it back to the reusable grid");

    };

    this.OpenHelp = () => {
      this.props.help(this.state.pgid);
    };

    this.toggle = () => {
      this.setState({ isOpen: false });
    };

    this.deleteRow = index => {
      let _id = document.querySelector("div[role='grid']").id;
      const rowid = $("#" + _id).jqxGrid("getrowid", index);
      $("#" + _id).jqxGrid("deleterow", rowid);
      const { pgid } = this.state;
      const {deleteGridData} = this.props;
      deleteGridData.deleteGridData(pgid, rowid);
    };

    this.renderMe = pgid => {
      const {tftools} = this.props;
      let data = tftools.filter(tftool => {
        if (tftool.id == pgid) return tftool;
      });
      renderTFApplication("pageContainer", data[0]);
      this.props.close();
    };

    this.selectAll = event => {
      event.preventDefault();
      this.setState({ allSelected: true });
      let _id = document.querySelector("div[role='grid']").id;
      $("#" + _id).jqxGrid("selectallrows");
    };

    this.unselectAll = event => {
      event.preventDefault();
      this.setState({ allSelected: false });
      let _id = document.querySelector("div[role='grid']").id;
      $("#" + _id).jqxGrid("clearselection");
    };

    this.toggleSelectAll = event => {
      event.preventDefault();
      if (this.state.allSelected) {
        this.unselectAll(event);
      }
    };
  }

  componentDidMount() {
    if (!this.props.griddata) {
      this.setState({ noResultsFoundTxt: metadata.griddef.noResultsFoundTxt });
    }
  }

  exportToExcel() {
    this.refs.reusableGrid.exportdata("xls", this.state.pgid);
  }

  exportToCsv() {
    this.refs.reusableGrid.exportdata("csv", this.state.pgid);
  }

  copyToClipboardHandler(event) {
    event.preventDefault();
    var numOfRows = copyToClipboard();
    this.setState(
      {
        showClipboard: true,
        numOfRows: numOfRows
      },
      () => {
        window.setTimeout(() => {
          this.setState({ showClipboard: false });
        }, 2000);
      }
    );
  }

  
  render() {
    const editCellsRenderer = ndex => {
      const { childConfig } = this.state.pgid;
      if (this.state.pgdef.childConfig) {
        const { childConfig } = this.state.pgdef;
        return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={handleChildGrid(${JSON.stringify(
          childConfig
        )})}> <i class="fas fa-search  fa-1x" color="primary"/> </div>`;
      } else {
        return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={editClick(${ndex})}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`;
      }
    };

    let dataAdapter = new $.jqx.dataAdapter(this.state.source);
    let text;
    this.state.pgdef.childConfig ? (text = "View") : (text = "Edit");
    const editColumn = {
      text: text,
      datafield: "edit",
      align: "center",
      width: "5%",
      cellsrenderer: editCellsRenderer
    };

    
    let permissions = this.props.permissions(this.props.pid);
    const { columns, numOfRows, showClipboard } = this.state;
    let newColumns = columns;

    if (this.state.recordEdit) {
      newColumns = [...newColumns, editColumn];

      if (!permissions) {
        permissions = {
          VIEW: true,
          SAVE: false,
          DELETE: false,
          RUN: false,
          AUDIT: false
        };
      }

      if (!permissions.SAVE) {
        newColumns = newColumns.filter(item => {
          return item.text !== "Edit";
        });
      }

      if (!permissions.DELETE) {
        newColumns = newColumns.filter(item => {
          return item.text !== "Delete";
        });
      }
    }

    if (this.state.parentConfig) {
    }
    const { noResultsFoundTxt } = this.state;
    const { griddata } = this.props;
    const { isOpen } = this.props;
    const { title, cruddef, isfilterform, pgid } = this.state;
    const { deleteRow, handleChange, renderMe, handleSubmit } = this;
    let filter;
    if (isfilterform) {
      filter = true;
    }
    const close = this.toggle;

    const formProps = {
      close,
      handleChange,
      pgid,
      permissions,
      deleteRow,
      handleSubmit,
      renderMe,
      filter
    };

    module.exports = this.editClick;
    window.editClick = this.editClick;

    module.exports = this.handleChildGrid;
    window.handleChildGrid = this.handleChildGrid;
    const {styles, tftools, metadata, saveGridData, deleteGridData, formData, fieldData,formMetaData, recentUsage, autoComplete} = this.props;
    return (
      <Fragment>
        <Row>
          <h1 style={styles.pagetitle}>{this.state.title}</h1>

          <span style={styles.helpMargin}>
            <span id="help">
              <i
                className="fas fa-question-circle  fa-lg"
                onClick={this.OpenHelp}
                style={styles.helpicon}
              />
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>

          {this.state.isfilter && (
            <span>
              {this.state.parentConfig ? (
                <span id="filter">
                  <i
                    class="fas fa-arrow-up"
                    style={styles.filtericon}
                    onClick={this.handleFilter}
                  />
                  <UncontrolledTooltip placement="right" target="filter">
                    Return to prior screen
                  </UncontrolledTooltip>
                </span>
              ) : (
                <span id="filter">
                  <i
                    class="fas fa-filter fa-lg"
                    style={styles.filtericon}
                    onClick={this.handleFilter}
                  />
                  <UncontrolledTooltip placement="right" target="filter">
                    Modify Selection Criteria
                  </UncontrolledTooltip>
                </span>
              )}
            </span>
          )}
        </Row>
        <Row>
          {" "}
          <p> {this.state.subtitle} </p>{" "}
        </Row>
        <Row>
          <p> {!griddata[0] && noResultsFoundTxt}</p>
        </Row>
        <Row style={styles.rowTop}>
          <Col sm="2" style={styles.iconPaddingLeft}>
            {this.state.allSelected && (
              <span>
                <span id="selectAll" style={{ marginRight: "10px" }}>
                  <a href="" onClick={e => this.unselectAll(e)}>
                    <i className="fas fa-check-square  fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="selectAll">
                  <span> Select All </span>
                </UncontrolledTooltip>
              </span>
            )}

            {!this.state.allSelected && (
              <span>
                <span id="unselectAll" style={{ marginRight: "10px" }}>
                  <a href="" onClick={e => this.selectAll(e)}>
                    <i className="far fa-square  fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="unselectAll">
                  <span> Select All </span>
                </UncontrolledTooltip>
              </span>
            )}

            <span id="unselectAll">
              <a href="" onClick={e => this.toggleSelectAll(e)}>
                <span>
                  <i className="fas fa-redo-alt fa-2x" />
                </span>
              </a>
            </span>
            <UncontrolledTooltip placement="right" target="unselectAll">
              <span> Unselect All </span>
            </UncontrolledTooltip>
          </Col>
          <Col sm="9">
            {showClipboard && (
              <ClipboardToast numOfRows={this.state.numOfRows} />
            )}
          </Col>
          <Col sm="1" style={styles.iconPaddingRight}>
            {this.state.hasAddNew && (
              <span
                style={
                  (this.state.hasAddNew && this.state.actiondel) == true
                    ? { paddingLeft: 10 }
                    : { paddingLeft: 46 }
                }
              >
                <span id="addNew">
                  <a href="" onClick={this.handleNewForm}>
                    <i className="fas fa-calendar-plus  fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="addNew">
                  <span> {this.state.addNewLabel}</span>
                </UncontrolledTooltip>
              </span>
            )}
            {this.state.actiondel ? (
              <span
                style={
                  (this.state.hasAddNew && this.state.actiondel) == true
                    ? { paddingLeft: 5 }
                    : { paddingLeft: 46 }
                }
              >
                <span id="delAll">
                  <a href="" onClick="">
                    <i className="fas fa-calendar-minus fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="delAll">
                  <span> Delete All </span>
                </UncontrolledTooltip>
              </span>
            ) : null}
          </Col>
        </Row>

        <Row>
          <Grid
            ref="reusableGrid"
            id="myGrid"
            width="100%"
            altrows={true}
            source={dataAdapter}
            columns={newColumns}
            pageable={true}
            autoheight={true}
            selectionmode="multiplerows"
            style={styles.gridStyle}
            virtualmode={false}
          />
        </Row>

        <Row style={styles.gridRowStyle}>
          <a href="#" id="exportToExcel" onClick={() => this.exportToExcel()}>
            <i class="fas fa-table fa-lg fa-2x"></i>
          </a>
          <UncontrolledTooltip placement="right" target="exportToExcel">
            <span> Export to Excel </span>
          </UncontrolledTooltip>
          <a
            href="#"
            id="exportToCsv"
            onClick={() => this.exportToCsv()}
            style={styles.gridLinkStyle}
          >
            <i class="fas fa-pen-square fa-lg fa-2x"></i>
          </a>
          <UncontrolledTooltip placement="right" target="exportToCsv">
            <span> Export to CSV </span>
          </UncontrolledTooltip>

          <a
            href="#"
            id="copyToClipboard"
            onClick={e => this.copyToClipboardHandler(e)}
            style={styles.gridLinkStyle}
          >
            <i class="far fa-copy fa-lg fa-2x"></i>
          </a>
          <UncontrolledTooltip placement="right" target="copyToClipboard">
            <span> Copy to clipboard </span>
          </UncontrolledTooltip>
        </Row>

        <Modal isOpen={this.state.isOpen} size="lg" style={styles.modal}>
          <ModalHeader toggle={e => this.toggle()}>
            <span> {this.props.title} </span>
          </ModalHeader>
          <p style={styles.subTitle}>
            {this.props.subtitle && this.props.cruddef.subtitle}
          </p>
          <DynamicForm 
            formData={formData} 
            formProps={formProps} 
            fieldData={fieldData} 
            tftools={tftools}  
            formMetaData={formMetaData} 
            recentUsage={recentUsage} 
            autoComplete={autoComplete} 
            saveGridData={saveGridData} 
          />
        </Modal>
      </Fragment>
    );
  }
}

export default ReusableGrid;
