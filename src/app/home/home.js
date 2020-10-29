import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container, Button } from "reactstrap";
import Search from "../components/Search";
import Welcome from "./Welcome";
import { setModuleLinks } from "./actions/moduleLinksActions";
import { saveFavoriteLinks } from "./favoriteLinksActions";
import FlyoutMenu from "../components/FlyoutMenu";
import { tftools } from "../../base/constants/TFTools";

class TFHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: true,
      sideDrawerOpen: true,
      getGridData: this.props.fetchGridData
    };
    this.toggle = this.toggle.bind(this);
    this.handleLink = this.handleLink.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLink(pageId) {
    this.setState({
      isOpen:false
    })
    let data = tftools.find(tftool => tftool.id == pageId);
    renderTFApplication("pageContainer", data);
  }

  getJsonCallback() {
    console.log(this.refs.formBuilder.getJson(data));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div style={{ marginTop: 0 }}>
        <Container fluid className='overflow-auto'>
          <div style={{ position: "relative" }}>
            <Row className="pt-3 mb-3" style={{ backgroundColor: "#bbdefb" }}>
              <Col xs="2">
                <Button color="link" onClick={this.toggle}>
                  <span className="d-inline-block mr-1"> Reporting </span>
                  <i className={`fas fa-caret-${isOpen ? "up" : "down"}`} aria-hidden="true"></i>
                </Button>
              </Col>
              <Col>
                <Search />
              </Col>
            </Row>
            {isOpen ? (
              <div
                className="modal-content"
                style={{
                  position: "absolute",
                  zIndex: 99,
                  top: "71px",
                  left: "0",
                  height: "calc(100vh - 134px)",
                  overflowY: "auto"
                }}
              >
                <div className="modal-header">
                  <button type="button" className="close" aria-label="Close" onClick={this.toggle}>
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col">
                      <FlyoutMenu
                        favorites={this.props.favorites}
                        options={tftools}
                        onClick={this.handleLink}
                        setFavorite={this.props.saveFavoriteLinks}
                        showSideMenu
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <Row>
            <Col>
              <div id="pageContainer" className="container w-100 p-0">
                <Welcome />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    options: state.moduleAreas.areas,
    favorites: state.favoriteLinks.filter(opt => opt.id !== "testHarness")
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setModuleLinks, saveFavoriteLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TFHome);
