import React, { Fragment } from "react";
import { connect } from "react-redux";
import CustomPaymentsForm from "./CustomPaymentsForm";

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

let GridFunctions;

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
    let gridDataUrl = this.props.dataurl(this.props.pageid);

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
      gridDataUrl: gridDataUrl,
      isOpen: false,
      mockData: [],
      dataSource: {},
      rendertoolbar: toolbar => {
        toolbar.append($("<span style='margin: 5px;'>Tool Bar</span>"));
      }
    };

    this.OpenHelp = () => {
      window.open("https://www.w3schools.com");
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {}

  handleClick(e) {
    console.log(e.target);
  }

  handleNewForm(e) {
    e.preventDefault();
    console.log("Opening new form");
    this.setState({ isOpen: true });
  }

  exportToExcel(){
    this.refs.reusableGrid.exportdata('xls', 'reusableGrid');
}

exportToCsv(){
  this.refs.reusableGrid.exportdata('csv', 'reusableGrid');
}

  renderToolbar() {}

  render() {
    const dataSource = {
      datafields: this.state.dataFields,
      aysnc: false,
      datatype: "json",
      url: this.state.gridDataUrl
    };

    const source = new window.jqx.dataAdapter(dataSource);

    // Check to see if permissions allow for edit & delete.  If no, then remove column
    let permissions = this.props.permissions(this.props.pid);
    const { columns } = this.state;
    let newColumns = columns
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
                  <a href="" onClick={e => this.handleNewForm(e)}>
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
            ref="reusableGrid"
            id="myGrid"
            width="100%"
            onClick={e => this.handleClick(e)}
            onRowclick={this.handleClick}
            altrows={true}
            source={source}
            columns={newColumns}
            pageable={true}
            autoheight={true}
            style={{ color: "black", marginTop: "10px" }}
            clipboard={true}
            showtoolbar={true}
            rendertoolbar={this.state.renderToolbar}
          />
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <a href="#" id="exportToExcel" onClick={() => this.exportToExcel()}>
            <i class="fas fa-table fa-lg fa-2x"></i>
          </a>
          <UncontrolledTooltip placement="right" target="exportToExcel">
            <span> Export to Excel </span>
          </UncontrolledTooltip>
          <a href="#" id="exportToCsv" onClick={() => this.exportToCsv()} style={{ marginLeft: "10px" }}>
            <i class="fas fa-pen-square fa-lg fa-2x"></i>
          </a>
          <UncontrolledTooltip placement="right" target="exportToCsv">
            <span> Export to CSV </span>
          </UncontrolledTooltip>
        </Row>

        <Modal
          isOpen={this.state.isOpen}
          toggle={e => this.props.toggle()}
          size="lg"
          style={{ width: "1400px" }}
        >
          <ModalHeader toggle={e => this.props.toggle()}>
            {this.props.title}{" "}
          </ModalHeader>
          <ModalBody>
            <CustomPaymentsForm />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={e => this.props.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}
export default ReusableGrid;
