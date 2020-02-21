import React, { Fragment } from "react";
import { connect } from "react-redux";



import {
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button
} from "reactstrap";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid";
import CustomPaymentsMockData from "../../../uitests/tempGridData/CUSTOM_PAYMENTS_MOCKDATA.json";
import CustomTaxPaymentMockData from "../../../uitests/tempGridData/CUSTOM_TAX_PAYMENT_MOCKDATA.json";
import AllBsiPlansMockData from "../../../uitests/tempGridData/ALL_BSI_PLANS_MOCKDATA.json";
import PopulateV3StatesMockData from "../../../uitests/tempGridData/POPULATE_V3_STATES_MOCKDATA.json";
import RenderHelpPage from "../../tf_index";



class ReusableGrid extends React.Component {
  constructor(props) {
    super(props);
    console.log("metadata>>>>");
    let metadata = this.props.metadata(this.props.pageid);
    console.log(metadata);
    console.log("metadata>>>>");
    console.log("permissions>>>>");
    let permissions = this.props.permissions(this.props.pid);
    console.log(permissions);
    console.log("permissions>>>>");

    this.state = {
      value: "",
      pgdef: metadata.pgdef,
      griddef: metadata.griddef,
      cruddef: metadata.cruddef,
      columns: metadata.griddef.columns,
      dataFields: metadata.griddef.dataFields,
      title: metadata.pgdef.pgtitle,
      addNewLabel: metadata.pgdef.addNewLabel,
      recordEdit: metadata.griddef.recordEdit,
      recordDelete: metadata.griddef.recordDelete,
      hasAddNew: metadata.pgdef.hasAddNew,
      actiondel: metadata.pgdef.actiondel,
      helpLabel: metadata.pgdef.helpLblTxt,
      isOpen: false,
      mockData: [],
      dataSource: {}
    };
    this.OpenHelp = () => {
      window.open("https://www.w3schools.com");
    };
  }


  render() {
   
    let GridDataUrl =  `http://localhost:8000/api/getGridData/${this.state.pgdef.pgid}`  
    // switch (this.state.pgdef.pgid) {
    //   case "allBSIPlans":
    //     mockData = AllBsiPlansMockData;
    //     break;
    //   case "customPayments":
    //     GridDataUrl = `http://localhost:8000/api/getGridData/${this.state.pgdef.pgid}`   
    //     break;
    //   case "customTaxCodes":
    //     mockData = CustomTaxPaymentMockData;
    //     break;
    //   case "populateV3States":
    //     mockData = PopulateV3StatesMockData;
    //     break;
    //   default:
    //     break;
    // }

    const dataSource = {
      datafields: this.state.dataFields,
      aysnc: false,
      datatype: "json",
      url: GridDataUrl    
      
    };
    //localdata: this.props.mockData //mockData

     const source = new window.jqx.dataAdapter(dataSource);

    return (
      <Fragment>
        <Row>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "1.5em"
            }}
          >
            {this.state.title}
          </h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i
                  className="fas fa-question-circle  fa-1.5x"
                  onClick={this.OpenHelp}
                />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col sm="11"></Col>
          <Col sm="1" style={{ paddingRight: 0 }}>
            {this.state.hasAddNew && (
              <span style={{ marginLeft: "10px" }}>
                <span id="addNew">
                  <a href="" onClick="">
                    <i className="fas fa-calendar-plus  fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="addNew">
                  <span> {this.state.addNewLabel}</span>
                </UncontrolledTooltip>
              </span>
            )}
            <span style={{ marginLeft: "5px" }}>
              <span id="delAll">
                {this.state.actiondel ? (
                  <a href="" onClick="">
                    <i className="fas fa-calendar-minus fa-2x" />
                  </a>
                ) : (
                  <a onClick="" disabled>
                    <i
                      className="fas fa-calendar-minus fa-2x"
                      style={{ color: "gainsboro" }}
                    />
                  </a>
                )}
              </span>
              {this.state.actiondel && (
                <UncontrolledTooltip placement="right" target="delAll">
                  <span> Delete All </span>
                </UncontrolledTooltip>
              )}
            </span>
          </Col>
          <Grid
            altrows={true}
            width="100%"
            source={source}
            columns={this.state.columns}
            pageable={true}
            autoheight={true}
            style={{ color: "black", marginTop: "10px" }}
          />
        </Row>
      </Fragment>
    );
  }
}
export default ReusableGrid;
