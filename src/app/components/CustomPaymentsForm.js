import React, { Component } from "react";
import { connect } from "react-redux";
import ReusableForm from "./ReusableForm";
import Select from "./Select";
import Input from "./SingleInput";
import {
  Col 
} from "reactstrap";

class CustomPaymentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customPaymentCode: "",
      customPaymentName: "",
      paymentType: "Custom Earnings",
      taxability: "Non-Taxable",
      eeMax: "",
      aggStatus: "",
      showDelete: false,
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

    this.handleDelete = () => {
      // Add handler to remove this record
      console.log("deleting record");
      this.props.deleteRow(0)   // need to pass index
      this.props.close();
    };
  }

  componentDidMount() {
    if (this.props.data) {
      console.log(this.props.data.taxability);

      if (this.props.mode === "Edit") {
        this.setState({
          customPaymentCode: this.props.data.customPaymentCode,
          customPaymentName: this.props.data.customPaymentName,
          paymentType: this.props.data.paymentType,
          taxability: this.props.data.taxability,
          eeMax: this.props.data.eeMax,
          showDelete: true,
        });
      }
    }
  }

  render() {
    return (
      <ReusableForm
        title="Enter Custom Payments"
        submit={this.handleSubmit}
        close={this.props.close}
        delete={this.handleDelete}
        reset={this.resetForm}
        showDelete={this.state.showDelete}
        deletePermission={this.props.permissions.DELETE}  
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
      </ReusableForm>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.formData.data,
    mode: state.formData.mode
  };
}

export default connect(mapStateToProps, null)(CustomPaymentsForm);
