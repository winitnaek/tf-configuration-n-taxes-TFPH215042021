import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

class reusableModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    return (
      <Modal
        isOpen={this.props.open}
        toggle={e => this.props.close()}
        size="lg"
        style={{ width: "1400px", marginTop: "175px" }}
      >
        <ModalHeader
          toggle={e => this.props.close()}
          style={{ fontWeight: "bold" }}
        >
          {this.props.title}
        </ModalHeader>
        {this.props.children}
      </Modal>
    );
  }
}
export default reusableModal;
