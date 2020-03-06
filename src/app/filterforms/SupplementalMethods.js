import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReusableForm from "../components/ReusableForm";
import Input from "../components/SingleInput";
import { Col, Row } from "reactstrap";
import { setFilterFormData } from "../actions/filterFormActions";
import { subTitle } from "../../base/constants/AppConstants";

class SupplementalMethodsFilterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taxCode: "",
      taxType: "",
      formulaNumber: "",
      startDate: ""
    };

    this.resetForm = () => {
      this.setState({
        taxCode: "",
        taxType: "",
        formulaNumber: "",
        startDate: ""
      });
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleView = () => {
      console.log(this.state);
      const pgid = "supplementalMethods";
      const payload = {
        pageId: pgid,
        dataset: appDataset(),
        userId: appUserId(),
        companyCode: '',
        taxCode: this.state.taxCode,
        startdate: this.state.startDate,
        formulaNo: this.state.formulaNumber,
        riskClass: '',
        taxType: this.state.taxType,
        formNumber: 0
      };
      this.props.setFilterFormData(payload);
      this.props.renderGrid(pgid);
    };
  }
  render() {
    console.log(this.props);
    return (
      <ReusableForm
        title="Supplemental Methods"
        filter={true}
        submit={this.handleView}
        close={this.props.close}
        reset={this.resetForm}
      >
        <Col sm="3" />
        <Col sm="6">
          <Input
            inputType={"text"}
            title={"Tax Code"}
            name={"taxCode"}
            onChange={this.handleChange}
            value={this.state.taxCode}
            placeholder={"Enter Tax Code Here"}
          />
          <Input
            inputType={"text"}
            title={"Tax Type"}
            name={"taxType"}
            onChange={this.handleChange}
            value={this.state.taxType}
            placeholder={"Enter Tax Type Here"}
          />
          <Input
            inputType={"text"}
            title={"Formula Number"}
            name={"formulaNumber"}
            onChange={this.handleChange}
            value={this.state.formulaNumber}
            placeholder={"Enter Formula Number Here"}
          />
          <Input
            inputType={"date"}
            title={"Start Date"}
            name={"startDate"}
            onChange={this.handleChange}
            value={this.state.startDate}
          />
        </Col>
        <Col sm="3" />
      </ReusableForm>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.formData.data,
    isOpen: state.formData.isOpen,
    index: state.formData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFilterFormData }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplementalMethodsFilterForm);
