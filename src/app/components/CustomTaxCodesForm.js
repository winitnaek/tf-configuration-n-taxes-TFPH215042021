import React, { Component } from "react";
import { connect } from "react-redux";
import ReusableForm from "./ReusableForm";
import { updateGrid } from "../../base/utils/updateGrid";
import Input from "./SingleInput";
import { bold } from "../../base/constants/AppConstants";
import { Col } from "reactstrap";
import { formSchema } from "../../base/utils/testFormSchema";
import { renderFields } from "../../base/utils/renderFields";

class TestForm extends Component {
  constructor(props) {
    super(props);   

    this.state = {
      customTaxCode: "",
      customTaxName: "",
      formSchema: [],
      showDelete: false
    };

    const { formProps } = this.props;
    const { close, change, deleteRow, pgid } = formProps;

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

    this.displayFormFields = () => {
      const  formSchema  = [
        {
          name: "customTaxCode",
          id: "customTaxCode",
          placeholder: "Enter Custom Tax Code",
          type: "text",
          label: "Custom Tax Code",
          value: this.state.customTaxCode,
          onChange: this.handleChange
        },
        {
          name: "customTaxName",
          id: "customTaxName",
          placeholder: "Enter Custom Tax Name",
          type: "text",
          label: "Custom Tax Name",
          value: this.state.customTaxName,
          onChange: this.handleChange
        }
      ]
      const fields = renderFields(formSchema);
      return fields;
    };

    this.setInitalValues = () => {
      // formSchema.map(item => {
      //   this.setState({ values: {...this.state.values, item: ""}  });
      // })
    };

    this.handleSubmit = () => {
      let rowid = null;

      const payload = {
        taxCode: this.state.customTaxCode,
        name: this.state.customTaxName
      };
      console.log(payload)
      const {mode}  = this.props;
      const {pgid, submit} = this.props.formProps

      if (mode === "Edit") {
        rowid = this.props.rowIndex;
      }
    
      updateGrid(payload, rowid, mode);
      submit(pgid, payload, mode, rowid)
      close();
    };

    this.handleDelete = () => {
      console.log("deleting record");
      deleteRow(0); // need to pass index
      close();
    };
  }

  componentDidMount() {
    if (this.props.data) {
      console.log(this.props.data);
      const { taxCode, name } = this.props.data;
      if (this.props.mode === "Edit") {
        this.setState({
          customTaxCode: taxCode,
          customTaxName: name,
          showDelete: true
        });
      }
      this.setState({
        formSchema: [
          {
            name: "customTaxCode",
            id: "customTaxCode",
            placeholder: "Enter Custom Tax Code",
            type: "text",
            label: "Custom Tax Code",
            value: this.state.customTaxCode,
            onChange: this.handleChange
          },
          {
            name: "customTaxName",
            id: "customTaxName",
            placeholder: "Enter Custom Tax Name",
            type: "text",
            label: "Custom Tax Name",
            value: this.state.customTaxName,
            onChange: this.handleChange
          }
        ]
      });
    }

    this.setInitalValues;
  }

  render() {
    const { formProps } = this.props;
    const { permissions, close, pgid } = formProps;
    const { handleDelete, handleSubmit, resetForm } = this;

    return (
      <ReusableForm
        title="Enter Custom Payments"
        submit={handleSubmit}
        close={close}
        pgid={pgid}
        delete={handleDelete}
        showDelete={this.state.showDelete}
        reset={resetForm}
        deletePermission={permissions.DELETE}
      >
        {this.displayFormFields()}
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

export default connect(mapStateToProps, null)(TestForm);
