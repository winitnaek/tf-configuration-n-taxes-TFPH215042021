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
import AddressOverrides from "./AddressOverrides";

import Welcome from "./Welcome";
import AuditLogViewer from "../auditlogs/AuditLogViewer";
import "./home.css";
import Form from "../components/Forms/FormBuilder";

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
import UserDataQueriesPg from "../userdataqueries/UserDataQueriesPg";
// import  WhatIfTest from './WhatIfTest';
// import  Worksites from './Worksites';
// import  DefineFavoriteLinks from './DefineFavoriteLinks';
import data from "../components/Forms/formdata.json";

let sidebar;

const handleRender = () => {
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
      this.setState({
        sideDrawerOpen: !this.state.sideDrawerOpen
      });
    };
  }

  componentDidMount() {
    this.setState({
      payeeDetails: this.props.data.payeeDetails,
      linksdata: this.props.data.linksdata
    });
  }

  handleLink(link) {
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
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleModalOpen() {
    this.setState({
      isOpen: true
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data.linksdata !== this.state.linksdata) {
      this.setState({
        linksdata: nextProps.data.linksdata
      });
    }

    if (nextState.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: true });
    }
  }
  getJsonCallback() {
    console.log(this.refs.formBuilder.getJson(data));
  }

  render() {
    let isOpen = false;

    return (
      <Router>
        <div style={{ marginTop: 0 }}>
          <Container id="pageContainer">
            <Col>
              <Sidebar
                handleLink={this.handleLink}
                options={this.props.data.sidebar.options}
                favorites={this.props.data.sidebar.favorites}
              />
            </Col>
            <Col>
              <Switch>
                <Route path="/welcome">
                  <Welcome />
                </Route>
                <Route path="/addressOverrides">
                  <AddressOverrides />
                </Route>
                <Route path="/auditLogViewer">
                  <AuditLogViewer />
                </Route>
                <Route path="/">
                  <Welcome />
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
