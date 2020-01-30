import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getFavoriteLinks,
  saveFavoriteLinks
} from "../../base/config/actions/favoriteLinksActions";


import {
  Card,
  Button,
  CardTitle,
  CardText,
  Collapse,
  CardBody,
  Row,
  Col,
  UncontrolledTooltip,
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
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Star from "./fontAwesome";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

      selected.map(item => {
        return <li key={item.label}> {item.label} </li>;
      });
    };

    this.setFavorite = fav => {
      if (!this.state.selected.includes(fav)) {
        this.props.saveFavoriteLinks([...this.state.selected, fav]);

        this.setState({
          selected: [...this.state.selected, fav],
          isOpen: false,
          searchLinksIsOpen: true
        });
      }
    };

    this.handleRender = link => {
      let newLinkToRender;
    };

    this.toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen,
        searchLinksIsOpen: !this.state.searchLinksIsOpen
      });
    };

    this.removeFavorite = fav => {
      console.log("Trying to remove favorite");

      let favArray = [];

      this.state.selected &&
        this.state.selected.map(item => {
          console.log(item, fav);
          console.log(item.value === fav.value, item.label === fav.label);
          if (item.value === fav.value) {
            favArray = this.state.selected.filter(el => el !== item);
            this.setState({ selected: favArray });
            this.props.saveFavoriteLinks(favArray);
          }
        });
    };
  }
  componentDidMount() {
    this.setState({
      selected: this.props.favorites,
      options: this.props.options
    });
  }
  _renderOption(option) {
    return (
      <div>
        {option.label} <small>small</small>
      </div>
    );
  }
  render() {
    const { handleLink } = this.props;
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

    const toggle = () => {
      tooltipOpen = !tooltipOpen;
    };

    const Option = props => {
      const { data } = props;
      let isFavorite = false;
      return (
        <Row key={data} style={{ marginTop: "10px" , zIndex: '200'}}>
          <Col  style={{ padding: "0px" }}>
            <div
              className="mylink"
              style={{
                textDecoration: "none",
                // width: "90%",
                marginLeft: "25px"
              }}
            >
              <span id={`jumpto-${data.value}`}>
                <Link to={`/${data.link}`}> {data.label} </Link>
              </span>

              <UncontrolledTooltip
                placement="top"
                target={`jumpto-${data.value}`}
              >
                Jump to {data.label}
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col sm="2" style={{}}>
            <span id={`markas-${data.value}`}>
              {this.state.selected.map(item => {
                if (item.value === data.value) {
                  isFavorite = true;
                }
              })}

              {isFavorite ? (
                <FontAwesomeIcon
                  icon={Star}
                  style={{ color: "gold", marginLeft: '40px' }}
                  onClick={e => this.removeFavorite(data)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faStar}
                  style={{  marginLeft: '40px' }}
                  onClick={e => this.setFavorite(data)}
                />
              )}
            </span>
            <UncontrolledTooltip
              placement="bottom"
              target={`markas-${data.value}`}
            >
              {isFavorite ? (
                <span> Remove {data.label} from favorites </span>
              ) : (
                <span> Add {data.label} to favorites </span>
              )}
            </UncontrolledTooltip>
          </Col>
        </Row>
      );
    };

    const { selected, options } = this.state;
    let displayFavorites = this.state.selected.sort().map(item => {
      return (
        <Row key={item.label} className="selected">
          <Col sm="10" style={{ padding: "0px" }}>
            <Link to={`/${item.link}`}> {item.label} </Link>
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
    });

    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const keyA = a.key.toUpperCase();
      const keyB = b.key.toUpperCase();

      let comparison = 0;
      if (keyA > keyB) {
        comparison = 1;
      } else if (keyA < keyB) {
        comparison = -1;
      }
      return comparison;
    }

    displayFavorites = displayFavorites.sort(compare);

    return (
      <div style={Style}>
        <Col style={CardStyle}>
          <Card style={CardStyle} body>
            <Collapse isOpen={this.state.searchLinksIsOpen}>
              <Select
                singleValue
                isSearchable
                placeholder="Search Links"
                options={this.state.options}
                onChange={this.onChange}
                value={this.state.currentSelected}
                style={{ marginTop: "150px" }}
                components={{ Option }}
              />
            </Collapse>
            <hr />
            <p style={{ fontWeight: "bold" }}> Favorite Links</p>

            {this.state.selected ? (
              <Container style={{ textAlign: "left" }}>
                {displayFavorites.sort()}
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
