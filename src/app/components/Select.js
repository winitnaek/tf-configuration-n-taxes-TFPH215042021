import React from 'react';
import { Input, FormGroup, Col , Label} from 'reactstrap';

function Select(props) {
	let defaultSet = false;
	if (props.selectedOption !== "") {
		defaultSet = true;
	}

	return (
		<FormGroup>
			<Col {...props.colWidth}>
            <Label for="exampleText">{props.title}</Label>
				<Input
					type="select"
					name={props.name}
					value={props.selectedOption}
					onChange={props.handleChange}
					required={props.required ? true : false} >
					{!defaultSet &&
					<option value="" disabled>{props.placeholder}</option>}
					{props.options.map(opt => {
						return (
							<option
								key={opt}
								value={opt}>
									{opt}
								</option>
						);
					})}
				</Input>
			</Col>
		</FormGroup>
	);
}

export default Select;