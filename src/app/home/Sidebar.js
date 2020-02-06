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
  favoriteListStyle,
  sidebarToggle
} from "../../css/sidebar-css";
import {
  getFavoriteLinks,
  saveFavoriteLinks
} from "../../base/config/actions/favoriteLinksActions";

import {
  Card,
  Collapse,
  Row,
  Col,
  UncontrolledTooltip,
  Container,
  Navbar,
  NavbarToggler
} from "reactstrap";
import "./sidebar.css";
import Select, { components } from "react-select";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      favorites: [],
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

    this.toggleNavbar = () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    };

    this.handleRender = link => {
      console.log(link);
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

  openNav() {
    
    if (this.state.isOpen) {
    document.getElementById("cardBody").style.display = "none";
    } else {    
      document.getElementById("cardBody").style.display = "flex";
    }
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }



  static getDerivedStateFromProps(nextProps, state) {
    console.log(nextProps);
  }
  render() {
    const { handleLink } = this.props;

    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */


    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
      document.getElementById("mySidebar").style.width = "0 !important";
      
      document.getElementById("main").style.display = "none !important";
      document.getElementById("mySidebar").style.display = "none !important";
    }

    const toggle = () => {
      tooltipOpen = !tooltipOpen;
    };

    const Option = props => {
      const { data } = props;
      let isFavorite = false;
      return (
        <Row key={data} style={rowStyle}>
          <Col sm="10" style={{ padding: "0px" }}>
            <div className="mylink" style={link}>
              <span
                id={`jumpto-${data.value}`}
                onClick={e => this.props.handleLink(data.link)}
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
              {this.state.selected.map(item => {
                if (item.value === data.value) {
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

    const { selected, options } = this.state;
    let displayFavorites = this.state.selected.sort().map(item => {
      return (
        <Row key={item.label} className="selected">
          <Col sm="10" style={linkColStyle}>
            <span id={`jumpto-${item.value}`}>{item.label}</span>
            <UncontrolledTooltip
              placement="top"
              target={`jumpto-${item.value}`}
            >
              Jump to {item.label}
            </UncontrolledTooltip>
          </Col>
          <Col xs="2">
            <span id={`remove-${item.value}`}>
              <button
                style={buttonColStyle}
                onClick={e => this.removeFavorite(item)}
              >
                <i
                  className="fas fa-star"
                  style={goldStar2}
                  onClick={e => this.removeFavorite(data)}
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
      <div style={Style}>
        <Col style={{minHeight: "75px"}} >
          <Navbar color="faded" light>
            <NavbarToggler
            style={{marginLeft: "-15px", color: "black"}}
              onClick={e => this.openNav() /*this.toggleNavbar */}
              className="mr-2"
            />
          </Navbar>
        </Col>
        <Col style={CardStyle} id="mySidebar" className="sidebar">
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Card body id="cardBody">
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
              {this.state.selected ? (
                <Container style={favoriteListStyle}>
                  {displayFavorites.sort()}
                </Container>
              ) : (
                <p> None</p>
              )}
            </Card>
          </Collapse>
        </Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.moduleLinks,
    modules: state.moduleLinks,
    favorites: state.data.sidebar.favorites
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFavoriteLinks, saveFavoriteLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
