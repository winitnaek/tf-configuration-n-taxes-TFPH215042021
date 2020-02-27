import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./SingleInput";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Col,
  Row,
  ModalBody,
  ModalFooter
} from "reactstrap";

class CustomTaxCodesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customTaxCode: "",
      customTaxName: ""
    };

    this.resetForm = () => {
      this.setState({
        customTaxCode: "",
        customTaxName: ""
      });
    };

    this.handleChange = event => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      console.log(name);
      console.log(value);
      this.setState({
        [name]: value
      });
    };

    this.handleSubmit = () => {
      const payload = this.state;
      console.log(payload);
      this.props.close();
    };
  }

  componentDidMount() {
    if (this.props.data) {
      const { customTaxCode, customTaxName } = this.props.data;

      this.setState({
        customTaxCode,
        customTaxName
      });
    }
  }

  render() {
    return (
      <Container>
        <ModalBody>
          <Form onSubmit={this.handleSubmit} style={{ marginTop: "25px" }}>
            <Row style={{ margin: "0 auto", width: "26%" }}>
              <p style={{ fontWeight: "bold" }}> Enter Custom Tax Codes </p>
            </Row>

            <Row style={{ width: "69%", margin: "10px auto" }}>
              <FormGroup>
                <Input
                  id="customTaxCode"
                  inputType={"text"}
                  title={"Custom Tax Code *"}
                  name={"customTaxCode"}
                  required={true}
                  onChange={this.handleChange}
                  value={this.state.customTaxCode}
                  placeholder={"Enter Custom Tax Code "}
                  feedback={"Text input is required!"}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  inputType={"text"}
                  title={"Custom Tax Name *"}
                  name={"customTaxName"}
                  onChange={this.handleChange}
                  value={this.state.customTaxName}
                  placeholder={"Enter Custom Tax Name"}
                  feedback={"Text input is required!"}
                />
              </FormGroup>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="secondary"
            className="btn btn-primary"
            onClick={this.props.close}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            className="btn btn-primary mr-auto"
            onClick={this.resetForm}
          >
            Reset
          </Button>
          {this.props.permissions.DELETE && (
            <Button onClick={this.handleDelete} color="danger">
              Delete
            </Button>
          )}
          <Button onClick={this.handleSubmit} color="success">
            Submit
          </Button>
        </ModalFooter>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.formData.data
  };
}

export default connect(mapStateToProps, null)(CustomTaxCodesForm);
