import React, { Component } from "react";
import Modal from "./Modal";
import CustomForm from './CustomForm';

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
     view,
     isfilterform
   } = this.props

   let filter;

   if (isfilterform) {
     filter=true;
   }
    
    const formProps = {close, change, pgid, permissions, deleteRow, submit, renderGrid, filter}
    const form = <CustomForm formProps={formProps} filter={filter} />;
    
    // this.props.isfilterform
    //   ? (form = renderFilterForm(close, change, pgid, deleteRow, view,  renderGrid))
    //   : (form = renderForm(close, change, pgid, permissions, deleteRow, submit ));
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
