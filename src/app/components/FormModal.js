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

   const {
     permissions, 
     close,
     deleteRow, 
     change,
     renderGrid,
     pgid,
     submit,
     view

   } = this.props

    let form;
    
    
    this.props.isfilterform
      ? (form = renderFilterForm(close, change, pgid, deleteRow, view,  renderGrid))
      : (form = renderForm(close, change, pgid, permissions, deleteRow, submit ));
    return form;
  }

  render() {
   console.log(this.props)
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
