import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "./home";
import {
  star,
  goldStar,
  goldStar2,
  link,
  CardStyle,
  Style,
  rowStyle,
  linkColStyle,
  buttonColStyle,
  favoriteLinkStyle,
  selectStyle,
  favoriteListStyle
} from "../../css/sidebar-css";
import { getFavoriteLinks, saveFavoriteLinks } from "./favoriteLinksActions";
import { setModuleLinks } from "./moduleLinksActions";
import {
  Card,
  Row,
  Col,
  UncontrolledTooltip,
  Container,
  Navbar,
  NavbarToggler
} from "reactstrap";

import Select, { components } from "react-select";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      favorites: [],
      options: [],
      collapsed: false,
      isOpen: true,
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

    // this.displayLinks = () => {
    //   const { options } = this.state;

    //   options.map(item => {
    //     return <p> item.label</p>;
    //   });
    // };

    // this.displaySelected = () => {
    //   const { selected } = this.state;

    //   selected.map(item => {
    //     return <li key={item.label}> {item.label} </li>;
    //   });
    // };

    this.setFavorite = fav => {
      console.log(fav);
      if (!this.state.favorites.includes(fav)) {
        // this.props.saveFavoriteLinks([...this.state.selected, fav]);

        this.setState({
          options: [],
          favorites: [...this.state.favorites, fav],
          isOpen: false,
          searchLinksIsOpen: true
        });
      }
    };

    this.toggleNavbar = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    this.handleRender = data => {
      this.setState({
        isOpen: !this.state.isOpen,
        collapsed: !this.state.collapsed
      });
      this.props.handleLink(data);
    };

    this.toggle = () => {
      console.log("hello");
      this.setState({
        isOpen: !this.state.isOpen,
        searchLinksIsOpen: !this.state.searchLinksIsOpen
      });
    };

    this.removeFavorite = fav => {
      let favArray = [];
      console.log("I have been clicked");
      console.log(fav);
      this.state.favorites.map(item => {
        console.log(item.value, fav.value);
        if (item.value === fav.value) {
          console.log("match found");
          favArray = this.state.favorites.filter(el => el !== item);
          this.setState({ favorites: favArray });
          this.props.saveFavoriteLinks(favArray);
        }
      });
    };
  }

  componentDidMount() {
    this.setState({
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

  openNav() {
    if (this.state.isOpen) {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("fullSideBar").style.width = "";
      document.getElementById("cardBody").style.padding = "0";
      document.getElementById("cardBody").style.paddingRight = "10px";
      document.getElementById("cardBody").style.paddingTop = "10px";
      document.getElementById("cardBody").style.width = "70px";
      // document.getElementById("mainPageArea").style.margin="0"
      document.getElementById("navToggler").style.marginLeft = "10px";
    } else {
      document.getElementById("mySidebar").style.display = "";
      document.getElementById("fullSideBar").style.width = "";
      document.getElementById("cardBody").style.width = "100%";
      document.getElementById("cardBody").style.padding = "15px";
      document.getElementById("cardBody").style.paddingRight = "0";
      // document.getElementById("mainPageArea").style.margin="0 auto";
      // document.getElementById("navToggler").style.marginLeft = "10px";
    }
    this.setState({
      isOpen: !this.state.isOpen,
      collapsed: false
    });
  }

  render() {
    const Option = props => {
      const { data } = props;
      let isFavorite = false;
      return (
        <Row key={data} style={rowStyle}>
          <Col sm="10" style={{ padding: "0px" }}>
            <div className="mylink" style={link}>
              <span
                id={`jumpto-${data.value}`}
                onClick={e => this.handleRender(data)}
              >
                {data.label}
              </span>
              <UncontrolledTooltip
                placement="top"
                target={`jumpto-${data.value}`}
              >
                Jump to {data.label}
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col sm="2">
            <span id={`markas-${data.value}`}>
              {this.state.favorites.map(item => {
                if (item.id === data.id) {
                  isFavorite = true;
                }
              })}

              {isFavorite ? (
                <i
                  className="fas fa-star"
                  style={goldStar}
                  onClick={e => this.removeFavorite(data)}
                ></i>
              ) : (
                <i
                  class="far fa-star"
                  style={star}
                  onClick={e => this.setFavorite(data)}
                ></i>
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
    
    const Option1 = props => {
      const { data } = props;
      let isFavorite = false;
      return (
        <Row key={data} style={rowStyle}>
          <Col sm="10" style={{ padding: "0px" }}>
            <div className="mylink" style={link}>
              <span
                id={`jumpto-${data.value}`}
                onClick={e => this.handleRender(data)}
              >
                {data.label}
              </span>
              <UncontrolledTooltip
                placement="top"
                target={`jumpto-${data.value}`}
              >
                Jump to {data.label}
              </UncontrolledTooltip>
            </div>
          </Col>
          <Col sm="2">
            <span
              id={`markas-${data.value}`}
              onClick={e => console.log(data.id)}
            >
              {console.log(this.state.favorites)}
              {console.log(this.props.options)}
              {this.state.favorites.map(item => {
                console.log(item.id, data.id);
                if (item.id === data.id) {
                  isFavorite = true;
                }
              })}
              <span onClick={e => this.setFavorite(data)}>
                <i class="far fa-star" style={star}></i>
              </span>
              {/* {isFavorite ? (
                <span   onClick={ e => this.removeFavorite(data)}>
                <i
                  className="fas fa-star"
                  style={goldStar}
                
                ></i>
                </span>
              ) : (
                <span  onClick={ e => this.setFavorite(data)}>
                <i
                  class="far fa-star"
                  style={star}
                 
                ></i>
                </span>
              )} */}
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

    const { selected, options, favorites } = this.state;

    let displayFavorites = favorites.sort().map(item => {
      return (
        <Row key={item.label} className="selected">
          <Col sm="10" style={linkColStyle}>
            <span
              id={`jumpto-${item.value}`}
              onClick={e => this.handleRender(item)}
            >
              {item.label}
            </span>
            <UncontrolledTooltip
              placement="top"
              target={`jumpto-${item.value}`}
            >
              Jump to {item.label}
            </UncontrolledTooltip>
          </Col>
          <Col sm="2">
            <span id={`remove-${item.value}`}>
              <button style={buttonColStyle}>
                <i
                  className="fas fa-star"
                  style={goldStar2}
                  onClick={e => this.removeFavorite(item)}
                ></i>
              </button>
            </span>
            <UncontrolledTooltip
              placement="top"
              target={`remove-${item.value}`}
            >
              Remove {item.label}
            </UncontrolledTooltip>
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
      <div id="fullSideBar" style={Style}>
        <Card
          body
          id="cardBody"
          style={{ height: "100%", paddingTop: "15px", paddingRight: "0" }}
        >
          <Row>
            <Col sm="8" style={CardStyle} id="mySidebar" className="sidebar">
              {/* <Collapse isOpen={!this.state.collapsed} > */}
              <Select
                singleValue
                isSearchable
                placeholder="Search Links"
                options={this.props.options}
                onChange={this.onChange}
                value={this.state.currentSelected}
                style={selectStyle}
                components={{ Option }}
              />
              <hr />
              <p style={favoriteLinkStyle}> Favorite Links</p>
              {this.props.options ? (
                <Container style={favoriteListStyle}>
                  {displayFavorites.sort()}
                </Container>
              ) : (
                <p> None</p>
              )}
            </Col>
            <Col xs="2" style={{ marginRight: "10px" }}>
              <Navbar
                color="faded"
                light
                style={{
                  paddingTop: "0",
                  marginRight: "25px",
                  paddingLeft: "0"
                }}
              >
                <NavbarToggler
                  id="navToggler"
                  style={{ color: "black", fontSize: "1rem" }}
                  onClick={e => this.openNav() /*this.toggleNavbar */}
                  className="mr-2"
                />
              </Navbar>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.moduleAreas.areas
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getFavoriteLinks, saveFavoriteLinks, setModuleLinks },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
