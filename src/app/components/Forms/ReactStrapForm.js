import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import FormBuilder from './FormBuilder'
import {uiSchema, schema}  from '../../../base/utils/FormSchemas/CustomPaymentSchema' 


const Example = (props) => {
  return (
      <div>
          <h2>   This form combines both React Json Schema and React Strap forms  </h2>.
      <Card>
          <CardBody>
              <h3> This part is using the react jason schema form</h3>
    <FormBuilder schema={schema} uiSchema={uiSchema} >
        
    <Form>
        <h3>   This part is using React Strap</h3>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        </FormGroup>
    </Form>
    </FormBuilder>
    <Button color="primary"> Submit</Button>
    </CardBody>
    </Card>
    </div>
  );
}

export default Example;