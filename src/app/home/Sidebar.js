import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getFavoriteLinks,
  saveFavoriteLinks
} from "../../base/config/actions/favoriteLinksActions";
import Landing from "./Landing";
import Modal from "./Modal";

import {
  Card,
  Button,
  CardTitle,
  CardText,
  Collapse,
  CardBody,
  Row,
  Col,
  Container,
  UncontrolledTooltip,
  Tooltip,
  OverlayTrigger
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
      tooltipOpen: false,
      selected: [],
      favorites: [],
      isOpen: false,
      searchLinksIsOpen: true,
      sidebar: {
        options: [],
        favorites: []
      }
    };
    this.onChange = selectedOptions => {
      const isAlreadySlected = this.state.selected.includes(selectedOptions);
      console.log("search is making a change");

      // Need to render page

      // if (!isAlreadySlected) {
      //   this.setState({
      //     currentSelected: selectedOptions,
      //     selected: [...this.state.selected, selectedOptions]
      //   });
      //   const savedLinks = this.state.selected;
      //   localStorage.setItem("favoriteLinks", JSON.stringify(savedLinks));
      // }
    };

    this.displayLinks = () => {
      const { options } = this.state;

      options.map(item => {
        return <p> item.label</p>;
      });
    };

    this.displaySelected = () => {
      const { selected } = this.state;

      selected.map(item => {
        return <li key={item.label}> {item.label} </li>;
      });
    };

    this.setFavorite = fav => {
      this.props.saveFavoriteLinks([...this.state.selected, fav]);
      this.setState({
        selected: [...this.state.selected, fav],
        isOpen: false,
        searchLinksIsOpen: true
      });
    };

    this.handleRender = link => {
      let newLinkToRender;

      switch (link) {
        case "Landing":
          newLinkToRender = <Landing />;
          break;
        case "Modal":
          newLinkToRender = <Modal />;
      }

      const landing = <h1> Test </h1>;

      ReactDOM.createPortal(
        <Landing />,
        document.querySelector("#" + "pageContainer")
      );
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
      this.props.saveFavoriteLinks(favArray);
    };
  }
  componentDidMount() {
    this.setState({
      selected: this.props.favorites,
      options: this.props.options
    });
  }
  toggle() {
    this.setState({
      tooltipOpen: true
    });
  }

  render() {
    const Style = {
      height: "100%",
      width: "18%",
      position: "fixed",
      zIndex: 1,
      top: 60,
      left: 0,
      backgroundColor: "#dbdad7",
      overflowX: "hidden",
      paddingTop: "20px"
    };

    const CardStyle = {
      height: "auto",
      minHeight: "100%"
    };

    const { selected, options } = this.state;
    // const { options, favorites } = this.props;
    console.log(this.props);

    const toggle = () => {
      tooltipOpen = !tooltipOpen;
    };

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
              View All Links
            </Button>
            <Collapse isOpen={this.state.isOpen}>
              <Card key={"options"}>
                <CardBody
                  style={{
                    textAlign: "left",
                    fontSize: "12px",
                    paddingRight: 0,
                    minHeight: "100%"
                  }}
                >
                  <Container>
                    <Select
                      style={""}
                      singleValue
                      isSearchable
                      placeholder="Search Links"
                      options={this.state.options}
                      onChange={this.onChange}
                      value={this.state.currentSelected}
                      style={{ marginTop: "150px" }}
                      openMenuOnClick={false}
                      components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null
                      }}
                    />
                    <hr />
                    {this.props.options &&
                      this.props.options.map(item => {
                        return (
                          <Row key={item} style={{ marginTop: "10px" }}>
                            <Col sm="10" style={{ padding: "0px" }}>
                              <div>
                                <p>
                                  <span href="#" id={`jumpto-${item.value}`}>
                                    <span
                                      onClick={e =>
                                        this.handleRender(item.link)
                                      }
                                      className="mylink"
                                      style={{ textDecoration: "none" }}
                                    >
                                      {item.label}
                                    </span>
                                  </span>
                                </p>
                                <UncontrolledTooltip
                                  placement="top"
                                  target={`jumpto-${item.value}`}
                                >
                                  Jump to {item.label}
                                </UncontrolledTooltip>
                              </div>
                            </Col>
                            <Col xs="2">
                              {/* {this.props.favorites.includes(item) ? (
                                <div>
                                  <p id="ToolTipExample">
                                    <img
                                      key={item.value}
                                      id="ToolTipExample"
                                      style={{ height: "15px" }}
                                      src="https://img.icons8.com/offices/30/000000/filled-star.png"
                                    ></img>
                                  </p>
                                  <Tooltip
                                    placement="right"
                                    isOpen={true}
                                    target="ToolTipExample"
                                    toggel={toggle}
                                  >
                                    {" "}
                                    Test{" "}
                                  </Tooltip>
                                </div>
                              ) : (
                                // <FontAwesomeIcon
                                //   icon={faStar}
                                //   style={{ color: "gold" }}
                                // />
                                <div>
                                  <p id="ToolTipExample">
                                    <img
                                      key={item.value}
                                      style={{ height: "15px" }}
                                      id="ToolTipExample"
                                      src="https://img.icons8.com/ios/50/000000/star.png"
                                      onClick={e => this.setFavorite(item)}
                                    ></img>
                                  </p>
                                  <Tooltip
                                    placement="right"
                                    isOpen={true}
                                    target="ToolTipExample"
                                    toggel={toggle}
                                  >
                                    {" "}
                                    Test{" "}
                                  </Tooltip>
                                </div>
                                // <FontAwesomeIcon

                                //   icon={['far', 'faStar']}

                                //   onClick={e => this.setFavorite(item)}
                                // />
                              )} */}
                              <div>
                                <p>
                                  <span href="#" id={item.value}>
                                    <img
                                      key={`toolTip-${item.value}`}
                                      style={{ height: "15px" }}
                                      src="https://img.icons8.com/ios/50/000000/star.png"
                                      onClick={e => this.setFavorite(item)}
                                    />
                                  </span>
                                </p>
                                <UncontrolledTooltip
                                  placement="bottom"
                                  target={item.value}
                                >
                                  Save {item.label} to Favorites
                                </UncontrolledTooltip>
                              </div>
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
                  Close View All Links
                </Button>
              </Card>
            </Collapse>

            <Collapse isOpen={this.state.searchLinksIsOpen}></Collapse>
            <hr />
            <p style={{ fontWeight: "bold" }}> Favorite Links</p>

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

function mapStateToProps(state) {
  return {
    options: state.data.sidebar.options,
    favorites: state.data.sidebar.favorites
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFavoriteLinks, saveFavoriteLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
