import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { subTitle, modal } from "../../base/constants/AppConstants";

class reusableModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.cruddef);
    return (
      <Modal
        isOpen={this.props.open}
        size="lg"
        style={modal}
      >
        <ModalHeader toggle={e => this.props.close()}>
          <span> {this.props.title} </span>
        </ModalHeader>
        <p style={subTitle}> { this.props.subtitle && this.props.cruddef.subtitle} </p>
        {this.props.children}
      </Modal>
    );
  }
}
export default reusableModal;
