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
import savegriddataApi from '../api/savegriddataAPI';
import deleteGridDataApi from '../api/deletegriddataAPI';

//import Data  from "../../../uitests/data/Form_Data.json";  
import * as Data from "../metadata/fieldData";
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
              date: CustomInput,
              select: CustomSelect,
              checkbox: CustomCheckbox,
              radio: CustomRadio
            };
            const Component = fieldMap[item.fieldtype];
            let error = props.errors.hasOwnProperty(item.id) && props.errors[item.id];
            if(item.fieldtype) {
              // console.log(item.fieldtype)
                switch(item.fieldtype){
                  case     "text":
                  case     "date":
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
    let initialValues = {};

    this.handleDelete = () => {
      console.log("deleting record");
      const {rowIndex} = this.props.rowIndex
      deleteRow(rowIndex); 
        close();
    };

    this.handleSubmit = (props) => {
      console.log('You just entered handlesubmit')
      console.log(props)
      const {values} = props;
      console.log(values)
  
      const {filter, formProps} = this.props;
      const {pgid} = formProps
      if (filter) {
        this.props.formProps.renderGrid(pgid, props.values);
        // check to see if the below is still needed
        //this.props.setFilterFormData(props.values);
      } else {
          // let rowid = null;
          // console.log("Submitted Values ", values)
          // // Here the key should be same as in schema
          // const mode = this.props.mode;
          // if (mode === "Edit") {
          //   rowid = this.props.rowIndex;
          // }
          // updateGrid(values, rowid, mode);
          // savegriddataApi.saveGridData(pgid, values, mode)

      props.handleSubmit()
      }
    
  }
    
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
            console.log('submitting')
              try {
                  let rowid = null;
                  console.log("Submitted Values ", values)
                  // Here the key should be same as in schema
                  const mode = this.props.mode;
                  if (mode === "Edit") {
                    rowid = this.props.rowIndex;
                  }
                  updateGrid(values, rowid, mode);
                  savegriddataApi.saveGridData(pgid, values, mode)
                  close();
                  actions.resetForm({});
              } catch (error) {
                  actions.setSubmitting(false);
                  actions.setErrors({submit: error.message});
              }
            // }
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
          {(props, actions) => (
            <Form onSubmit={ e=> this.handleSubmit(props)}>
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

