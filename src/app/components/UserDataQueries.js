import React from "react";
import { Col, Row, Button } from "reactstrap";
import {tftools} from '../../base/constants/TFTools';
const allBSIPlans = "allBSIPlans";
const populateV3States = "populateV3States";
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
    let data = tftools.filter(tftool => { if (tftool.id==pgid) return tftool});
    renderTFApplication("pageContainer", data[0]);
  }
  render() {
    return (
      <Row>
        <Col>
          <h3>
            <Button color="link" onClick={() => this.renderMe(allBSIPlans)}>
              All BSI Plan
            </Button>
          </h3>
        </Col>
        <Col>
          <h3>
            <Button color="link" onClick={() => this.renderMe(populateV3States)}>
              V3 Polulated States
            </Button>
          </h3>
        </Col>
      </Row>
    );
  }
}
export default UserDataQueries;
