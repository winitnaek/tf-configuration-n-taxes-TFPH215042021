import React, { Component } from "react";
import { connect } from "react-redux";
import ReusableForm from "./ReusableForm";
import Select from "./Select";
import Input from "./SingleInput";
import { updateGrid } from "../../base/utils/updateGrid";

import { Col } from "reactstrap";

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

    const { formProps } = this.props;
    const { close, change, permissions, deleteRow } = formProps;

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.resetForm = () => {
      if (this.props.mode === "Edit") {
        this.setState({
          customPaymentCode: this.props.data.userCode,
          customPaymentName: this.props.data.name,
          paymentType: this.props.data.payType,
          taxability: this.props.data.taxability,
          eeMax: this.props.data.eemax,
          showDelete: true
        });
      } else {
        this.setState({
          customPaymentCode: "",
          customPaymentName: "",
          paymentType: "Custom Earnings",
          taxability: "Non-Taxable",
          eeMax: ""
        });
      }
    };

    this.handleSubmit = () => {
      let rowid = null;
      const {
        customPaymentCode,
        customPaymentName,
        paymentType,
        taxability,
        eeMax
      } = this.state;
      const payload = {
        userCode: customPaymentCode,
        name: customPaymentName,
        payType: paymentType,
        taxability,
        eemax: eeMax,
        aggstatus: "N/A"
      };
      const {mode}  = this.props;
      const {pgid, submit} = this.props.formProps
  
      if (mode === "Edit") {
        rowid = this.props.rowIndex;
      }
      submit(pgid, payload, mode, rowid)
      updateGrid(payload, rowid, mode);
      close();
    };

    this.handleDelete = () => {
      // Add handler to remove this record
      console.log("deleting record");
      deleteRow(0); // need to pass index
      close();
    };
  }

  componentDidMount() {
    if (this.props.data) {
      console.log(this.props.data.taxability);

      if (this.props.mode === "Edit") {
        this.setState({
          customPaymentCode: this.props.data.userCode,
          customPaymentName: this.props.data.name,
          paymentType: this.props.data.payType,
          taxability: this.props.data.taxability,
          eeMax: this.props.data.eemax,
          showDelete: true
        });
      }
    }
  }

  render() {
    console.log(this.props);
    const { formProps } = this.props;
    const { permissions, close, pgid , submit} = formProps;
    const { handleDelete, handleSubmit, resetForm } = this;
    return (
      <ReusableForm
        title="Enter Custom Payments"
        submit={handleSubmit}
        close={close}
        pgid={pgid}
        delete={handleDelete}
        reset={resetForm}
        showDelete={this.state.showDelete}
        deletePermission={permissions.DELETE}
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
    mode: state.formData.mode,
    rowIndex: state.formData.index
  };
}

export default connect(mapStateToProps, null)(CustomPaymentsForm);
