import React from 'react';
import Select from './Select';
import Input from './SingleInput';
import { Form, FormGroup, Button,
    Container, Col, Alert } from 'reactstrap';
    

    class CustomPaymentsForm extends Component {
        state = {
            customePaymentCode: "",
            customPaymentName: "",
            paymentType: "",
            taxability: "",
            eeMax: "",
            aggStatus: "",
          }


          handleChange = () => {

          }

          handleSubmit = () => {



          }


        render() { 
            return (
                <Container >
				<h2>Custom Payments </h2>
				<Form onSubmit={this.handleFormSubmit}>
                    <Input
                    inputType={'text'}
                    title={'Title for SingleInput field:'}
                    name={'textInput'}
                    changeFunc={this.handleTextInputChange}
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

