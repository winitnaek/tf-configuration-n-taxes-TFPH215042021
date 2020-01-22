import React, { Component } from "react";

import {
  Card,
  Button,
  CardTitle,
  CardText,
  Collapse,
  CardBody,
  Row,
  Col,
  Container
} from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./sidebar.css";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTrash, faBars } from "@fortawesome/free-solid-svg-icons";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      favorites: [],
      isOpen: false,
      searchLinksIsOpen: true,
      options: [
        { value: "addressOverrides", label: "Address Overrides" },
        { value: "auditLogViewer", label: "Audit Log Viewer" },
        { value: "companies", label: "Companies" },
        { value: "batchTest", label: "Batch Test" },
        { value: "connectToDataSets", label: "Connect To Data Sets" },
        { value: "customBackupRestore", label: "Custom Backup/Restore" },
        { value: "customFormulas", label: "Custom Formulas" },
        {
          value: "customGarnishmentFormulas",
          label: "Custom Garnishment Formulas"
        },
        { value: "customGarnishments", label: "Custom Garnishments" },
        { value: "customNexusData", label: "Custom Nexus Data" },
        {
          value: "customPaymentExceptions",
          label: "Custom Payment Exceptions"
        },
        { value: "customPayments", label: "Custom Payments" },
        { value: "customTaxCodes", label: "Custom Tax Codes" },
        {
          value: "customTaxPaymentOverrides",
          label: "Custom Tax Payment Overrides"
        },
        { value: "cyclicBulletin", label: "Cyclic Bulletin" },
        { value: "dataSets", label: "Data Sets" },
        { value: "databaseLoad", label: "Database Load" },
        { value: "disposableOverrides", label: "Disposable Overrides" },
        { value: "employeeGroups", label: "Employee Groups" },
        {
          value: "garnishmentFormulaOverrides",
          label: "Garnishment Formula Overrides"
        },
        { value: "garnishmentGroups", label: "Garnishment Groups", link: "" },
        { value: "groupOverrides", label: "Group Overrides", link: "" },
        { value: "locatorBulletins", label: "Locator Bulletins", link: "" },
        {
          value: "loginsAndPermissions",
          label: "Logins and Permissions",
          link: ""
        },
        { value: "mapPaymentCodes", label: "Map Payment Codes", link: "" },
        { value: "mapTaxCodes", label: "Map Tax Codes", link: "" },
        { value: "mapTaxTypes", label: "Map Tax Types", link: "" },
        { value: "mappingTools", label: "Mapping Tools", link: "" },
        {
          value: "maritalStatusReport",
          label: "Marital Status Report",
          link: ""
        },
        { value: "messageViewer", label: "Message Viewer", link: "" },
        {
          value: "optionalRateOverrides",
          label: "Optional Rate Overrides",
          link: ""
        },
        {
          value: "paServicesTaxReport",
          label: "PA Services Tax Report",
          link: ""
        },
        { value: "paymentOverrides", label: "Payment Overrides", link: "" },
        { value: "pensionWhatIftest", label: "Pension What-if Test", link: "" },
        {
          value: "reciprocalOverrides",
          label: "Reciprocal Overrides",
          link: ""
        },
        {
          value: "regulatroyBulletins",
          label: "Regulatory Bulletins",
          link: ""
        },
        { value: "reportingTools", label: "Reporting Tools", link: "" },
        { value: "systemTools", label: "System Tools", link: "" },
        {
          value: "taxEffectiveDateOverrides",
          label: "Tax Effective Date Overrides",
          link: ""
        },
        { value: "taxHistory", label: "Tax History", link: "" },
        { value: "taxabilityReport", label: "Taxability Report", link: "" },
        { value: "taxLocator", label: "TaxLocator", link: "" },
        {
          value: "usPensionQuickFormulas",
          label: "U.S. Pension QuickFormulas",
          link: ""
        },
        { value: "usQuickFormulas", label: "U.S. QuickFormulas", link: "" },
        {
          value: "usWageAttachmentQuickFormulas",
          label: "U.S. WageAttachment QuickF..",
          link: ""
        },
        {
          value: "unemployementOverrides",
          label: "Unemployment Overrides",
          link: ""
        },
        { value: "userDataQueries", label: "User Data Queries", link: "" },
        { value: "whatIfTest", label: "What-if Test", link: "" },
        { value: "worksites", label: "Worksites", link: "" },
        {
          value: "defineFavoriteLinks",
          label: "Define Favorite Links",
          link: ""
        }
      ]
    };
    this.onChange = selectedOptions => {
      console.log(`State is being updated`);

      const isAlreadySlected = this.state.selected.includes(selectedOptions);

      if (!isAlreadySlected) {
        this.setState({
          currentSelected: selectedOptions,
          selected: [...this.state.selected, selectedOptions]
        });
        const savedLinks = this.state.selected;
        localStorage.setItem("favoriteLinks", JSON.stringify(savedLinks));
      }
    };

    this.displayLinks = () => {
      const { options } = this.state;

      options.map(item => {
        return <p> item.label</p>;
      });
    };

    this.displaySelected = () => {
      const { selected } = this.state;

      //  const selectedArray = Object.values(selected)

      selected.map(item => {
        console.log(item);
        return <li key={item.label}> {item.label} </li>;
      });
    };

    this.setFavorite = fav => {
      console.log(fav);
      const isAlreadySlected = this.state.selected.includes(fav);
      console.log(isAlreadySlected);

      if (!isAlreadySlected) {
        this.setState({
          selected: [...this.state.selected, fav],
          isOpen: false,
          searchLinksIsOpen: true
        });
      } else {
        console.log(`${fav.label} has already been added to selected values`);
        this.setState({
          isOpen: false
        });
      }
    };

    this.toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen,
        searchLinksIsOpen: !this.state.searchLinksIsOpen
      });
    };

    this.removeFavorite = fav => {
      const favArray = this.state.selected.filter(item => item !== fav);
      this.setState({
        selected: favArray
      });
    };
  }

  render() {
    const Style = {
      height: "100%",
      width: "18%",
      position: "fixed",
      zIndex: 1,
      top: 84,
      left: 0,
      backgroundColor: "#dbdad7",
      overflowX: "hidden",
      paddingTop: "20px",
      height: "100%"
    };

    const CardStyle = {
      height: "auto",
      minHeight: "100%"
    };

    const { selected } = this.state;

    const routes = selected.map(item => {
      return {
        path: `/${item}`,
        exact: true,
        sidebar: () => <div>{item} </div>,
        main: () => <h2>{item} </h2>
      };
    });

    console.log(this.state.favorites);
    return (
      <div style={Style}>
        <Col style={CardStyle}>
          <Card style={CardStyle} body>
            <Button
              color="primary"
              onClick={this.toggle}
              style={{ marginBottom: "1rem" }}
            >
              <FontAwesomeIcon
                style={{ marginRight: "10px", marginLeft: 0 }}
                icon={faBars}
              />
              Link Resources
            </Button>
            <Collapse isOpen={this.state.isOpen}>
              <Card key={"options"}>
                <CardBody
                  style={{
                    textAlign: "left",
                    fontSize: "12px",
                    paddingRight: 0
                  }}
                >
                  <Container>
                    <Row>
                      <Col
                        sm="6"
                        style={{ padding: "0px", fontWeight: "bold" }}
                      >
                        Jump to:
                      </Col>
                      <Col
                        xs="6"
                        style={{
                          padding: "1",
                          textAlign: "center",
                          fontWeight: "bold"
                        }}
                      >
                        Mark Favorite:
                      </Col>
                    </Row>
                    <hr />
                    {this.state.options.map(item => {
                      return (
                        <Row key={item} style={{ marginTop: "10px" }}>
                          <Col sm="10" style={{ padding: "0px" }}>
                            <a
                              href={`/${item.link}`}
                              className="mylink"
                              style={{ textDecoration: "none" }}
                            >
                              {item.label}{" "}
                            </a>
                          </Col>
                          <Col xs="2">
                            { this.state.selected.includes(item) ? (
                            <FontAwesomeIcon
                              icon={faStar}
                              style={{color: "gold"}}
                            />
                            ) :
                            <FontAwesomeIcon
                            icon={faStar}
                            onClick={e => this.setFavorite(item)}
                          />
                             }
                          </Col>
                        </Row>
                      );
                    })}
                  </Container>
                </CardBody>
                <Button
                  color="primary"
                  onClick={this.toggle}
                  style={{ marginBottom: "1rem" }}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "10px", marginLeft: 0 }}
                    icon={faBars}
                  />
                  Close Link Resources
                </Button>
              </Card>
            </Collapse>

            <Collapse isOpen={this.state.searchLinksIsOpen}>
              <Select
                style={""}
                singleValue
                isSearchable
                placeholder="Search Links"
                options={this.state.options}
                onChange={this.onChange}
                value={this.state.currentSelected}
                style={{ marginTop: "150px" }}
              />
            </Collapse>
            <hr />
            <p style={{ fontWeight: "bold" }}> Current Selected Links</p>

            {this.state.selected ? (
              <Container style={{ textAlign: "left" }}>
                {this.state.selected.map(item => {
                  return (
                    <Row key={item.label} className="selected">
                      <Col sm="10" style={{ padding: "0px" }}>
                        <a href={`/${item.value}`}> {item.label}</a>
                      </Col>
                      <Col xs="2">
                        <button
                          style={{ border: "none", backgroundColor: "white" }}
                          onClick={e => this.removeFavorite(item)}
                        >
                          x
                        </button>
                      </Col>
                    </Row>
                  );
                })}
              </Container>
            ) : (
              <p> None</p>
            )}
          </Card>
        </Col>
      </div>
    );
  }
}

export default Sidebar;
