import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tftools } from "../../base/constants/TFTools";
import { closeForm, setFormData } from "../home/actions/formActions";
import { copyToClipboard } from "../../base/utils/copyToClipBoard";
import ClipboardToast from "../components/ClipboardToast";
import Modal from "./FormModal";
import {
  pagetitle,
  helpicon,
  filtericon,
  gridStyle,
  gridRowStyle,
  gridLinkStyle,
  iconPaddingRight,
  iconPaddingLeft,
  marginRight10,
  rowTop,
  helpMargin
} from "../../base/constants/AppConstants";
import renderForm from "../../base/utils/renderForm";
import renderFilterForm from "../../base/utils/renderFilterForm";
import {
  Col,
  Row,
  UncontrolledTooltip,
  Button,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid";

let GridFunctions;

class ReusableGrid extends React.Component {
  constructor(props) {
    super(props);
    console.log("metadata>>>>");
    console.log(this.props);
    let metadata = this.props.metadata(this.props.pageid);
    console.log(metadata);
    console.log("metadata>>>>");
    console.log("permissions>>>>");
    let permissions = this.props.permissions(this.props.pid);

    console.log(permissions);
    console.log("permissions>>>>");
    let gridDataUrl = this.props.dataurl(this.props.pageid);

    let inputData = {
      pageId: metadata.pgdef.pgid,
      dataset: appDataset(),
      userId: appUserId()
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
      addNewLabel: metadata.pgdef.addNewLabel,
      recordEdit: metadata.griddef.recordEdit,
      recordDelete: metadata.griddef.recordDelete,
      hasAddNew: metadata.pgdef.hasAddNew,
      actiondel: metadata.pgdef.actiondel,
      helpLabel: metadata.pgdef.helpLblTxt,
      gridDataUrl: gridDataUrl,
      filter: metadata.griddef.filtergrid,
      mockData: [],
      inputData: inputData,
      allSelected: false,
      showClipboard: false,
      numOfRows: 0,
    };

    this.handleNewForm = e => {
      // All this does is trigger the modal to open
      e.preventDefault();
      const payload = { data: {}, mode: "New" };
      this.props.setFormData(payload);
    };

    this.OpenHelp = () => {
      this.props.help(this.state.pgid);
    };

    this.toggle = () => {
      this.props.closeForm();
    };

    this.deleteRow = () => {
      const { index } = this.props.index;
      let _id = document.querySelector("div[role='grid']").id;
      const rowid = $("#" + _id).jqxGrid("getrowid", index);
      $("#" + _id).jqxGrid("deleterow", rowid);
    };

    this.renderMe = pgid => {
      let data = tftools.filter(tftool => {
        if (tftool.id == pgid) return tftool;
      });
      renderTFApplication("pageContainer", data[0]);
      this.props.close();
    };
  }

  componentDidMount() {}

  exportToExcel() {
    this.refs.reusableGrid.exportdata("xls", "reusableGrid");
  }

  exportToCsv() {
    this.refs.reusableGrid.exportdata("csv", "reusableGrid");
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

  selectAll(event) {
    event.preventDefault();
    this.setState({ allSelected: true });
    let _id = document.querySelector("div[role='grid']").id;
    $("#" + _id).jqxGrid("selectallrows");
  }

  unselectAll(event) {
    event.preventDefault();
    console.log("unselecting");
    this.setState({ allselected: false });
    let _id = document.querySelector("div[role='grid']").id;
    $("#" + _id).jqxGrid("clearselection");
  }

  // handleForm() {
  //   const cruddef = this.state.cruddef;
  //   const permissions = this.props.permissions(this.props.pid);
  //   const close = this.toggle;
  //   const deleteRow = this.deleteRow;
  //   const change = this.handleChange;
  //   const renderGrid = this.renderMe;
  //   const { pgid } = this.state;
  //   let form;
  //   this.state.filter
  //     ? (form = renderFilterForm(pgid, close, renderGrid))
  //     : (form = renderForm(close, change, pgid, permissions, deleteRow));
  //   return form;
  // }

  renderMe(pgid) {
    let data = tftools.filter(tftool => {
      if (tftool.id == pgid) return tftool;
    });
    renderTFApplication("pageContainer", data[0]);
    this.toggle;
  }

  render() {
    let source = {
      datatype: "json",
      datafields: this.state.dataFields,
      url: this.state.gridDataUrl,
      type: "GET",
      contenttype: "application/json",
      data: this.state.inputData,
      filter: function() {
        // update the grid and send a request to the server.
        let _id = document.querySelector("div[role='grid']").id;
        $("#" + _id).jqxGrid("updatebounddata", "filter");
      },
      sort: function() {
        // update the grid and send a request to the server.
        let _id = document.querySelector("div[role='grid']").id;
        $("#" + _id).jqxGrid("updatebounddata", "sort");
      },
      beforeprocessing: function(data) {
        if (data != null) {
          source.totalrecords = data.totalRowCount;
        }
      }
    };

    const editCellsRenderer = ndex => {
      const pgid = this.state.pgid;
      return ` <div id='edit-${ndex}'style="text-align:center; margin-top: 10px; color: #4C7392" onClick={editClick(${ndex})}> <i class="fas fa-pencil-alt  fa-1x" color="primary"/> </div>`;
    };

    // const dataSource = new window.jqx.dataAdapter(source);
    let dataSource = new $.jqx.dataAdapter(source, {
      // remove the comment to debug
      formatData: function(data) {
        //alert(JSON.stringify(data));
        var noOfFilters = data.filterscount;
        var i;
        for (i = 0; i < noOfFilters; i++) {
          //if ("generatedDateTime" === data["filterdatafield" + i]) {
          //   data["filtervalue" + i] = $.jqx.formatDate(new Date(data["filtervalue" + i]), 'yyyyMMdd');
          // alert(data["filtervalue" + i]);
          //}
        }
        try {
          return JSON.stringify(data);
        } catch (error) {
          return data;
        }
      },
      downloadComplete: function(data, status, xhr) {
        console.log("downloadComplete source");
        console.log(source);
        if (!source.totalrecords) {
          source.totalrecords = data.length;
        }
      },
      loadError: function(xhr, status, error) {
        throw new Error(error);
      }
    });
    const editColumn = {
      text: "Edit",
      datafield: "edit",
      align: "center",
      width: "5%",
      cellsrenderer: editCellsRenderer
    };

    // Check to see if permissions allow for edit & delete.  If no, then remove column
    let permissions = this.props.permissions(this.props.pid);
    const { columns , numOfRows, showClipboard} = this.state;
    let newColumns = columns;

    if (this.state.recordEdit) {
      newColumns = [...newColumns, editColumn];
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
    return (
      <Fragment>
        <Row>
          <h1 style={pagetitle}>{this.state.title}</h1>
          <span style={helpMargin}>
            <span id="help">
              <i
                className="fas fa-question-circle  fa-lg"
                onClick={this.OpenHelp}
                style={helpicon}
              />
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
          {this.state.filter && (
            <span>
              <span id="filter">
                <i
                  class="fas fa-filter fa-lg"
                  style={filtericon}
                  onClick={this.handleNewForm}
                />
              </span>
              <UncontrolledTooltip placement="right" target="filter">
                <span> Modify Selection Criteria</span>
              </UncontrolledTooltip>
            </span>
          )}
        </Row>
        <Row style={rowTop}>
          <Col xs="1" style={iconPaddingLeft}>
            {!this.state.allSelected && (
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

            {this.state.allSelected && (
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
              <a href="" onClick={e => this.unselectAll(e)}>
                <span>
                  <i className="fas fa-redo-alt fa-2x" />
                </span>
              </a>
            </span>
            <UncontrolledTooltip placement="right" target="unselectAll">
              <span> Unselect All </span>
            </UncontrolledTooltip>
          </Col>
          <Col sm="10">
            {showClipboard && (
              <ClipboardToast numOfRows={this.state.numOfRows} />
            )}
          </Col>
          <Col sm="1" style={iconPaddingRight}>
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
            source={dataSource}
            columns={newColumns}
            pageable={true}
            autoheight={true}
            selectionmode="multiplerows"
            style={gridStyle}
            virtualmode={false}
          />
        </Row>

        <Row style={gridRowStyle}>
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
            style={gridLinkStyle}
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
            style={gridLinkStyle}
          >
            <i class="far fa-copy fa-lg fa-2x"></i>
          </a>
          <UncontrolledTooltip placement="right" target="copyToClipboard">
            <span> Copy to clipboard </span>
          </UncontrolledTooltip>
        </Row>

        <Modal
          open={this.props.isOpen}
          close={this.props.closeForm}
          title={this.state.title}
          cruddef={this.state.cruddef}
          permissions={this.props.permissions(this.props.pid)}
          deleteRow={this.deleteRow}
          change={this.handleChange}
          renderGrid={this.renderMe}
          pgid={this.state.pgid}
          filter={this.state.filter}
        />
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.formData.data,
    isOpen: state.formData.isOpen,
    index: state.formData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeForm, setFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReusableGrid);
