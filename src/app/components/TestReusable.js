import React, { Fragment } from "react";
import { Col, Row, UncontrolledTooltip } from "reactstrap";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid";
import CustomPaymentsMockData from "../metadata/tempGridData/CUSTOM_PAYMENTS_MOCKDATA.json";
import CustomTaxPaymentMockData from "../metadata/tempGridData/CUSTOM_TAX_PAYMENT_MOCKDATA.json";
import AllBsiPlansMockData from "../metadata/tempGridData/ALL_BSI_PLANS_MOCKDATA.json";
import PopulateV3StatesMockData from "../metadata/tempGridData/POPULATE_V3_STATES_MOCKDATA.json";

class TestReusable extends React.Component {
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
      hasAddNew: metadata.pgdef.hasAddNew,
      actiondel: metadata.pgdef.actiondel,
      helpLabel: metadata.pgdef.helpLblTxt,
    };
  }
  render() {
    let mockData;
    switch (this.state.pgdef.pgid) {
      case "allBSIPlans":
        mockData = AllBsiPlansMockData;
        break;
      case "customPayments":
        mockData = CustomPaymentsMockData;
        break;
      case "customTaxCodes":
        mockData = CustomTaxPaymentMockData;
        break;
      case "populateV3States":
        break;
      default:
        break;
    }

    const dataSource = {
      datafields: this.state.dataFields,
      aysnc: false,
      datatype: "json",
      localdata: mockData
    };
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
              <a href="" onClick="">
                <i className="fas fa-question-circle  fa-1.5x" />
              </a>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row>
          <p> {this.state.addNewLabel} </p>
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
                  <span> Add New </span>
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
            {/* )} */}
          </Col>
          <Grid
            altrows={true}
            width="100%"
            source={source}
            columns={this.state.columns}
            pageable={true}
            autoheight={true}
            style={{ color: "black", marginTop: "10px" }}
            selectionmode={"singlecell"}
          />
        </Row>
      </Fragment>
    );
  }
}
export default TestReusable;