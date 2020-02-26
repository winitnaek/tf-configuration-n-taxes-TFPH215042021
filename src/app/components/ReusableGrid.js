import React, { Fragment } from "react";
import { connect } from "react-redux";
import CustomPaymentsForm from "./CustomPaymentsForm";
import CustomTaxCodesForm from "./CustomTaxCodesForm";
import { myRowIndex } from "../metadata/cellsrenderer";
import { getRowIndex } from "../metadata/cellsrenderer";
import Modal from "./Modal";

import {
  Col,
  Row,
  UncontrolledTooltip,
  Button,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid";
import { customTaxCodes } from "../metadata/metaData";

let GridFunctions;

class ReusableGrid extends React.Component {
  constructor(props) {
    super(props);
    const handleEditClick = () => {
      console.log(`This is the index `);
    };
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
      pgid: metadata.pgdef.pgid,
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
      dataSource: {}
    };

    this.handleNewForm = e => {
      e.preventDefault();
      console.log("Opening new form");
      this.setState({ isOpen: true });
      console.log(getRowIndex());
      console.log(this.refs.reusableGrid.getrowdata(0));
    };

    this.OpenHelp = () => {
      window.open("https://www.w3schools.com");
    };

    this.toggle = () => {
      this.setState({ isOpen: !this.state.isOpen });
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // console.log(this.state.columns);
  }

  exportToExcel() {
    this.refs.reusableGrid.exportdata("xls", "reusableGrid");
    console.log(this.refs.reusableGrid);
  }

  exportToCsv() {
    this.refs.reusableGrid.exportdata("csv", "reusableGrid");
  }

  renderForm() {
    const toggle = this.toggle;
    this.state.code;
    console.log(this.state.pgid);
    const { pgid } = this.state;
    switch (pgid) {
      case "customPayments":
        return <CustomPaymentsForm close={toggle} change={this.handleChange} />;
        break;
      case "customTaxCodes":
        return <CustomTaxCodesForm close={toggle} change={this.handleChange} />;
    }
  }

  handleRowData(index) {
    console.log(`The row index is ${index}`);
  }

  handleRowClick(e) {
    this.refs.reusableGrid.getRowData(0);
    console.log(e);
  }

  renderToolbar() {}

  render() {
    const dataSource = {
      datafields: this.state.dataFields,
      aysnc: false,
      datatype: "json",
      url: this.state.gridDataUrl
    };

    const handleEditClick = () => {
      console.log("clicked");
    };

    const editCellsRenderer = ndex => {
      const pgid = this.state.pgid;
      return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={editClick('[${ndex},${pgid}]')}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`;
    };

    const deleteCellsRenderer = ndex => {
      return ` <div id='delete-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={''}> <i class="fas fa-calendar-minus  fa-1x" color="primary"/> </div>`;
    };

    const source = new window.jqx.dataAdapter(dataSource);
    const editColumn = {
      text: "Edit",
      datafield: "edit",
      align: "center",
      width: "10%",
      cellsrenderer: editCellsRenderer
    };

    const deleteColumn = {
      text: "Delete",
      datafield: "delete",
      align: "center",
      width: "10%",
      cellsrenderer: deleteCellsRenderer
    };

    // Check to see if permissions allow for edit & delete.  If no, then remove column
    let permissions = this.props.permissions(this.props.pid);
    const { columns } = this.state;
    console.log(columns);
    let newColumns = columns;
    newColumns = [...newColumns, editColumn, deleteColumn];
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
              <i
                className="fas fa-question-circle  fa-lg"
                onClick={this.OpenHelp}
                style={{ paddingTop: "10px" }}
              />
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
          <Grid
            ref="reusableGrid"
            id="myGrid"
            width="100%"
            altrows={true}
            source={source}
            columns={newColumns}
            pageable={true}
            autoheight={true}
            style={{ color: "black", marginTop: "10px" }}
          />
        </Row>

        <Row style={{ marginTop: "10px" }}>
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
            style={{ marginLeft: "10px" }}
          >
            <i class="fas fa-pen-square fa-lg fa-2x"></i>
          </a>
          <UncontrolledTooltip placement="right" target="exportToCsv">
            <span> Export to CSV </span>
          </UncontrolledTooltip>
        </Row>

        <Modal
          open={this.state.isOpen}
          close={this.toggle}
          title={this.state.title}
        >
          {this.renderForm()}
        </Modal>
      </Fragment>
    );
  }
}
export default ReusableGrid;
