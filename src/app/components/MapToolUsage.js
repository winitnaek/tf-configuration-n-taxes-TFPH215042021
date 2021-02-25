import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row, UncontrolledTooltip, Container, Button, Card, CardHeader, CardBody,Alert} from "reactstrap";
import { ConfirmModal } from "bsiuilib";
import { setTemplateData } from "../../base/utils/tfUtils";
import { UserDataQueries } from "./UserDataQueries";
import * as metaData from "../metadata/metaData";
import { closeForm, setFormData } from "../actions/formActions";
import * as styles from "../../base/constants/AppConstants";
import { tftools } from "../../base/constants/TFTools";
import { getRecentUsage } from "../actions/usageActions";
import { setFilterFormData } from "../actions/filterFormActions";
import mappingToolUsageAPI from "../api/mappingToolUsageAPI";
import deletegriddataAPI from "../api/deletegriddataAPI";

class MapToolUsage extends UserDataQueries {
  constructor() {
    super();
    this.state = {
      usageGroup: [],
      showConfirm: false,
      cheader: 'Alert',
      cbody: 'Are you sure you want to delete?'
    };
    this.handleConfirmDeleteOk = this.handleConfirmDeleteOk.bind(this);
    this.handleConfirmDeleteCancel = this.handleConfirmDeleteCancel.bind(this);
    this.OpenHelp = () => {
      this.props.help("mappingTools");
    };

    this.renderParent = parentConfig => {
      const pgData = tftools.filter(item => {
        if (item.id === parentConfig) {
          return item;
        }
      });
      renderTFConfigNTaxes("pageContainer", pgData[0]);
    };

    this.navigate = (event, group, id) => {
      event.preventDefault();
      localStorage.setItem('mapUsage', id);
      const pgData = tftools.find(item => item.id === group.pageId);
      renderTFConfigNTaxes("pageContainer", pgData);
    }

    this.navigateToParent = (event, group) => {
      event.preventDefault();
      const { pgdef } = metaData[group.pageId];
      const { parentConfig } = pgdef;
      const pgData = tftools.find(item => item.id === parentConfig.pgdef.pgid);
      renderTFConfigNTaxes("pageContainer", pgData);
    }
  }

  componentDidMount() {
    const { pgid, formFilterData } = this.props;
    const { userCode, taxCode, userTax } = formFilterData;
    let pageId = '';
    let key;
    if(taxCode) {
      pageId = "taxCodeUsage";
      key = "authCode";
    } else if(userCode) {
      pageId = "paymentCodeUsage";
      key = "pmtUsrCode";
    } else {
      pageId = pgid;
      key = "usrtax"
    }
    mappingToolUsageAPI.getToolUsage(pageId, { key, mappedId: userCode || taxCode || userTax }).then(usageGroup => {
      this.setState({
        usageGroup: usageGroup
      });
    });
  }

  handleConfirmDeleteOk(parentConfig) {
    this.setState({
      showConfirm: false
    });

    deletegriddataAPI.deleteGridData(this.props.pgid, '', 'Edit');
    this.renderParent(parentConfig);
  }

  handleConfirmDeleteCancel() {
    this.setState({
      showConfirm: false
    });
  }


  render() {
    const { pgid, formFilterData } = this.props;
    const { pgdef } = metaData[pgid];
    const { pgsubtitle, pgtitle, parentConfig, subtitle } = pgdef;
    const { usageGroup } = this.state;
    const usageGroupDataCount =  (usageGroup.length > 0) ? usageGroup.reduce((sum, data) => ({count : parseInt(sum.count) + parseInt(data.count)})).count : 0;
    return (
      <Container>
        <Row>
          <h1 style={styles.pagetitle}>{pgtitle}</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i className="fas fa-question-circle  fa-lg" onClick={this.OpenHelp} style={styles.helpicon} />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> Help Label </span>
            </UncontrolledTooltip>
          </span>
          {parentConfig ? (
            <span id="filter">
              <i class="fas fa-arrow-up" style={styles.filtericon} onClick={() => this.renderParent(parentConfig)} />
              <UncontrolledTooltip placement="right" target="filter">
                Return to prior screen
              </UncontrolledTooltip>
            </span>
          ) : null}
        </Row>
        <Row>
          <Col xs="12" className='mt-2'>
           <Alert color="info">
            {setTemplateData(pgsubtitle, formFilterData)}
          </Alert>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
           <Alert color="info">
            {setTemplateData(subtitle, formFilterData)}
          </Alert>
          </Col>
        </Row>
        <Row>
          {usageGroup &&
            usageGroup.map((group, index) => {
              return (
                <Col xs="6" style={{ marginBottom: "15px"}} key={index}>
                <Card>
                  <CardHeader>{group.title}</CardHeader>
                  <CardBody>
                  {group.usageData && group.usageData.length ? (group.usageData.splice(0,3) || []).map(({ label,id }) => (
                    <Button key={id} color="link"size="sm" onClick={(event) => this.navigate(event, group, id)}>{label}</Button>
                  )): <p>There is no Data for this Code</p>}
                  {group.usageData && group.usageData.length && group.usageData.length > 3 ? 
                    <Button key='more' color="link"size="sm" onClick={(event) => this.navigateToParent(event, group)}>...More</Button>: null}
                  </CardBody>
                </Card>
                </Col>
              );
            })}
        </Row>
        <Row>
          {
            usageGroupDataCount === 0 &&
            <Button id="runLocatorService" size="sm" color="primary" style={{width:'max-content',margin:'0 auto'}} onClick={() => this.setState({ showConfirm: true })}>
            <i class="fas fa-trash-alt fa-lg fa-1x"></i> Delete
            </Button>
          }
        </Row>
        <ConfirmModal handleOk={() => this.handleConfirmDeleteOk(parentConfig)} handleCancel={this.handleConfirmDeleteCancel}  showConfirm={this.state.showConfirm} cheader={this.state.cheader} cbody={this.state.cbody} okbtnlbl={'Ok'} cancelbtnlbl={'Cancel'}/>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.formData.isOpen,
    formData: state.formData,
    formFilterData: state.formFilterData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeForm, setFormData, getRecentUsage, setFilterFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapToolUsage);
