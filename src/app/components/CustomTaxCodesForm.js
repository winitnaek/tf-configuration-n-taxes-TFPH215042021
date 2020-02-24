import React, { Component } from "react";
import Select from "./Select";
import Input from "./SingleInput";
import { Form, FormGroup, Button, Container, Col, Alert } from "reactstrap";

class CustomPaymentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange() {}

  handleSubmit() {}

  render() {
    return (
      <Container>
        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
          Custom Tax Codes
        </h3>
        <Form
          onSubmit={this.handleFormSubmit}
          style={{ display: "flex", marginTop: "25px" }}
        >
          <Col sm="6" style={{ marginRight: "0" }}>
            <p style={{ fontWeight: "bold" }}> Edit Custom Tax Codes </p>
            <Input
              inputType={"text"}
              title={"Custom Tax Code *"}
              name={"customTaxCode"}
              required={true}
              onChange={this.handleTextInputChange}
              value={this.state.customeTaxCode}
              placeholder={"Enter Custom Tax Code "}
              feedback={"Text input is required!"}
            />
            <Input
              inputType={"text"}
              title={"Custom Tax Name *"}
              name={"codeTaxName"}
              onChange={this.handleTextInputChange}
              value={this.state.customTaxName}
              placeholder="Enter Custom Tax Name"
              feedback={"Text input is required!"}
              required={true}
            />
          </Col>
        </Form>
      </Container>
    );
  }
}

export default CustomPaymentsForm;
