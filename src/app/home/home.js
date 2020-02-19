import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Provider } from "react-redux";
import configureStore from "../../base/config/configureStore";
import { Col, Container, Button } from "reactstrap";
import Welcome from "./Welcome";
<<<<<<< HEAD

let store = configureStore();


import CustomPayments from './CustomPayments';
import AllBsiPlans from './AllBsiPlans';
import PopulateV3States from './PopulateV3State';
import CustomTaxPayments from './CustomTaxPayments';



import ReusableGrid from "../components/ReusableGrid";
import CustomPaymentMockData from "../metadata/tempGridData/CUSTOM_PAYMENTS_MOCKDATA.json";
import CustomPaymentMetaData from "../metadata/CUSTOM_PAYMENTS_METADATA.js";
import AllBsiPlansMockData from "../metadata/tempGridData/ALL_BSI_PLANS_MOCKDATA.json";
import AllBsiPlansMetaData from "../metadata/ALL_BSI_PLANS_METADATA.json";
import PopulateV3StatesMetaData from "../metadata/POPULATE_V3_STATES_METADATA.json";
import PopulateV3StatesMockData from "../metadata/tempGridData/POPULATE_V3_STATES_MOCKDATA.json";
import CustomTaxPaymentsMockData from "../metadata/tempGridData/CUSTOM_PAYMENTS_MOCKDATA.json";
import CustomTaxPaymentsMetaData from "../metadata/CUSTOM_PAYMENTS_METADATA.js";
import { fetchLinks } from "./actions/getLinks";
import { setModuleLinks } from "./actions/moduleLinksActions";

=======
import   '../../css/home.css';
let store = configureStore();
import AllBsiPlans from './AllBsiPlans';
import PopulateV3States from './PopulateV3State';
import CustomPayments from './CustomPayments';
import { fetchLinks } from "./getLinks";
import { setModuleLinks } from "./moduleLinksActions";
import Sidebar from './Sidebar';
>>>>>>> TF_UI_PRE_SEC
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

    this.handleLink = link => {
     
      console.log(link);
      let MockData;
      let MetaData;

      switch (link) {
        case "CustomPayments":
          this.setState({
            MockData: CustomPaymentMockData,
            MetaData: CustomPaymentMetaData
          });
          MockData = CustomPaymentMockData;
          MetaData = CustomPaymentMetaData;
          break;
        case "AllBsiPlans":
          this.setState({
            MockData: AllBsiPlansMockData,
            MetaData: AllBsiPlansMetaData
          });
          MockData = AllBsiPlansMockData;
          MetaData = AllBsiPlansMetaData;
          break;
        case "PopulateV3States":
          this.setState({
            MockData: PopulateV3StatesMockData,
            MetaData: PopulateV3StatesMetaData
          });
          MockData = PopulateV3StatesMockData;
          MetaData = PopulateV3StatesMetaData;
          break;
        case "CustomTaxPayments":
          this.setState({
            MockData: CustomTaxPaymentsMockData,
            MetaData: CustomTaxPaymentsMetaData
          });
          MockData = CustomTaxPaymentsMockData;
          MetaData = CustomTaxPaymentsMetaData;
          break;
          return;
        default:
          break;
      }

      console.log(this.state.MetaData);
      const dataSource = {
        datafields: MetaData.griddef.dataFields,
        aysnc: false,
        datatype: "json",
        localdata: MockData
      };

      const source = new window.jqx.dataAdapter(dataSource);

      console.log(link);
      return ReactDOM.render(
        <Provider store={store}>
          <div>
            {/* <Col>
              <Sidebar handleLink={this.handleLink} />
            </Col>
            <Col> */}
              {/* <ReusableGrid
                data={MetaData}
                source={source}
                columns={MetaData.griddef.columns}
                width="100%"
              /> */}

              {link === "AllBsiPlans" && <AllBsiPlans />}
              {link === "PopulateV3States" && <PopulateV3States />}
              {link === "CustomPayments" && <CustomPayments />}
              {link === "CustomTaxPayments" && <CustomTaxPayments />}

              {/* {link === "Welcome" && <Welcome />}
              {link === "AddressOverrides" && <AddressOverrides />}
              {link === "AuditLogViewer" && <AuditLogViewer />}
              {link === "Modules" && <Modules />}
              {link === "ReadOnlyType1" && <ReadOnlyType1/>}
              {link === "ReadOnlyType1_1" && <ReadOnlyType1_1/>}
              {link ===  "GridWithLinks" && <GridWithLinks/>}
              {link ===  "AllBsiPlans" && <AllBsiPlans/>}
              {link ===  "PopulateV3States" && <PopulateV3States/>}
              {link === "CustomPayments" && <CustomPayments/>}
              {link === "CustomTaxPayments" && <CustomTaxPayments/>} */}

              {/* need to add all routing links here like the ones above */}
            {/* </Col> */}
          </div>
        </Provider>,
        document.querySelector("#" + "mainPageArea")
      );
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    const { links, options } = this.props;

    this.setState({
      payeeDetails: this.props.data.payeeDetails,
      linksdata: this.props.data.linksdata
    });

    window.document.getElementById("navId").style.position="fixed";
    window.document.getElementById("navId").style.width="100%";
    window.document.getElementById("navId").style.top="0";
    window.document.getElementById("navId").style.zIndex="500";







    const { fetchLinks } = this.props;
    fetchLinks();
  }

=======
    
  }

  handleLink(data) {
    console.log(data)
    renderTFApplication("pageContainer", data);
  }

>>>>>>> TF_UI_PRE_SEC
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
<<<<<<< HEAD
        <Container>
          <Col>
            <Sidebar handleLink={this.handleLink} />
          </Col>
          <Col id="mainPageArea" style={{marginBotton: "0", paddingBottom: "0", paddingTop: "50px"}}>
            <Welcome />
          </Col>
        </Container>
=======
          <Container>
          <div class="col" id="pageContainerSib">
             <Sidebar handleLink={this.handleLink} />
          </div> 
          <div class="col" id="pageContainer">
              <Welcome/>
          </div>
         </Container> 
>>>>>>> TF_UI_PRE_SEC
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
