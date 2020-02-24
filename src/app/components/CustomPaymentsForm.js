import React, {Component} from 'react';
import Select from './Select';
import Input from './SingleInput';
import { Form, FormGroup, Button,
    Container, Col, Alert } from 'reactstrap';
    

    class CustomPaymentsForm extends Component {
        constructor(props) {
            super(props);
    
        this.state = {
            customePaymentCode: "",
            customPaymentName: "",
            paymentType: "",
            taxability: "",
            eeMax: "",
            aggStatus: "",
          }
        }

          handleChange ()  {

          }

          handleSubmit ()  {



          }


        render() { 
            return (
                <Container >
				<h2>Custom Payments </h2>
				<Form onSubmit={this.handleFormSubmit}>
                    <Input
                    inputType={'text'}
                    title={'Code *'}
                    name={'textInput'}
                    onChange={this.handleTextInputChange}
                    value={this.state.textInput}
                    placeholder={''}
                     valid={this.state.textInputValid}
                     feedback = {'Text input is required!'}
                    // colWidth = ""
                    />

                    </Form>
                    </Container>

              );
        }
    }
     
    export default CustomPaymentsForm;

