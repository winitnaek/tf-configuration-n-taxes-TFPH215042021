import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  star,
  goldStar,
  link,
  rowStyle,
  linkColStyle,
  buttonColStyle,
  favoriteLinkStyle,
  favoriteListStyle,
} from "../../css/sidebar-css";
import { getFavoriteLinks, saveFavoriteLinks } from "./favoriteLinksActions";
import { setModuleLinks } from "./actions/moduleLinksActions";
import {  Row, Col, UncontrolledTooltip, Container, Navbar, NavbarToggler } from "reactstrap";
import Select, { components } from "react-select";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thlink: [],
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

    this.handleRender = data => {
      renderTFApplication("pageContainer", data);
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
      thlink: this.props.thlink
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
    const Option = props => {
      const { data } = props;
      let isFavorite = false;
      return (
        <Row key={data} style={rowStyle}>
          <Col sm="10" style={{ padding: "0px" }}>
            <div className="mylink" style={link}>
              <span id={`jumpto-${data.value}`} onClick={e => this.handleRender(data)}>
                {data.label}
              </span>
              <UncontrolledTooltip placement="bottom" target={`jumpto-${data.value}`}>
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
                  <i className="fas fa-star" style={goldStar}></i>
                </button>
              ) : (
                <button style={buttonColStyle} onClick={e => this.setFavorite(data)}>
                  <i class="far fa-star" style={star}></i>
                </button>
              )}
            </span>
            <UncontrolledTooltip placement="right" target={`markas-${data.value}`}>
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

    const { selected, options, favorites, thlink } = this.state;

    let displayFavorites = favorites.sort().map(item => {
      return (
        <Row key={item.label} className="selected">
          <Col style={linkColStyle}>
            <span id={`jumpto-${item.value}`} onClick={e => this.handleRender(item)}>
              {item.label}
            </span>
            <UncontrolledTooltip placement="top" target={`jumpto-${item.value}`}>
              Jump to {item.label}
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
    console.log("thlink");
    console.log(thlink);
    console.log(this.props.thlink);
    let displayThLink = null;
    console.log("isMock()");
    console.log(isMock());
    if (isMock()) {
      displayThLink = this.props.thlink.map(item => {
        return (
          <Row key={item.label} className="selected">
            <Col sm="10" style={linkColStyle}>
              <span id={`jumpto-${item.value}`} onClick={e => this.handleRender(item)}>
                {item.label}
              </span>
              <UncontrolledTooltip placement="top" target={`jumpto-${item.value}`}>
                Jump to {item.label}
              </UncontrolledTooltip>
            </Col>
          </Row>
        );
      });
    }

    displayFavorites = displayFavorites.sort(compare);

    return (
      <Row>
        <Col className="sidebar">
          {isMock() ? <p style={favoriteLinkStyle}> Test Harness</p> : null}
          {isMock() ? (
            <Container style={favoriteListStyle}>
              <p>{displayThLink}</p>
            </Container>
          ) : (
            ""
          )}
          <p style={favoriteLinkStyle}> Favorite Links</p>
          {this.props.options ? (
            <Container style={favoriteListStyle}>{displayFavorites.sort()}</Container>
          ) : (
            <p> None</p>
          )}
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.moduleAreas.areas.filter(opt => opt.id !== "testHarness"),
    favorites: state.favoriteLinks.filter(opt => opt.id !== "testHarness"),
    thlink: state.moduleAreas.areas.filter(opt => opt.id == "testHarness")
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFavoriteLinks, saveFavoriteLinks, setModuleLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
