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
import { setModuleLinks } from "./actions/moduleLinksActions";
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

    this.setFavorite = fav => {
      if (!this.state.favorites.includes(fav)) {
        this.setState({
          options: [],
          favorites: [...this.state.favorites, fav],
          selected: [...this.state.selected, fav],
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
      this.setState({
        isOpen: !this.state.isOpen,
        searchLinksIsOpen: !this.state.searchLinksIsOpen
      });
    };

    this.removeFavorite = fav => {
      let favArray = [];
      this.state.favorites.map(item => {
        if (item.value === fav.value) {
          favArray = this.state.favorites.filter(el => el !== item);
          this.setState({ favorites: favArray });
          this.props.saveFavoriteLinks(favArray);
        }
      });
    };
  }

  componentDidMount() {
    this.setState({
      options: this.props.options,
      favorites: this.props.favorites,
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
                placement="bottom"
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
                    <button style={buttonColStyle} onClick={e => this.removeFavorite(data)}>
                <i
                  className="fas fa-star"
                  style={goldStar}
                ></i>
                </button>
              ) : (
                <button  style={buttonColStyle} onClick={ e => this.setFavorite(data)}>
                <i
                  class="far fa-star"
                  style={star}
                ></i>
                </button>
              )}
            </span>
            <UncontrolledTooltip
              placement="right"
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
              placement="left"
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
            <Col sm="9" style={CardStyle} id="mySidebar" className="sidebar">
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
            <Col sm="2" style={{ marginRight: "10px" }}>
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
                  onClick={e => this.openNav() }
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
    options: state.moduleAreas.areas,
    favorites: state.favoriteLinks
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getFavoriteLinks, saveFavoriteLinks, setModuleLinks},
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
