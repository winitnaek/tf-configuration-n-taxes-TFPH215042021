import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Search from "../components/Search";
import Welcome from "./Welcome";
import { setModuleLinks } from "./actions/moduleLinksActions";
import FlyoutMenu from "../components/FlyoutMenu";

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
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLink(data) {
    renderTFApplication("pageContainer", data);
  }

  getJsonCallback() {
    console.log(this.refs.formBuilder.getJson(data));
  }

  render() {
    return (
      <div style={{ marginTop: 0 }}>
        <Container fluid>
          <Row>
            <Col xs="2">
              <Button color="link" onClick={this.toggle}>
                Reporting
              </Button>
              {this.state.isOpen ? (
                <div className="modal-content" style={{ position: "fixed", zIndex: 99, width: "94%", marginTop: "10px" }}>
                  <div className="modal-header">
                    <button type="button" className="close" aria-label="Close" onClick={this.toggle}>
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col">
                        <FlyoutMenu showSideMenu />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </Col>
            <Col>
              <Search />
            </Col>
          </Row>
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
    options: state.moduleAreas.areas
    // data: state.gridData.data
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setModuleLinks }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TFHome);
