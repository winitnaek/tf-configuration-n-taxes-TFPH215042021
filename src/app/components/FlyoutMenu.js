import React, { Component } from "react";
import Section from "./Section";
import Sidebar from "../home/Sidebar";
import { Row, Col } from "reactstrap";

class FlyoutMenu extends Component {
  render() {
    const { showSideMenu, options, favorites = [], setFavorite, onClick } = this.props;
    return (
      <Row>
        {showSideMenu ? (
          <Col xs="3" className="border-right border-dark">
            <Sidebar handleLink={this.handleLink} favorites={favorites} setFavorite={setFavorite} onClick={onClick}/>
          </Col>
        ) : null}
        <Col>
          <Row>
            <Col>
              <Section
                favorites={favorites}
                options={options}
                section="Tax Details"
                sectionHeader="Tax Details"
                sectionIcon='book'
                value="UQ"
                onClick={onClick}
                setFavorite={setFavorite}
              />
              <Section
                favorites={favorites}
                options={options}
                section="formulas"
                sectionHeader="Quick Formulas"
                sectionIcon='flask'
                value="UQ"
                onClick={onClick}
                setFavorite={setFavorite}
              />
            </Col>
            <Col>
              <Section
                favorites={favorites}
                options={options}
                sectionHeader="User Data Queries"
                section='User Data Queries'
                sectionIcon='users'
                value="UQ"
                onClick={onClick}
                setFavorite={setFavorite}
              />
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FlyoutMenu;
