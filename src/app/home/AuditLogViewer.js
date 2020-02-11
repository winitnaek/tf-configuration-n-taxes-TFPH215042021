import React, { Component } from "react";
// import Grid from "../components/JqxGridModal";          //      "../../components/JqxGridModal";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid"; //"../../deps/jqwidgets-react/react_jqxgrid";
import { Container, Col, Row, Button } from "reactstrap";
import Select from "react-select";
import mockData from "./mockdata.json";
import "../../css/grid.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const style = {
  padding: "5px"
};

const columns = [
  { text: "Event Time", datafield: "eventTime" },
  { text: "Login", datafield: "login" },
  { text: "Data Set", datafield: "dataSet" },
  { text: "Tool ID", datafield: "toolId" },
  { text: "Event", datafield: "event" },
  { text: "Event Description", datafield: "eventDescription" }
];

let source = {
  datafields: [
    { name: "eventTime", type: "string" },
    { name: "login", type: "string" },
    { name: "dataSet", type: "string" },
    { name: "toolId", type: "string" },
    { name: "event", type: "string" },
    { name: "eventDescription", type: "string" }
  ],
  aysnc: false,
  datatype: "json",
  localdata: mockData
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
      <Container style={{ marginLeft: "50px" }}>
      
        <Row>
          <h1 style={{color: "#599153", fontWeight: "bold", fontSize: "1.5em", marginLeft: "25px" }}> Audit Log Viewer</h1>
        </Row>
        <Container style={{border: ".25px solid #599153", padding: "50px", marginTop: "25px"}}>
        <Row >
          <Col xs="2" style={style, {fontWeight: "bold"}}>
            Event Filter:
          </Col>
          <Col xs="3" style={style}>
            <Select placeholder="Select Login" options={options} />
          </Col>
          <Col xs="1"/>
          <Col xs="3" style={style}>
            <Select placeholder="Select Data Set" options={options} />
          </Col>
          <Col xs="1"/>
          <Col xs="2" style={style}>
            <Button color="primary"> Delete All </Button>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Grid
            width="100%"
            source={this.state.source}
            columns={columns}
            pageable={true}
            autoheight={true}
          />
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Button color="primary" style={{ margin: "0 auto" , padding: "5px", width: "75px"}}>
            Exit
          </Button>
        </Row>
        </Container>
      </Container>
    );
  }
}

export default AuditLog;
