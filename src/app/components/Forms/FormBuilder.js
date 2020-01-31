import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

let schema = {};
let uiSchema;

const log = type => console.log.bind(console, type);


const FormBuilder = props => {



  const handleSummit = () => {
    props && props.submit && props.submit()
  }


console.log(props)
if ( props && props.schema) {
  schema = props.schema

}

if (props && props.uiSchema) {
  uiSchema = props.uiSchema
}



  return (
    <Form
      uiSchema={uiSchema}
      schema={schema}
      onChange={log("changed")}
      onSubmit={handleSummit()}
      onError={log("errors")}
    >
      {props.children}
      </Form>
  );
};

export default FormBuilder;
