import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Provider } from "react-redux";
import configureStore from "../../base/config/configureStore";
import { Col, Container, Button } from "reactstrap";
import Welcome from "./Welcome";
import   '../../css/home.css';
let store = configureStore();
import AllBsiPlans from './AllBsiPlans';
import PopulateV3States from './PopulateV3State';
import CustomPayments from './CustomPayments';
import { fetchLinks } from "./getLinks";
import { setModuleLinks } from "./moduleLinksActions";
import Sidebar from './Sidebar';
class TFHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: true,
      sideDrawerOpen: true
    };
    this.drawerToggleClickHandler = () => {
      this.setState({
        sideDrawerOpen: !this.state.sideDrawerOpen
      });
    };
  }

  componentDidMount() {
    
  }

  handleLink(data) {
    console.log(data)
    renderTFApplication("pageContainer", data);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.links !== this.props.links) {
      if (
        nextProps.links &&
        nextProps.links.data &&
        nextProps.links.data.links
      ) {
        const payload = nextProps.links.data.links;
        const { setModuleLinks } = this.props;
        setModuleLinks(payload);
      }
    }

    if (nextState.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: true });
    }
  }
  getJsonCallback() {
    console.log(this.refs.formBuilder.getJson(data));
  }

  render() {
    return (
      <div style={{ marginTop: 0 }}>
          <Container>
          <div class="col" id="pageContainerSib">
             <Sidebar handleLink={this.handleLink} />
          </div> 
          <div class="col" id="pageContainer">
              <Welcome/>
          </div>
         </Container> 
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    options: state.moduleAreas.areas
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchLinks: fetchLinks, setModuleLinks },dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(TFHome);
