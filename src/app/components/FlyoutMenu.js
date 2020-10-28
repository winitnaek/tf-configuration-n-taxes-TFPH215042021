import React, { Component } from "react";
import { Section } from "./Section";
import Sidebar from "../home/Sidebar";
import { Row, Col } from "reactstrap";

class FlyoutMenu extends Component {
  render() {
    return (
      <Row>
        {this.props.showSideMenu ? (
          <Col xs="2" className="border-right border-dark">
            <Sidebar handleLink={this.handleLink} />
          </Col>
        ) : null}
        <Col>
          <Row>
            <Col>
              <Section section="Tax Details" sectionHeader="Tax Details" value="UQ" onClick={this.props.onClick} />
              <Section section="formulas" sectionHeader="Quick Formulas" value="UQ" onClick={this.props.onClick} />
            </Col>
            <Col>
              <Section sectionHeader="User Data Queries" value="UQ" onClick={this.props.onClick} />
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FlyoutMenu;
