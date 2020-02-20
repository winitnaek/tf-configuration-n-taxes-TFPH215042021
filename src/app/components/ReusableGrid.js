import React, { Fragment } from "react";
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


const cellsrenderer = () => {
  console.log("attempting to render edit");
  return (
     ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log('hello')}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`
  )

};


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
      recordEdit: true, // metadata.griddef.recordEdit,
      recordDelete: metadata.griddef.recordDelete,
      hasAddNew: metadata.pgdef.hasAddNew,
      actiondel: metadata.pgdef.actiondel,
      helpLabel: metadata.pgdef.helpLblTxt,
      isOpen: false
    };
    this.OpenModal = () => {
      console.log("Attempting to open Modal");
      this.setState({ isOpen: true });
    };

    this.closeModal = () => {
      console.log("Close button clicked");
      this.setState({
        isOpen: false
      });
    };

    this.renderEdit = () => {
      console.log("attempting to render edit");
      return ( "Edit"
        //  ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log('hello')}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`
      )

    };
  }

  componentDidMount() {
    // Make Api call here to get database on pgid

    const recordEdit = this.state.recordEdit;

    // this.setState({
    //   columns: [
    //     ...this.state.columns,
    //     {
    //       text: "Edit",
    //       datafield: "edit",
    //       align: "center",
    //       width: "10%",
    //       cellsrenderer: function(
    //         ndex,
    //         datafield,
    //         value,
    //         defaultvalue,
    //         column,
    //         rowdata
    //       ) {
    //         return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log('hello')}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`;
    //       },
    //     }
    //   ],

    //  dataSource: {
    //     datafields: this.state.dataFields,
    //     aysnc: false,
    //     datatype: "json",
    //     localdata: mockData
    //   }, 
    



    // });



    // if (this.state.recordEdit) {
    //   console.log("yes")
    //   this.setState({
    //     recordEdit: [...this.state.recordEdit,
    //       {
    //         text: "Edit",
    //         datafield: "edit",
    //         align: "center",
    //         width: "10%",
    //         cellsrender: function(
    //           ndex,
    //           datafield,
    //           value,
    //           defaultvalue,
    //           column,
    //           rowdata
    //         ) {
    //           return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={console.log('hello')}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`;
    //         }
    //       }
    //     ],
    //      dataFields: [...this.state.dataFields,   {"name": "edit", "type": "string"} ]
    //   });

    // }

    // console.log(this.state.columns);
  }

  render() {
    // This all will be refactored into componentdidmount to make api call to get data
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
        mockData = PopulateV3StatesMockData;
        break;
      default:
        break;
    }

  

       const dataSource = {
        datafields: this.state.dataFields,
        aysnc: false,
        datatype: "json",
        localdata: mockData
      }

    const source = new window.jqx.dataAdapter(dataSource);

    console.log(this.state.columns);

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
                {" "}
                {/* add onclick to open modal for help */}
                <i
                  className="fas fa-question-circle  fa-1.5x"
                  onClick={this.OpenModal}
                />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row>{/* <p> {this.state.addNewLabel} </p> */}</Row>
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
            // selectionmode={"singlecell"}
          />
        </Row>
        <Modal isOpen={this.state.isOpen} toggle={this.closeModal}>
          <ModalHeader toggle={this.closeModal}>
            {" "}
            {this.state.title} Help{" "}
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.closeModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}
export default ReusableGrid;
