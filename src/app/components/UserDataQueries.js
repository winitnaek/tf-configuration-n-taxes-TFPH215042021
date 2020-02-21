import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { tftools } from "../../base/constants/TFTools";
const allBSIPlans = "allBSIPlans";
const populateV3States = "populateV3States";

const TitleStyle = {
  margin: "0 auto",
  paddingBottom: "50px"
};


const LinkStyles = {
  marginTop: "50px"
}

class UserDataQueries extends React.Component {
  constructor(props) {
    super(props);
    console.log("metadata>>>>");
    console.log(this.props.metadata);
    this.state = {
      value: ""
    };
  }
  renderMe(pgid) {
    let data = tftools.filter(tftool => {
      if (tftool.id == pgid) return tftool;
    });
    renderTFApplication("pageContainer", data[0]);
  }
  render() {
    return (
      <Container>
        <Row>
          <h1 style={TitleStyle}> User Data Queries</h1>
        </Row>
        <Row >
          <Col sm="3"/>
          <Col sm="3">
            <h3 Style={LinkStyles}>
              <Button color="primary" onClick={() => this.renderMe(allBSIPlans)}>
                All BSI Plan
              </Button>
            </h3>
          </Col>
          <Col sm="3">
            <h3 Style={{margin: "50px !important"}}>
              <Button
                color="primary"
                onClick={() => this.renderMe(populateV3States)}
              >
                V3 Polulated States
              </Button>
            </h3>
          </Col>
          <Col sm="3"/>
        </Row>
      </Container>
    );
  }
}
export default UserDataQueries;
