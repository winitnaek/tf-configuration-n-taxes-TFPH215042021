import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container } from "reactstrap";
import * as formMetaData from "../metadata/metaData";
import * as fieldData from "../metadata/fieldData";
import { setModuleLinks } from "./actions/moduleLinksActions";
import { saveFavoriteLinks } from "./favoriteLinksActions";
import { tftools } from "../../base/constants/TFTools";
import { formatFieldData } from "../../base/utils/tfUtils";
import { ReusableModal, DynamicForm, FlyoutMenu, SearchBar } from "bsiuilib";
import { setFormData } from "../actions/formActions";
import { setFilterFormData } from "../actions/filterFormActions";
import * as styles from "../../base/constants/AppConstants";
import { getUsageData } from "../api/getUsageDataAPI";
import formDataAPI from "../api/formDataAPI";
import savegriddataAPI from "../api/savegriddataAPI";
import {setUnSetFavorite} from "../home/actions/favoriteUtil";
import { isMock } from '../../tf-configuration-n-taxes';
class TFHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: true,
      sideDrawerOpen: true,
      getGridData: this.props.fetchGridData
    };

    this.sectionLayout = [
      [
        {
          section: "Company Data",
          sectionHeader: "Company Data",
          sectionIcon: "book",
          value: "CD"
        },
        {
          section: "Groups Data",
          sectionHeader: "Groups Data",
          sectionIcon: "flask",
          value: "GD"
        },
        {
          section: "Custom Tax Data",
          sectionHeader: "Custom Tax Data",
          sectionIcon: "money-bill-alt",
          value: "CT"
        }
      ],
      [
        {
          sectionHeader: "Garnishment Data",
          section: "Garnishment Data",
          sectionIcon: "gavel",
          value: "GD"
        },
        {
          sectionHeader: "Payments Data",
          section: "Payments Data",
          sectionIcon: "dollar-sign",
          value: "PD"
        },
        {
          sectionHeader: "Tools",
          section: "Tools",
          sectionIcon: "cogs",
          value: "MT"
        }
      ],
      [
        {
          sectionHeader: "Tests",
          section: "Tests",
          sectionIcon: "balance-scale",
          value: "TS"
        }
      ]
    ];

    this.handleClose = this.handleClose.bind(this);
    this.toggle = this.toggle.bind(this);
    this.renderApplication = this.renderApplication.bind(this);
    this.renderMe = this.renderMe.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
  }

  toggle(pageData) {
    const { id, label } = pageData;
    const payload = { data: {}, mode: "New" };
    this.props.setFormData(payload);
    this.setState({
      isOpen: true,
      pgid: id,
      formTitle: label,
      isfilterform: true
    });
  }

  handleClose() {
    this.setState({ isOpen: false });
  }

  renderMe(pageId, values, filter) {
    filter && this.props.setFilterFormData(values);
    let data = tftools.find(tftool => tftool.id == pageId);
    renderTFConfigNTaxes("pageContainer", data);
  }

  renderApplication(data) {
    const { id, value } = data;
    if (!fieldData[id] || value !== "UQ" || id === "maritalStatusReport" || id === "paServicesTaxReport") {
      this.renderMe(id);
    } else {
      this.toggle(data);
    }
  }
  /**
   * setFavorite
   * @param {*} favorites 
   * @param {*} selectedFavorite 
   * @param {*} action 
   */
  setFavorite(favorites, selectedFavorite, action) {
    setUnSetFavorite(favorites, selectedFavorite, action);
  }
  getOptions() {
    let excluededPages=[];
    if(!isMock()){
      excluededPages = ["testHarness", "selectSamplePage", "dateFieldDoc","UQ","SM"];
    }
    let perms = getAllRights();
    return tftools.filter(tool => !excluededPages.includes(tool.value) && perms[tool.value] && perms[tool.value][0]===1).sort(this.GetSortOrder("label"));
  }

  getTFTools() {
    let perms = getAllRights();
    return tftools.filter(tool => perms[tool.value] && perms[tool.value][0]===1).sort(this.GetSortOrder("label"));
  }

  GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  render() {
    const { isOpen, formTitle, isfilterform, pgid } = this.state;
    const { formData } = this.props;
    const formProps = {
      close: this.handleClose,
      pgid,
      renderMe: this.renderMe,
      filter: isfilterform
    };

    const fieldDataX = formatFieldData(fieldData[pgid], pgid, appUserId());

    return (
      <div style={{ marginTop: 0 }}>
        <Container fluid style={{ overflowY: "auto", minHeight: "calc(100vh - 75px)" }}>
          <SearchBar
            title="Configuration & Taxes"
            sectionLayout={this.sectionLayout}
            options={this.getOptions()}
            favorites={this.props.favorites}
            setFavorite={this.setFavorite}
            renderApplication={this.renderApplication}
          />

          <ReusableModal open={isOpen} close={this.handleClose} title={formTitle} styles={styles}>
            <DynamicForm
              formData={formData}
              formProps={formProps}
              filter={false}
              isfilterform={isfilterform}
              tftools={this.getTFTools().sort(this.GetSortOrder("label"))}
              metadata={formMetaData[pgid]}
              fieldData={fieldDataX}
              recentUsage={getUsageData}
              getFormData={formDataAPI}
              saveGridData={savegriddataAPI}
              styles={styles}
            />
          </ReusableModal>

          <Row>
            <Col>
              <div id="pageContainer" className="container w-100 pl-5 pr-5" style={{ maxWidth: "100%" }}>
                <FlyoutMenu
                  favorites={this.props.favorites}
                  options={this.getTFTools()}
                  showSideMenu={false}
                  setFavorite={this.setFavorite}
                  renderApplication={this.renderApplication}
                  sectionLayout={this.sectionLayout}
                />
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
    formData: state.formData,
    favorites: state.favoriteLinks//.filter(opt => opt.id !== "testHarness")
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setModuleLinks, saveFavoriteLinks, setFilterFormData, setFormData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TFHome);
