import React from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';

const SingleInput = (props) => (
	<FormGroup>
		<Col {...props.colWidth}>
		<Label  for="exampleText">{props.title}</Label>
		<Input
			name={props.name}
			type={props.inputType}
			value={props.value}
			onChange={props.onChange}
			onBlur={props.blurFunc}
			onFocus={props.focusFunc}
            placeholder={props.placeholder}
            width={props.colWidth}
		 	valid={props.valid} />
            
			<FormFeedback>{props.feedback}</FormFeedback>
		</Col>
	</FormGroup>
);

export default SingleInput;
