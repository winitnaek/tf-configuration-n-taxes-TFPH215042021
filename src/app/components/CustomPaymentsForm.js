import React, { Component } from "react";
import Select from "./Select";
import Input from "./SingleInput";
import { Form, FormGroup, Button, Container, Col, Alert } from "reactstrap";

class CustomPaymentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customePaymentCode: "",
      customPaymentName: "",
      paymentType: "",
      taxability: "",
      eeMax: "",
      aggStatus: "",
      typeOptions: ["Custom Earnings", "Custom Benefit Plan"],
      taxabilityOptions: [
        "Non-Taxable",
        "Limit-YTD",
        "Limit-QTD",
        "Limit-MTD",
        "Taxable/Exclude",
        "Imputed"
      ]
    };
  }

  handleChange() {}

  handleSubmit() {}

  render() {
    return (
      <Container >
        <h3 style={{textAlign: "center", fontWeight: "bold"}}>Custom Payments </h3>

        <Form
          onSubmit={this.handleFormSubmit}
          style={{ display: "flex", marginTop: "25px"  }}
        >
          <Col sm="6" style={{ marginRight: "0" }}>
            <p style={{ fontWeight: "bold" }}> Enter Custom Payments </p>
            <Input
              inputType={"text"}
              title={"Code *"}
              name={"code"}
              required={true}
              onChange={this.handleTextInputChange}
              value={this.state.customePaymentCode}
              placeholder={"Enter Custom Code Here"}
              feedback={"Text input is required!"}
            />

            <Select
              name={"paymentType"}
              placeholder={"Select a type"}
              title={"Type"}
              value={this.handleCategorySelect}
              options={this.state.typeOptions}
              selectedOption={this.state.typeSelection}
            />

            <Input
              inputType={"text"}
              title={"Custom Payment Name *"}
              name={"codeName"}
              onChange={this.handleTextInputChange}
              value={this.state.customPaymentName}
              placeholder="Enter Custom Payment Name"
              feedback={"Text input is required!"}
              required={true}
            />
          </Col>

          <Col sm="6" style={{ marginRight: "0" }}>
            <p style={{ fontWeight: "bold" }}> Custom Earning Details</p>

            <Select
              name={"paymentType"}
              placeholder={"Select a type"}
              title={"Taxability*"}
              value={this.state.taxabilityt}
              options={this.state.taxabilityOptions}
              selectedOption={this.state.typeSelection}
              required={true}
            />

            <Input
              inputType={"text"}
              title={"Maximum Limit"}
              name={"maxLimit"}
              onChange={this.handleTextInputChange}
              value={this.state.maxLimit}
              placeholder="Enter Maximum Limit Here"
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
