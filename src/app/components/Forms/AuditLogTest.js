import React, { Component } from "react";
import Grid from "../../components/JqxGridModal";
import { Container, Col, Row, Button } from "reactstrap";

const colums = [
  { text: "Event Time", datafield: "eventTime" },
  { text: "Login", datafield: "login" },
  { text: "Data Set", datafield: "dataSet" },
  { text: "Tool ID", datafield: "toolId" },
  { text: "Event", datafield: "event" },
  { text: "Event Description", datafield: "eventDescription" }
];

let source = {
  datafields: [
  { name: 'eventTime', type: 'string' },
  { name: 'login', type: 'string' },
  { name: 'dataSet', type: 'string' },
  { name: 'toolId', type: 'string' },
  { name: 'event', type: 'string' },
  { name: 'eventDescriptions', type: 'string' },
  ],


  aysnc: false,
  datatype: "json",
  localdata: "" ,  //this.props.details
};

class AuditLog extends Component {
    constructor(props) {
        super(props);
  this.state = {
    source: new window.jqx.dataAdapter(source)
  };
}
  render() {
    return (
      <Container>
        <Row>
          <h1> Audit Log Viewer</h1>
        </Row>
        <Row>
          <Col>Event Filter:</Col>
          <Col> Select Login</Col>
          <Col> Select Data Set</Col>
          <Col>
            <Button> Delete All </Button>
          </Col>
        </Row>
        <Row>
        <Grid
          width="100%"
          source={this.state.source}
          columns={columns}
          pageable={true}
          autoheight={true}
        />
        </Row>
        <Row>
            <Button> Exit </Button>
        </Row>
      </Container>
    );
  }
};

export default AuditLog;
