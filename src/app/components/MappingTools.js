import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row, UncontrolledTooltip, Container } from "reactstrap";
import { tftools } from "../../base/constants/TFTools";
import Tool from "./Tool";

import { UserDataQueries } from "./UserDataQueries";
import { mappingTools } from "../metadata/metaData";

import { closeForm, setFormData } from "../actions/formActions";
import * as styles from "../../base/constants/AppConstants";
import * as formMetaData from "../metadata/metaData";
import * as fieldData from "../metadata/fieldData";
import { ReusableModal } from "bsiuilib";
import { DynamicForm } from "bsiuilib";

import { getRecentUsage } from "../actions/usageActions";
import formDataAPI from "../api/formDataAPI";
import savegriddataAPI from "../api/savegriddataAPI";
import GeneralApi from "../api/generalApi";
import { setFilterFormData } from "../actions/filterFormActions";

class MappingTools extends UserDataQueries {
  constructor() {
    super();
    this.state = {
      tools: []
    };
    this.OpenHelp = () => {
      this.props.help("mappingTools");
    };

    this.openTool = (id) => {
      const data = tftools.find(tool => tool.id === id);
      if (data) {
        renderTFConfigNTaxes("pageContainer", data);
      }
    }
  }

  componentDidMount() {
    const { pgid } = this.props;
    const { tools } = this.state;
    GeneralApi.getPageData(pgid).then(mapToolsData => {
      let countData = mapToolsData;
      let res = {
        mapTaxCodes:[
           {
              "name":"Tax Codes",
              "mapped":countData[0] && countData[0].value ? countData[0].value:0,
              "notMapped":countData[1] && countData[1].value ? countData[1].value:0,
           }
        ],
        mapTaxTypes:[
           {
              "name":"Tax Types",
              "mapped":countData[2] && countData[2].value ? countData[2].value:0,
              "notMapped":countData[3] && countData[3].value ? countData[3].value:0,
           }
        ],
        mapPaymentCodes:[
           {
              "name":"Credit Codes",
              "mapped":countData[4] && countData[4].value ? countData[4].value:0,
              "notMapped":countData[5] && countData[5].value ? countData[5].value:0,
           },
           {
              "name":"Deduction Codes",
              "mapped":countData[6] && countData[6].value ? countData[6].value:0,
              "notMapped":countData[7] && countData[7].value ? countData[7].value:0,
           },
           {
              "name":"Plan Codes",
              "mapped":countData[8] && countData[8].value ? countData[8].value:0,
              "notMapped":countData[9] && countData[9].value ? countData[9].value:0,
           },
           {
              "name":"Earning Codes",
              "mapped":countData[10] && countData[10].value ? countData[10].value:0,
              "notMapped":countData[10] && countData[10].value ? countData[10].value:0,
           }
        ]
     }
      tftools.forEach(tool => {
        const { value, type, id, label } = tool;
        if (value === "MT" && type !== "page" && mappingTools.tools[id]) {
          let showButton = true;
          if(id==='mapTaxTypes'){
            showButton = hasTTRights().VIEW;
          }else if(id==='mapTaxCodes'){
            showButton = hasTCRights().VIEW;
          }else if(id==='mapPaymentCodes'){
            showButton = hasPCRights().VIEW;
          }
          tools.push(Object.assign({ label, id, type, value, showButton }, mappingTools.tools[id], { items: res[id] || [] }));
        }
      });
      this.setState({
        tools
      });
    });
  }

  render() {
    const { permissions, cruddef, isfilterform, pgid, tools } = this.state;
    const { deleteRow, handleChange, renderMe, handleSubmit } = this;
    const { getRecentUsage, formData } = this.props;
    let filter;
    if (isfilterform) {
      filter = true;
    }
    const close = this.handleClose;
    const formProps = { close, handleChange, pgid, permissions, deleteRow, handleSubmit, renderMe, filter };

    return (
      <Container>
        <Row>
          <h1 style={styles.pagetitle}>Mapping Tools</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i className="fas fa-question-circle  fa-lg" onClick={this.OpenHelp} style={styles.helpicon} />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> Help Label </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row>
         {tools.map(tool => (
             <Tool {...tool} toggle={() => this.openTool(tool.id)} />
         ))}
       </Row>
        {/* <ReusableModal
          open={this.state.isOpen}
          close={this.handleClose}
          title={this.state.formTitle}
          cruddef={cruddef}
          styles={styles}
        >
          <DynamicForm
            formData={formData}
            formProps={formProps}
            filter={filter}
            isfilterform={this.state.isfilterform}
            tftools={tftools}
            metadata={formMetaData[pgid]}
            fieldData={fieldData[pgid]}
            recentUsage={getRecentUsage}
            autoComplete={formDataAPI}
            saveGridData={savegriddataAPI}
            styles={styles}
          />
        </ReusableModal> */}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.formData.isOpen,
    formData: state.formData
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeForm, setFormData, getRecentUsage, setFilterFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MappingTools);
