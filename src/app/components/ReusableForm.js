import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "./Select";
import Input from "./SingleInput";
import {modalBody} from '../../base/constants/AppConstants';
import {
  Form,
  FormGroup,
  Button,
  Container,
  Col,
  Row,
  Alert,
  ModalBody,
  ModalFooter
} from "reactstrap";

class ReusableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <ModalBody>
          <Form
            onSubmit={this.props.submit}
            style={modalBody}
          >
            {this.props.children}
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            className="btn btn-primary"
            onClick={this.props.close}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            className="btn btn-primary mr-auto"
            onClick={this.props.reset}
          >
            Reset
          </Button>

          {this.props.showDelete && this.props.deletePermission && (
            <Button onClick={e => this.props.delete()} color="danger">
              Delete
            </Button>
          )}

          
          <Button onClick={this.props.submit} color="success">
           {this.props.filter ? ( "View") : ("Submit") }
          </Button>
        </ModalFooter>
      </Container>
    );
  }
}

export default ReusableForm;
