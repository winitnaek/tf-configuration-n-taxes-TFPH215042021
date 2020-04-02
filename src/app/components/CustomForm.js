import React, { Component } from "react";
import { Formik, Form} from "formik";
import { connect } from "react-redux";
import { Col, Button, Row } from "reactstrap";
import { updateGrid } from "../../base/utils/updateGrid";
import { tftools } from "../../base/constants/TFTools";
import * as Metadata from "../metadata/metaData";

import CustomInput from "./reusable/customInput";
import CustomSelect from "./reusable/customSelect";
import CustomRadio from "./reusable/customRadio";
import CustomCheckbox from "./reusable/customCheckbox";

import { setFilterFormData } from "../actions/filterFormActions";
import gridDataApi from "../api/griddataAPI";
import savegriddataApi from "../api/savegriddataAPI";
import deleteGridDataApi from "../api/deletegriddataAPI";
import { modalBody } from "../../base/constants/AppConstants";
import Usage from "./Usage";

import { Container, ModalBody, ModalFooter } from "reactstrap";

//import Data  from "../../../uitests/data/Form_Data.json";
import * as Data from "../metadata/fieldData";
import { createYupSchema } from "../../base/utils/yupSchemaCreatorNew";

import * as yup from "yup";

class CustomForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDelete: false
    };
    this.handleView = () => {
      //need to get values to pass
      const { formProps } = this.props;
      const { pgid } = formProps;
      console.log("this is the handle view");
      // this.props.setFilterFormData(values);
      let data = tftools.filter(tftool => {
        if (tftool.id == pgid) return tftool;
      });
      renderTFApplication("pageContainer", data[0]);
      console.log("this is the render me function");
    };
  }

  disabledHandler(id) {
    try {
      let formflds = Metadata[this.props.formProps.pgid].formdef.formflds;
      if (formflds) {
        let row = formflds.filter(r => id == r.id);
        if (row.length > 0) {
          if (row[0].isReadOnlyOnEdit == true && this.props.mode == "Edit") {
            return true;
          } else if (
            row[0].isReadOnlyOnNew == true &&
            this.props.mode != "Edit"
          ) {
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      console.log("error", error);
    }
  }

  renderFormElements(props, formData) {
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
      if (item.fieldtype) {
        switch (item.fieldtype) {
          case "text":
          case "date":
          case "radio":
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
            );
          case "checkbox":
          case "select":
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
                onChange={props.setFieldValue}
                error={error}
                pgid={this.props.formProps.pgid}
              />
            );
        }
      }
      return "";
    });
  }

  render() {
    const { formProps } = this.props;
    const { close, change, permissions, deleteRow, pgid } = formProps;
    const formData = Data[pgid];
    let initialValues = {};

    this.displayForm = () => {
      return (
          <Formik
            initialValues={initialValues}
            validationSchema={validateSchema}
            onSubmit={(values, actions) => {
              try {
                    let rowid = null;
                    const mode = this.props.mode;
                    if (mode === "Edit") {
                      rowid = this.props.rowIndex;
                    }
                    if(!this.props.filter){
                      updateGrid(values, rowid, mode);
                      savegriddataApi.saveGridData(pgid, values, mode);
                    }else{
                        this.props.formProps.renderMe(pgid, values);
                    }
                    close();
                    actions.resetForm({});
              } catch (error) {
                    console.log("Form Error >>>>>>  ", error);
                    actions.setSubmitting(false);
                    actions.setErrors({ submit: error.message });
              }
            }}
            onReset={() => {
              formData.forEach(item => {
                if (item.fieldtype != "select" && item.fieldinfo.options) {
                  item.fieldinfo.options.forEach(subItem => {
                    document.getElementById(subItem.id).checked = false;
                  });
                }
              });
            }}
          >
            {(props) => (
              <Form>
                <Container>
                  <ModalBody>
                    <Form onSubmit={this.props.submit} style={modalBody}>
                        <Col>{this.renderFormElements(props, formData)}</Col>
                    </Form>
                    <Usage pgid={pgid} />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" className="btn btn-primary" onClick={close}> Cancel </Button>
                    <Button color="secondary" className="btn btn-primary mr-auto" type="reset"> Reset </Button>
                    {this.props.showDelete && this.props.deletePermission && (
                      <Button onClick={e => this.props.delete()} color="danger"> Delete </Button>
                    )}
                    <Button type="submit" color="success"> {this.props.filter ? " View " : " Submit "}</Button>
                  </ModalFooter>
                </Container>
              </Form>
            )}
          </Formik>
      );
    };

    this.handleDelete = () => {
      console.log("deleting record");
      const { rowIndex } = this.props.rowIndex;
      deleteRow(rowIndex);
      close();
    };

    if (this.props.mode == "Edit") {
      initialValues = this.props.data;
    } else {
      formData.forEach((item, index) => {
        initialValues[item.id] = item.value || "";
      });
    }

    const yepSchema = formData.reduce(createYupSchema, {});
    const validateSchema = yup.object().shape(yepSchema);
    return (
      this.displayForm()
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
