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
  Alert,
  ModalBody,
  ModalFooter
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
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.resetForm = () => {
      this.setState({
        customPaymentCode: "",
        customPaymentName: "",
        paymentType: "Custom Earnings",
        taxability: "Non-Taxable",
        eeMax: ""
      });
    };

    this.handleSubmit = () => {
      // handle validation first then
      const {
        customPaymentCode,
        customPaymentName,
        paymentType,
        taxability,
        eeMax
      } = this.state;

      const payload = {
        customPaymentCode,
        customPaymentName,
        paymentType,
        taxability,
        eeMax
      };

      console.log(payload);
      this.props.close();
    };
  }

  componentDidMount() {
    if (this.props.rowData) {
      const {
        customPaymentCode,
        customPaymentName,
        paymentType,
        taxability,
        eeMax
      } = this.props.rowData;

      this.setState({
        customPaymentCode,
        customPaymentName,
        paymentType, 
        taxability,
        eeMax
      });
    }
  }

  render() {
    return (
      <Container>
        <ModalBody>
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
          <Button onClick={this.handleSubmit} color="success">
            Submit
          </Button>
        </ModalFooter>
      </Container>
    );
  }
}

export default CustomPaymentsForm;
