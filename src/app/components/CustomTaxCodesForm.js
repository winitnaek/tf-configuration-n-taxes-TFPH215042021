import React, { Component } from "react";
import { connect } from "react-redux";
import ReusableForm from "./ReusableForm";
import Input from "./SingleInput";
import { bold } from "../../base/constants/AppConstants";
import {
  Col,
} from "reactstrap";

class CustomTaxCodesForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customTaxCode: "",
      customTaxName: "",
      showDelete: false
    };
  
    const {formProps} = this.props
    const {close, change,  deleteRow} = formProps;

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
      close();
    };

    this.handleDelete = () => {
      console.log("deleting record");
      deleteRow(0)   // need to pass index
      close();
    };

  }

  componentDidMount() {
    if (this.props.data) {
      console.log(this.props.data)
      const { taxCode, name } = this.props.data;
      if (this.props.mode === "Edit") {
      this.setState({
        customTaxCode: taxCode,
        customTaxName: name,
        showDelete: true
      });
    }
  }
}

  render() {
    const {formProps} = this.props
    const {permissions, close} = formProps;
    const {handleDelete, handleSubmit, resetForm} = this
    return (
      <ReusableForm
        title="Enter Custom Payments"
        submit={handleSubmit}
        close={close}
        delete={handleDelete}
        showDelete={this.state.showDelete}
        reset={resetForm}
        deletePermission={permissions.DELETE}
      >
       <Col sm="2"/>
        <Col sm="8">
        <p style={bold}> Enter Custom Tax Codes </p>
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
              style={{width: "40% !important"}}
            />
            <Input
              inputType={"text"}
              title={"Custom Tax Name *"}
              name={"customTaxName"}
              onChange={this.handleChange}
              value={this.state.customTaxName}
              placeholder={"Enter Custom Tax Name"}
              feedback={"Text input is required!"}
            />
        </Col>
        <Col sm="2"/>
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

export default connect(mapStateToProps, null)(CustomTaxCodesForm);
