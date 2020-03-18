import React, { Component } from "react";
import {modalBody} from '../../base/constants/AppConstants';
import Usage from "./Usage";

import {
  Form,
  Button,
  Container,
  ModalBody,
  ModalFooter
} from "reactstrap";

class ReusableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {pgid} = this.props;
    console.log(pgid)
    return (
      <Container>
        <ModalBody>
          <Form
            onSubmit={this.props.submit}
            style={modalBody}
          >
            {this.props.children}
          </Form>
		      <Usage pgid={pgid}/>
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
