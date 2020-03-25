import React, { Component } from "react";
import {Input, FormFeedback, Col, FormGroup, Label} from "reactstrap";

class CustomSelect extends Component {
  render() {
    let defaultSet = false;
    // if (this.props.field.selectedOption !== "") {
    //   defaultSet = true;
    // }

    const renderError = this.props.error ? (
      <FormFeedback>{this.props.error}</FormFeedback>
    ) : null;

    return (
      <FormGroup>
        <Col>
          <Label>{this.props.label}</Label>
          <Input
            type="select"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            invalid={this.props.error}
          >
              {!defaultSet && (
                <option value="" disabled>
                  {this.props.placeholder}
                </option>
              )}
              {this.props.fieldinfo.options.map(opt => {
                return (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                );
              })}
          </Input>
          {renderError}
        </Col>
      </FormGroup>
    );
  }
}

export default CustomSelect;
