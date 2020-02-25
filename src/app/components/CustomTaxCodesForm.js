import React, { Component } from "react";
import Select from "./Select";
import Input from "./SingleInput";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Col,
  Row,
  Alert
} from "reactstrap";

class CustomPaymentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customTaxCode: "",
      customTaxName: ""
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

    this.handleSubmit = () => {
      const payload = this.state;
      console.log(payload);
    };
  }

  render() {
    console.log(this.state.customTaxCode);
    return (
      <Container>
        <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
          Custom Tax Codes
        </h3>
        <Form
          onSubmit={this.handleSubmit}
          style={{ marginTop: "25px" }}
        >
          <Row style={{margin: "0 auto", width: "26%"}}>
            <p style={{ fontWeight: "bold",  }}> Enter Custom Tax Codes </p>
          </Row>

          <Row  style={{  width: "69%", margin: "10px auto" }}>
            <FormGroup>
              <Input
                id="customTaxCode"
                inputType={"text"}
                title={"Custom Tax Code *"}
                name={"customTaxCode"}
                required={true}
                onChange={this.handleChange}
                value={this.state.customTaxCode}
                placeholder={"Enter Custom Tax Code "}
                feedback={"Text input is required!"}
              />
            </FormGroup>
            <FormGroup>
              {/* <Input
                id="customTaxName"
                inputType={"text"}
                title={"Custom Tax Name *"}
                name={"customTaxName"}
                required={true}
                onChange={this.handleChange}
                value={this.state.customTaxName}
                placeholder={"Enter Custom Tax Name "}
                feedback={"Text input is required!"}
                // type="text"
                // name="customTaxName"
                // value={this.state.customTaxName}
                // onChange={this.handleChange}
              /> */}

              <Input
                inputType={"text"}
                title={"Custom Tax Name *"}
                name={"customTaxName"}
                onChange={this.handleChange}
                value={this.state.customTaxName}
                placeholder={"Enter Custom Tax Name"}
                feedback={"Text input is required!"}
              />
            </FormGroup>
          </Row>
        </Form>
        <div style={{ width: "10%", margin: "0 auto" }}>
          <Button onClick={this.handleSubmit} color="primary">
            {" "}
            Submit{" "}
          </Button>
        </div>
      </Container>
    );
  }
}

export default CustomPaymentsForm;
