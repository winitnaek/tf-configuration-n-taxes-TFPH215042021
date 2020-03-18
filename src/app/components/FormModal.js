import React, { Component } from "react";
import Modal from "./Modal";
import renderForm from "../../base/utils/renderForm";
import renderFilterForm from "../../base/utils/renderFilterForm";

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleForm() {
    const permissions = this.props.permissions;
    const close = this.props.close;
    const deleteRow = this.props.deleteRow;
    const change = this.props.change;
    const renderGrid = this.props.renderGrid;
    const pgid = this.props.pgid;
    let form;
    // form = renderForm(close, change, pgid, permissions, deleteRow)
    console.log(this.props.isfilterform)
    this.props.isfilterform
      ? (form = renderFilterForm(pgid, close, renderGrid))
      : (form = renderForm(close, change, pgid, permissions, deleteRow));
    return form;
  }

  render() {
   
    return (
      <Modal
        open={this.props.open}
        close={this.props.close}
        title={this.props.title}
        cruddef={this.props.cruddef} 
      >
        {this.handleForm()}
      </Modal>
    );
  }
}
export default ModalForm;
