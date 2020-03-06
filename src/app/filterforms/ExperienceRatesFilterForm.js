import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReusableForm from "../components/ReusableForm";
import Input from "../components/SingleInput";
import { Col, Row } from "reactstrap";
import { setFilterFormData } from "../home/actions/filterFormActions";
import { subTitle } from "../../base/constants/AppConstants";

class ExperienceRatesFilterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taxCode: "",
      companyCode: "",
      startDate: "",
      riskClass: ""
    };

    this.resetForm = () => {
      this.setState({
        taxCode: "",
        companyCode: "",
        startDate: "",
        riskClass: ""
      });
    };

    this.handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    this.handleView = () => {
      console.log(this.state);

      const payload = {
        pageId: "experienceRates",
        dataset: appDataset(),
        userId: appUserId(),
        companyCode: this.state.companyCode,
        taxCode: this.state.taxCode,
        startdate: this.state.startDate,
        riskClass: this.state.riskClass,
        taxType: this.state.taxType,
        formNumber: 0
      };

      this.props.setFilterFormData(payload);
      const pgid = "experienceRates";
      this.props.renderGrid(pgid);
    };
  }
  render() {
    console.log(this.props);
    return (
      <ReusableForm
        title="Enter Custom Payments"
        filter={true}
        submit={this.handleView}
        close={this.props.close}
        reset={this.resetForm}
      >
        <Row>
          <Col sm="1" />
          <Col sm="5">
            <Input
              inputType={"text"}
              title={"Tax Code"}
              name={"taxCode"}
              onChange={this.handleChange}
              value={this.state.taxCode}
              placeholder={"Enter Tax Code Here"}
            />

            <Input
              inputType={"date"}
              title={"Start Date"}
              name={"startDate"}
              onChange={this.handleChange}
              value={this.state.startDate}
            />
          </Col>
          <Col sm="5">
            <Input
              inputType={"text"}
              title={"Company Code"}
              name={"companyCode"}
              onChange={this.handleChange}
              value={this.state.companyCode}
              placeholder={"Enter Company Code Here"}
            />

            <Input
              inputType={"text"}
              title={"Risk Class"}
              name={"riskClass"}
              onChange={this.handleChange}
              value={this.state.riskClass}
              placeholder={"Enter Risk Class Here"}
            />
          </Col>
          <Col sm="1" />

          <Col sm="12" style={subTitle}>
            <p>
              * No entry will imply ALL selection for company code and tax code.
            </p>
            <p>
              ALL must be explicitly specified for risk class, since blank is a
              valid value.
            </p>
          </Col>
        </Row>
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
)(ExperienceRatesFilterForm);
