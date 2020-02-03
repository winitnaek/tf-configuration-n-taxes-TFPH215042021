import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "./Sidebar";
import DrawerToggleButton from "./DrawerToggleButton";
import {
  Row,
  Col,
  Container,
  Button,
  Card,
  CardBody,
  Modal,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCollapse,
  Collapse
} from "reactstrap";
import DisplayLinks from "../components/DisplayLinks";
import Grid from "../components/JqxGridModal";
import { PortalWithState } from "react-portal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import ModalGrid from "../components/JqxGridModal";
import ReactStrapForm from "./Test";
import AddressOverrides from "./AddressOverrides"
import Test from "../components/test";

import Welcome from "./Welcome";
import AuditLogViewer from "../auditlogs/AuditLogViewer"
import "./home.css";
import Form from '../components/Forms/FormBuilder'

// import Companies from './Companies';
// import BatchTest from './BatchTest';
// import ConnectToDataSets from './ConnectToDataSets';
// import CustomBackupRestore from './CustomBackup'
// import CustomFormulas from './CustomFormulas';
// import CustomGarnishmentFormulas from './CustomGarnishmentsFormulas';
// import CustomGarnishments from './CustomGarnishments'
// import CustomNexusData from './CustomNexusData';
// import CustomPaymentExceptions from './CustomPaymentExceptions';
//import  CustomPayments from './CustomPayments';
// import  CustomTaxCodes from './CustomTaxCodes';
// import  CustomTaxPaymentOverrides from './CustomeTaxPaymentOverrides';
// import  CyclicBulletin from './CyclicBulletin';
// import  DataSets from './DataSets';
// import  DatabaseLoad from './DatabaseLoad';
// import  DisposableOverrides from './DisposableOverrides';
// import  EmployeeGroups from './EmployeeGroups';
// import  GarnishmentFormulaOverrides from './GarnishmentFormulaOverrides';
// import  GarnishmentGroups from './GarnishmentGroups';
// import  GroupOverrides from './GroupOverrides';
// import  LocatorBulletins from './LocatorBulletins';
// import  LoginsAndPermissions from './LoginsAndPermissions';
// import  MapPaymentCodes from './MapPaymentCodes';
// import  MapTaxCodes from './MapTaxcodes';
// import  MapTaxTypes from "./MapTaxTypes";
// import  MappingTools from "./MappingTools";
// import  MaritalStatusReport from "./MaritalStausReport"
// import  OptionalRateOverrides from "./OptionalRateOverrides"
// import  PAServicesTaxReport from "./PAServicesTaxRepor"
// import  PaymentOverrides from './PaymentOverrides';
// import  PensionWhatIfTest from './PensionWhatIfTest';
// import  ReciprocalOverrides from './ReciprocalOverrides';
// import  RegulatoryBulletins from './RegulatoryBulletins';
// import  ReportingTools from './ReportingTools';
// import  SystemTools from './SystemTools';
// import  TaxEffectiveDateOverrides from './TaxEffectiveDateOverrides';
// import  TaxHistory from './TaxHistory';
// import  TaxLabilityReport from './TaxLiabilityReport';
// import  TaxLocator from './TaxLocator';
// import  USPensionQuickFormulas from './USPensionQuickFormulas';
// import  USQuickFormula from './USQuickFormula';
// import  USWageAttachmentQuickFormulas from './USWageAttachmentQuickFormulas';
// import  Welcome from './Welcome';
// import  UnemploymentOverrides from './UnemployementOverrides';
import  UserDataQueriesPg from '../userdataqueries/UserDataQueriesPg';
// import  WhatIfTest from './WhatIfTest';
// import  Worksites from './Worksites';
// import  DefineFavoriteLinks from './DefineFavoriteLinks';
import data from '../components/Forms/formdata.json'

let sidebar;

const handleRender = () => {
  console.log(`I have been clicked`);
  ReactDOM.render(
    <h1> This is a test </h1>,
    document.getElementById("pageContainer")
  );
};



class TFHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payeeDetails: null,
      isOpen: false,
      dropdownOpen: true,
      sideDrawerOpen: true,
      linksdata: {
        title: "",
        links: []
      }
    };
    this.drawerToggleClickHandler = () => {
      console.log("I am being clicked from the drawer toggle button");
      console.log(this.state.sideDrawerOpen);
      this.setState({
        sideDrawerOpen: !this.state.sideDrawerOpen
      });
    };
    this.showModal = e => {
      console.log("Trying to open modal");
    };

    this.handleGridLink = (link) => {
      console.log(link)

    }
    
    this.makeActionWhenJsonChange = (json) => {
      console.log(json)
  }


  }

  //   this.displaySidebar =  {
  //  this.state.sideDrawerOpen ?
  //      (
  //    <Col className="side-bar">
  //       <Sidebar
  //         handleLink={this.handleLink}
  //         options={this.props.data.sidebar.options}
  //         favorites={this.props.data.sidebar.favorites}
  //       />
  //     </Col>
  //      ):

  // }

  componentDidMount() {
    this.setState({
      payeeDetails: this.props.data.payeeDetails,
      linksdata: this.props.data.linksdata,
    });
  }

  handleClose() {
    console.log("You tried to close modal");
  }

  handleLink(link) {
    console.log(link);
    return (
      <Route>
        <Redirect
          to={{
            pathname: `/${link}`
          }}
        />
      </Route>
    );
  }

  handleToggle() {
    console.log("trying to toggle btn");
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleModalOpen() {
    console.log("Trying to open Modal");
    this.setState({
      isOpen: true
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // const sidebarOpen = (
    //   <Sidebar
    //     handleLink={this.handleLink}
    //     options={this.props.data.sidebar.options}
    //     favorites={this.props.data.sidebar.favorites}
    //   />
    // );
    if (nextProps.data.linksdata !== this.state.linksdata) {
      console.log("Setting the state");
      this.setState({
        linksdata: nextProps.data.linksdata
      });
    }

    if (nextState.isOpen !== this.state.isOpen) {
      console.log("A change is occuring");
      this.setState({ isOpen: true });
    }
  }
  getJsonCallback(){
        console.log(this.refs.formBuilder.getJson(data));
    }


  render() {
    console.log(this.props);

    let isOpen = false;

    const toggelModal = () => {
      console.log("you just tried to open Modal");
      isOpen = !isOpen;
      console.log(isOpen);
    };

    console.log(this.state.isOpen);
    const handleToggle = () => {
      console.log("I have been clicked");
    };

    const openNav = () => {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    };
   

    return (
      <Router>
        <div style={{ marginTop: 0 }}>
          <Container id="pageContainer">
            <Col>
              {/* <span
                id="toggler"
                style={{ marginBottom: "1rem" }}
              >
              
                 <DrawerToggleButton click={this.drawerToggleClickHandler} />
              </span> */}
              {/* <UncontrolledCollapse toggler="#toggler"> */}
                <Sidebar
                  handleLink={this.handleLink}
                  options={this.props.data.sidebar.options}
                  favorites={this.props.data.sidebar.favorites}
                />
              {/* </UncontrolledCollapse> */}
            </Col>
         
    
            {/* <ModalGrid data={this.props.data.payeeDetails}  renderLink={this.handleGridLink}/> */}
            <Col>
              <Switch>
                <Route path="/welcome">
                  <Welcome />
                </Route>
                <Route path="/reactStrapForm">
                  <ReactStrapForm />
                </Route>
                <Route path="/addressOverrides">
                  <AddressOverrides />
                </Route>
                <Route path="/auditLogViewer">
                  <AuditLogViewer />
                </Route>
                {/* <Route path="/customPayments">
                  <CustomPayments />
                </Route> */}
                <Route path="/">
               <Welcome/>
                </Route>
               
              </Switch>
            </Col>
          </Container>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
    options: state.data.sidebar.options
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TFHome);
