import React, { Component } from "react";
import {Input, FormFeedback, Col, FormGroup, Label} from "reactstrap";

class CustomInput extends Component {
  render() {
    const renderError = this.props.error ? (
      <FormFeedback>{this.props.error}</FormFeedback>
    ) : null;
    return (
      <FormGroup>
        <Col>
          <Label>{this.props.label}</Label>
          <Input
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
            invalid={this.props.error}
            disabled={this.props.disabled}
          />
          {renderError}
        </Col>
      </FormGroup>
    );
  }
}

export default CustomInput;
