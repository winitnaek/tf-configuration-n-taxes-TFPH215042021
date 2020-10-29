import React, { Component } from "react";
import Section from "./Section";
import Sidebar from "../home/Sidebar";
import { Row, Col } from "reactstrap";

class FlyoutMenu extends Component {
  render() {
    const { showSideMenu, options, favorites = [], setFavorite, onClick } = this.props;
    const userDataQueries = options.filter(option=>option.value === "UQ");
    const userQueriesOne = userDataQueries.slice(0, Math.round(userDataQueries.length / 2));
    const userQueriesTwo = userDataQueries.slice(Math.round(userDataQueries.length / 2) + 1);
    return (
      <Row>
        {showSideMenu ? (
          <Col xs="3" className="border-right border-dark">
            <Sidebar handleLink={this.handleLink} favorites={favorites} setFavorite={setFavorite} onClick={onClick} />
          </Col>
        ) : null}
        <Col>
          <Row>
            <Col style={{maxWidth:'33.3%'}}>
              <Section
                favorites={favorites}
                options={options}
                section="Tax Details"
                sectionHeader="Tax Details"
                sectionIcon="book"
                value="UQ"
                onClick={onClick}
                setFavorite={setFavorite}
              />
              <Section
                favorites={favorites}
                options={options}
                section="formulas"
                sectionHeader="Quick Formulas"
                sectionIcon="flask"
                value="UQ"
                onClick={onClick}
                setFavorite={setFavorite}
              />
            </Col>
            <Col style={{maxWidth:'33.3%'}}>
              <Section
                favorites={favorites}
                options={userQueriesOne}
                sectionHeader="User Data Queries"
                section="User Data Queries"
                sectionIcon="users"
                value="UQ"
                onClick={onClick}
                setFavorite={setFavorite}
                c={1}
              />
            </Col>
            <Col style={{maxWidth:'33.3%'}}>
              <Section
                favorites={favorites}
                options={userQueriesTwo}
                section="User Data Queries"
                sectionIcon="users"
                value="UQ"
                onClick={onClick}
                setFavorite={setFavorite}
                c={2}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default FlyoutMenu;
