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
import {
  getFavoriteLinks,
  saveFavoriteLinks
} from "./actions/favoriteLinksActions";
import {
  setModuleLinks
} from "./actions/moduleLinksActions";
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

    this.handleRender = link => {
      this.setState({
        isOpen: !this.state.isOpen,
      })
      this.openNav()
      this.props.handleLink(link)
    };

    this.toggle = () => {
      console.log("hello")
      this.setState({
        isOpen: !this.state.isOpen,
        searchLinksIsOpen: !this.state.searchLinksIsOpen,
      });
    };

    this.removeFavorite = fav => {

      let favArray = [];

      this.state.selected &&
        this.state.selected.map(item => {
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
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("fullSideBar").style.width = "";
    document.getElementById("cardBody").style.padding="0";
    document.getElementById("cardBody").style.paddingTop="10px";
    document.getElementById("cardBody").style.width="70px"
    document.getElementById("mainPageArea").style.margin="0"
    document.getElementById("navToggler").style.marginLeft="-15px"

    } else {    
      document.getElementById("mySidebar").style.display = "";
      document.getElementById("fullSideBar").style.width = "";
      document.getElementById("cardBody").style.width="100%"
      document.getElementById("cardBody").style.padding="15px";
      document.getElementById("cardBody").style.paddingRight="0";
      document.getElementById("mainPageArea").style.margin="0 auto";
      document.getElementById("navToggler").style.marginLeft="10px"
    }
    this.setState({
      isOpen: !this.state.isOpen,
      collapsed: false
    })
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
                onClick={e => this.handleRender(data.link)}
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
      <div id="fullSideBar" style={Style}>
        
        <Card body id="cardBody" style={{height: "100%", paddingTop: "15px", paddingRight: "0"}}>
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
              {this.state.selected ? (
                <Container style={favoriteListStyle}>
                  {displayFavorites.sort()}
                </Container>
              ) : (
                <p> None</p>
              )}
        </Col>
        <Col sm="2">
        <Navbar color="faded" light style={{paddingTop: "0", marginRight: "10px"}}>
            <NavbarToggler id="navToggler"
            style={{color: "black", fontSize: "1rem"}}
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
    options: state.moduleLinks,
    modules: state.moduleLinks,
    favorites: state.data.sidebar.favorites,
    links: state.links

  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFavoriteLinks, saveFavoriteLinks, setModuleLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
