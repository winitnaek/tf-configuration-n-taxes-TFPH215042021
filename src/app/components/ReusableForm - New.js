import React, { Component } from "react";
import { modalBody } from "../../base/constants/AppConstants";
import { customTaxCodesFormSchema } from "../formSchemas/customTaxCodesFormSchema";
import {renderFields} from '../../base/utils/renderFields';

import { Form, Button, Container, ModalBody, ModalFooter } from "reactstrap";

class ReusableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: []
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
    
    this.displayFormFields = (formSchema) => {
      const fields = renderFields(formSchema);
      return fields;
    };

  }

  componentDidMount() {
    customTaxCodesFormSchema.map(field => {
      this.setState({ 
        [field.name]: "" 
      });
    });
  }

  render() {
    let schema =[]
    if (customTaxCodesFormSchema) {
     schema = customTaxCodesFormSchema.map((field, index) => {
      console.log(this.state.values)
      return (        {
          name: field.name,
          id: field.id,
          placeholder: field.placeholder,
          type: field.type,
          label: field.label,
          value: this.state.$[field.name],
          onChange: this.onChange
        })
     });
  }

  

console.log(schema)
    return (
      <Container>
        <ModalBody>
          <Form onSubmit={this.props.submit} style={modalBody}>
            {/* {this.props.children} */}

            {this.displayFormFields(schema)}


          </Form>
        </ModalBody>

        <ModalFooter>
          <Button
            color="primary"
            className="btn btn-primary"
            onClick={this.props.close}
          >
            Cancel
          </Button>
          <Button
            color="secondary"
            className="btn btn-primary mr-auto"
            onClick={this.props.reset}
          >
            Reset
          </Button>

          {this.props.showDelete && this.props.deletePermission && (
            <Button onClick={e => this.props.delete()} color="danger">
              Delete
            </Button>
          )}
          <Button onClick={this.props.submit} color="success">
            {this.props.filter ? "View" : "Submit"}
          </Button>
        </ModalFooter>
      </Container>
    );
  }
}

export default ReusableForm;
