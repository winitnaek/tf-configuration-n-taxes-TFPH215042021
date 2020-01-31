import React from "react";
import Form from "../components/Forms/FormBuilder";
import {uiSchema, schema}  from '../../base/utils/FormSchemas/CustomPaymentSchema';
import {
  Container,
  Card,
  CardBody,
} from "reactstrap";
import {connect} from 'react-redux';



class CustomPayments extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }

    this.handleSubmit = () => {
        console.log('The form has been submitted')
        // Call Redux dispact here
    }

    }
    render() {
  return (
    <Container style={{ marginTop: "-50px", marginBotton: "50px" }}>
      <h2 style={{textAlign: "center"}}> Custom Payments</h2>
     
      <Card style={{ width: "50%", margin: "0 auto", marginTop: "50px" }}>
        <CardBody>
          <Form schema={schema} uiSchema={uiSchema} submit={this.handleSubmit}/>
        </CardBody>
      </Card>
      <p style={{ marginTop: "25px", textAlign: "center" }}>
        Note: Required fields are marked with an asterisk (*){" "}
      </p>
    </Container>
  );
};
}



function mapStateToProps(state) {
    return {
      
    };
  }
  function mapDispatchToProps(dispatch) {
    return;  //bindActionCreators({ }, dispatch);
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CustomPayments);
  