import React, { Fragment } from "react";
import { Col, Row, Button,UncontrolledTooltip, } from "reactstrap";
import {tftools} from '../../base/constants/TFTools';
const allBSIPlans = "allBSIPlans";
const populateV3States = "populateV3States";
import {pagetitle,helpicon} from '../../base/constants/AppConstants';
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
      value: "",
      helpLabel: 'Click here for more info',
      title:'User Data Queries',
      isOpen: false
    };
    this.OpenHelp = () => {
      this.props.help('userDataQueries');
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
      <Fragment>
        <Row>
          <h1 style={pagetitle}>{this.state.title}</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i
                  className="fas fa-question-circle  fa-lg"
                  onClick={this.OpenHelp}
                  style={helpicon}
                />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
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
              <Button
                color="link"
                onClick={() => this.renderMe(populateV3States)}
              >
                V3 Polulated States
              </Button>
            </h3>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default UserDataQueries;
