import React, { Component } from "react";
import { connect } from "react-redux"; 
import ReusableForm from "./ReusableForm";
import { updateGrid } from "../../base/utils/updateGrid";
import { renderFields } from "../../base/utils/renderFields";
import { closeForm, saveFormData } from "../actions/formActions";
import { bindActionCreators } from "redux";


class CustomTaxFormulasForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        taxCode:"",
        cmName:"",
        taxRate:"",
        rounding:"",
        minWage:"",
        maxWage:"",
        maxTax:"",
        flatAmount:"",
        startDate:"",
        rescind:"",
    };

    const { formProps } = this.props;
    const { close, change, deleteRow, pgid } = formProps;

    this.resetForm = () => {
      this.setState({
        taxCode:"",
        cmName:"",
        taxRate:"",
        rounding:"",
        minWage:"",
        maxWage:"",
        maxTax:"",
        flatAmount:"",
        startDate:"",
        rescind:"",
      });
    };

    this.handleChange = event => {
      const {target} = event;
      const {value} = target;
      const {name} = target;
      console.log(name, value)
      this.setState({
        [name]: value 
      });
    };

    this.displayFormFields = () => {
      const  formSchema  = [
        {
          name: "taxCode",
          id: "taxCode",
          placeholder: "Enter Tax Code" ,
          type: "text",
          label: "Custom Tax Code Name",
          value: this.state.taxCode,
          onChange: this.handleChange
        },
        {
          name: "cmName",
          id: "cmName",
          placeholder: "Enter Method" ,
          type: "text",
          label: "Method",
          value: this.state.cmName,
          onChange: this.handleChange
        },
       
        {
          name: "taxRate",
          id: "taxRate",
          placeholder: "Enter Tax Rate" ,
          type: "text",
          label: "Tax Rate",
          value: this.state.taxRate,
          onChange: this.handleChange
        },
        {
          name: "rounding",
          id: "rounding",
          placeholder: "Enter Rounding Value" ,
          type: "text",
          label: "Rounding",
          value: this.state.rounding,
          onChange: this.handleChange
        },
        {
          name: "minWage",
          id: "minWage",
          placeholder: "Enter Min Wage" ,
          type: "text",
          label: "Min Wage",
          value: this.state.minWage,
          onChange: this.handleChange
        },
        {
          name: "maxWage",
          id: "maxWage",
          placeholder: "Enter Max Wage" ,
          type: "text",
          label: "Max Wage",
          value: this.state.maxWage,
          onChange: this.handleChange
        },
        {
          name: "maxTax",
          id: "maxTax",
          placeholder: "Enter Max Tax" ,
          type: "text",
          label: "Max Tax",
          value: this.state.maxTax,
          onChange: this.handleChange
        },
        {
          name: "flatAmount",
          id: "flatAmount",
          placeholder: "Enter Flat Amount" ,
          type: "text",
          label: "Flat Amount",
          value: this.state.flatAmount,
          onChange: this.handleChange
        },
        {
          name: "startDate",
          id: "stateDate",
          placeholder: "Enter Start Date" ,
          type: "date",
          label: "Start Date",
          value: this.state.startDate,
          onChange: this.handleChange
        },
        {
          name: "rescind",
          id: "rescind",
          placeholder: "Enter End Date" ,
          type: "date", 
          label: "End Date",
          value: this.state.rescind,
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

      const payload = this.state;
      console.log('Trying to submit')
      console.log(payload)
      const {mode}  = this.props;
      const {pgid, submit} = this.props.formProps
      if (mode === "Edit") {
        rowid = this.props.rowIndex;
      }
      
      submit(pgid, payload, mode, rowid)
      // this.props.saveFormData(payload)
      // Calls external updateGrid function located in ./base/utils
      updateGrid(payload, rowid, mode);
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
      const {   taxCode,
        cmName,
        taxRate,
        rounding,
        minWage,
        maxWage,
        maxTax,
        flatAmount,
        startDate,
        rescind, } = this.props.data;
      if (this.props.mode === "Edit") {
        this.setState({
            taxCode,
            cmName,
            taxRate,
            rounding,
            minWage,
            maxWage,
            maxTax,
            flatAmount,
            startDate,
            rescind,
        });
      }
      this.setState({
        
      });
    }


  }

  render() {
    const { formProps } = this.props;
    const { permissions, close, pgid, submit } = formProps;
    const { handleDelete, resetForm, handleSubmit } = this;
console.log(`YOu are in the worksiteform`)
    return (
      <ReusableForm
        title="Enter Custom Payments"
        submit= {handleSubmit}
        close={close}
        pgid={pgid}
        delete={handleDelete}
        showDelete={this.state.showDelete}
        reset={resetForm}
        // deletePermission={permissions.DELETE}
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ closeForm, saveFormData }, dispatch);
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(CustomTaxFormulasForm);
