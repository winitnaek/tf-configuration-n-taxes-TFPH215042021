import React, { Component } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import {Col, Button, Form, Row} from "reactstrap";
import ReusableForm from "./ReusableForm";
import { updateGrid } from "../../base/utils/updateGrid";
import { tftools } from "../../base/constants/TFTools";
import * as Metadata from "../metadata/metaData";

import CustomInput from "./reusable/customInput";
import CustomSelect from "./reusable/customSelect";
import CustomRadio from "./reusable/customRadio";
import CustomCheckbox from "./reusable/customCheckbox";
import { setFilterFormData } from "../actions/filterFormActions";
import gridDataApi from '../api/griddataAPI';
import saveGridDataApi from '../api/savegriddataAPI';
import deleteGridDataApi from '../api/deletegriddataAPI';
import Data  from "../../../uitests/data/Form_Data.json";  
// import {fielddatamap} from "../metadata/fieldData";  


// import { createYupSchema } from "../../base/utils/yupSchemaCreator";
import { createYupSchema } from "../../base/utils/yupSchemaCreatorNew";

import * as yup from "yup";

class CustomForm extends Component {

  constructor(props){
    super(props);
    this.state={
      showDelete: false,
    }
    this.handleView = () => {
      //need to get values to pass
      const { formProps } = this.props;
    const { pgid } = formProps;
      console.log('this is the handle view')
      // this.props.setFilterFormData(values);
       let data = tftools.filter(tftool => {
        if (tftool.id == pgid) return tftool;
       });
     renderTFApplication("pageContainer", data[0]);
       console.log("this is the render me function")
    }
  } 

  disabledHandler(id){
      try{
          let formflds = Metadata[this.props.formProps.pgid].formdef.formflds;
          if(formflds) {
            let row = formflds.filter(r => id == r.id)
            if(row.length > 0){
                if (row[0].isReadOnlyOnEdit == true && this.props.mode == "Edit"){
                  return true;
                }else if(row[0].isReadOnlyOnNew == true && this.props.mode != "Edit"){
                  return true;
                }
            }
        }
        return false;
      } catch (error) {
        console.log("error", error);
      }
  };

  renderFormElements (props, formData) { 
    return formData.map((item, index) => {
            const fieldMap = {
              text: CustomInput,
              select: CustomSelect,
              checkbox: CustomCheckbox,
              radio: CustomRadio
            };
            const Component = fieldMap[item.fieldtype];
            let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
            if(item.fieldtype) {
                switch(item.fieldtype){
                  case     "text":
                  case   "select":
                  case    "radio":
                    return (
                      <Component
                          key={index}
                          type={item.fieldtype}
                          label={item.label}
                          fieldinfo={item.fieldinfo}
                          name={item.id}
                          id={item.id}
                          placeholder={item.placeholder}
                          disabled={this.disabledHandler(item.id)}
                          value={props.values[item.id]}
                          onChange={props.handleChange}
                          error={error}
                      />
                    )
                    case  "checkbox":
                    return ( 
                      <Component
                          key={index}
                          type={item.fieldtype}
                          label={item.label}
                          id={item.id}
                          fieldinfo={item.fieldinfo}
                          placeholder={item.placeholder}
                          value={props.values[item.id]}
                          onChange={props.setFieldValue}
                          error={error}
                      />
                    )
                }
            }
            return "";
          }) 
  };

  render() {
    const { formProps } = this.props;
    const { close, change, permissions, deleteRow, pgid } = formProps;
    const { handleDelete, handleSubmit, resetForm } = this;
    
    console.log("Pgidadfadsf ", pgid);
    const formData = Data[pgid];
    // const formData = fielddatamap.filter(obj => obj.id == "customTaxCode"); 
    let initialValues = {};

    this.handleDelete = () => {
      // Add handler to remove this record
      console.log("deleting record");
      deleteRow(0); // need to pass index
      close();
    };
    
    if(this.props.mode == "Edit"){
      initialValues = this.props.data;
    }else{
      formData.forEach((item,index) => {
        initialValues[item.id] = item.value || "";
      });
    }

    const yepSchema = formData.reduce(createYupSchema, {});
    //console.log("yup Schema ", yepSchema);
    const validateSchema = yup.object().shape(yepSchema);
    

   console.log(this.props)

    return (
      <div className="form">
        <Formik
          initialValues={initialValues}
          validationSchema={validateSchema}
          onSubmit={(values, actions) => {
            console.log('summiting')
            if(this.props.filter) {
              console.log('this is a filter form submit')
              this.handleView(values)
            } else {
              try {
                  let rowid = null;
                  console.log("Submitted Values ", values)
                  // Here the key should be same as in schema
                  const mode = this.props.mode;
                  if (mode === "Edit") {
                    rowid = this.props.rowIndex;
                  }
                  updateGrid(values, rowid, mode);
                  close();
                  actions.resetForm({});
              } catch (error) {
                  action.setSubmitting(false);
                  action.setErrors({submit: error.message});
              }
            }
          }}
          onReset={() => {
            formData.forEach(item => {
              if(item.fieldtype != "select" &&  item.fieldinfo.options){
                item.fieldinfo.options.forEach(subItem => {
                  document.getElementById(subItem.id).checked = false;
                })
              }
            });
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <ReusableForm
                title="Enter Custom Payments"
                close={close}
                pgid={pgid}
                delete={handleDelete}
                reset={props.handleReset}
                showDelete={this.state.showDelete}
                deletePermission={permissions ? permissions.DELETE : false}
                handleView={this.props.handleView}
                filter={this.props.filter}
                view={this.handleView}
              >
                  <Col>
                     {this.renderFormElements(props, formData)}
                  </Col> 
              </ReusableForm>
            </Form>
          )}
        </Formik>
      </div>
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

export default connect(mapStateToProps, null)(CustomForm);

