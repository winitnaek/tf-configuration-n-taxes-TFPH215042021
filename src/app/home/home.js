import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Provider } from "react-redux";
import configureStore from "../../base/config/configureStore";
import Sidebar from "./Sidebar";
import { Col, Container, Button } from "reactstrap";
import Welcome from "./Welcome";
// import AuditLogViewer from "../auditlogs/AuditLogViewer";
import AuditLogViewer from './AuditLogViewer'
import AddressOverrides from "./AddressOverrides";
import "./home.css";
let store = configureStore();
import CustomPayments from '../customize/payments/CustomPayments';
import ReadOnlyType1 from '../customize/payments/Read_Only_type1';
import ReadOnlyType2 from '../customize/payments/Read_Only_type2';




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
import Modules from "./Modules";
import { fetchLinks } from "../../base/config/actions/getLinks";
import { setModuleLinks } from "../../base/config/actions/moduleLinksActions";

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
    const { links, options } = this.props;

    this.setState({
      payeeDetails: this.props.data.payeeDetails,
      linksdata: this.props.data.linksdata
    });

    const { fetchLinks } = this.props;
    fetchLinks();
  }

  handleLink(link) {
    console.log(link)
    return ReactDOM.render(
      <Provider store={store}>
        <div>
          <Col>
            <Sidebar handleLink={this.handleLink} />
          </Col>
          <Col>
            {link === "Welcome" && <Welcome />}
            {link === "AddressOverrides" && <AddressOverrides />}
            {link === "AuditLogViewer" && <AuditLogViewer />}
            {link === "Modules" && <Modules />}
            {link === "ReadOnlyType1" && <ReadOnlyType1/>}
            {link === "ReadOnlyType2" && <ReadOnlyType2/>}
            {/* {link === "Modules" && <CustomPayments2 />} */}

            {/* need to add all routing links here like the ones above */}
          </Col>
        </div>
      </Provider>,
      document.querySelector("#" + "pageContainer")
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);

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
    return (
      <div style={{ marginTop: 0 }}>
        <Container id="pageContainer">
          <Col>
            <Sidebar handleLink={this.handleLink} />
          </Col>
          <Col style={{ marginLeft: "10px" }}>
            <Welcome />
            {/* <AuditLogViewer/> */}
            {/* <ReadOnlyType1/>
            <ReadOnlyType2/> */}
            {/* <CustomPayments/> */}
            {/* <Test/> */}
          </Col>
        </Container>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data,
    options: state.moduleLinks,
    links: state.links
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchLinks: fetchLinks, setModuleLinks },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(TFHome);
