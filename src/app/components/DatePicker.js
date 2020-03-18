import React from 'react';
import { FormGroup, Label,  FormFeedback, Col } from 'reactstrap';
import {SingleDatePicker} from 'react-dates';

const SingleInput = (props) => (
	<FormGroup>
		<Col {...props.colWidth}>
		<Label  for="">{props.title}</Label>
		<SingleDatePicker
			id={props.name}
			date={props.value}
			onDateChange={date => props.onChange({date})}
			onBlur={props.blurFunc}
			onFocus={props.focusFunc}
            width={props.colWidth}
		 	valid={props.valid} />
            
			<FormFeedback>{props.feedback}</FormFeedback>
		</Col>
	</FormGroup>
);

export default SingleInput;