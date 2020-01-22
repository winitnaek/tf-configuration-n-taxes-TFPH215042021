import React from "react";
import {Col, Row , Container} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle} from "@fortawesome/free-solid-svg-icons";

const DisplayLinks = props => {
  return (
    <Container style={{alignItems: 'flex-start', marginTop: '400px'}}>
      <h3 style={{textAlign:'left'}}> {props.title} </h3>
      {props.links &&
          props.links.map(item => {
      
      return (
      
      <Row style={{textAlign: "left", marginBottom: "5px"}}>
          <Col >
          <FontAwesomeIcon icon={faCircle} style={{fontSize: 'xx-small'}}/>
            <a style={{textDecoration: "none", listStyleType: 'square', padding: '10px !important'}}href={item.link}> {item.label} </a>
           
          </Col>


      </Row>
      )})}

    </Container>
  );
};

export default DisplayLinks;
