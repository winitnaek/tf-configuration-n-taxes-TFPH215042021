import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container, UncontrolledTooltip } from "reactstrap";
import { DynamicForm } from "bsiuilib";
import generateReportApi from "../api/generateReportApi";
import { tftools } from "../../base/constants/TFTools";
import * as metaData from "../metadata/metaData";
import * as styles from "../../base/constants/AppConstants";
import * as fieldData from "../metadata/fieldData";

class MaritalStatusReport extends Component {
  constructor(props) {
    super(props);

    this.renderMe = (pgid, formValues, response) => {
      const page = tftools.find(tftool => tftool.id === pgid);
      renderTFApplication("pageContainer", page, { url: response.link });
    };
  }
  
  render() {
    const { pgid, formData, initialProps } = this.props;
    const { pgdef } = metaData[pgid];
    const formProps = { pgid, permissions: "", close: () => {}, filter: false, renderMe: this.renderMe };

    return (
      <Container>
        <Row>
          <h1 style={styles.pagetitle}>{pgdef.pgtitle}</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i className="fas fa-question-circle  fa-lg" onClick={this.OpenHelp} style={styles.helpicon} />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {pgdef.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row>
          <Col>
            <DynamicForm
              formData={formData}
              formProps={formProps}
              filter={true}
              isfilterform={false}
              tftools={tftools}
              formMetaData={metaData[pgid]}
              fieldData={fieldData[pgid]}
              saveGridData={generateReportApi}
              styles={styles}
            />
            {initialProps && initialProps.url && (
              <p>
                Right click the filename below and select 'Save Target As...' to save csv file. <br />
                <a href={initialProps.url}>{initialProps.url}</a>
              </p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    isOpen: state.formData.isOpen,
    formData: state.formData,
    formFilterData: state.formFilterData
  };
}

export default connect(mapStateToProps, null)(MaritalStatusReport);
