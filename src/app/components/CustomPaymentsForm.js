import React, { Component } from "react";
import Select from "./Select";
import Input from "./SingleInput";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Col,
  Row,
  Alert
} from "reactstrap";

class CustomPaymentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customPaymentCode: " ",
      customPaymentName: " ",
      paymentType: "Custom Earnings",
      taxability: "Non-Taxable",
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

    this.handleChange = event => {
      console.log(event.target.name);
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleSubmit = () => {
      // handle validation first then
      const {
        customPaymentCode,
        customPaymentName,
        paymentType,
        taxability
      } = this.state;

      const payload = {
        customPaymentCode,
        customPaymentName,
        paymentType,
        taxability
      }

      console.log(payload);
    };
  }

  render() {
    return (
      <Container>
        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
          Custom Payments{" "}
        </h3>
        <Form
          onSubmit={this.handleFormSubmit}
          style={{ display: "flex", marginTop: "25px" }}
        >
          <Col sm="6" style={{ marginRight: "0" }}>
            <p style={{ fontWeight: "bold" }}> Enter Custom Payments </p>
            <Input
              inputType={"text"}
              title={"Code *"}
              name={"customPaymentCode"}
              required={true}
              onChange={this.handleChange}
              value={this.state.customPaymentCode}
              placeholder={"Enter Custom Code Here"}
              feedback={"Text input is required!"}
            />

            <Select
              name={"paymentType"}
              id="paymentType"
              placeholder={"Select a type"}
              title={"Type"}
              value={this.state.paymentType}
              options={this.state.typeOptions}
              onChange={this.handleChange}
            />
            <Input
              inputType={"text"}
              title={"Custom Payment Name *"}
              name={"customPaymentName"}
              required={true}
              onChange={this.handleChange}
              value={this.state.customPaymentName}
              placeholder={"Enter Custom Payment Name"}
              feedback={"Text input is required!"}
            />
          </Col>

          <Col sm="6" style={{ marginRight: "0" }}>
            <p style={{ fontWeight: "bold" }}> Custom Earning Details</p>

            <Select
              name={"taxability"}
              placeholder={"Select a type"}
              title={"Taxability*"}
              value={this.state.taxability}
              options={this.state.taxabilityOptions}
              onChange={this.handleChange}
              required={true}
            />

            <Input
              inputType={"text"}
              title={"Maximum Limit"}
              name={"eeMax"}
              onChange={this.handleChange}
              value={this.state.eeMax}
              placeholder="Enter Maximum Limit Here"
              feedback={"Text input is required!"}
              required={true}
            />
          </Col>
        </Form>
        <div style={{ width: "10%", margin: "10px auto" }}>
          <Button onClick={this.handleSubmit} color="primary">
            {" "}
            Submit{" "}
          </Button>
        </div>
      </Container>
    );
  }
}

export default CustomPaymentsForm;
