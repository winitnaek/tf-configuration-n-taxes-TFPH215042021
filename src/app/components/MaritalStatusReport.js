import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container, UncontrolledTooltip } from "reactstrap";
import { DynamicForm } from "bsiuilib";
import generateReportApi from "../api/generateReportAPI";
import { tftools } from "../../base/constants/TFTools";
import * as metaData from "../metadata/metaData";
import * as styles from "../../base/constants/AppConstants";
import * as fieldData from "../metadata/fieldData";
import { setFilterFormData } from "../actions/filterFormActions";

class MaritalStatusReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      docData: "",
    };
    this.renderMe = (pgid, formValues, response) => {
      console.log("pgid");
      console.log(pgid);
      console.log("response");
      console.log(response);
      console.log("formValues");
      console.log(formValues);
      formValues && this.props.setFilterFormData(formValues);
      this.setState({ url: response.message, docData: response.docData });
    };

    this.OpenHelp = () => {
      this.props.help(this.props.pgid);
    };
  }
  download() {
    const byteCharacters = atob(this.state.docData);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const output = new Blob([byteArray]);
    var anchor = document.createElement("a");
    var url = window.URL || window.webkitURL;
    anchor.href = url.createObjectURL(output);
    var downloadFileName = this.state.url;
    anchor.download = downloadFileName;
    document.body.append(anchor);
    anchor.click();

    setTimeout(function () {
      document.body.removeChild(anchor);
      url.revokeObjectURL(anchor.href);
    }, 100);
  }
  render() {
    const { pgid, formData, formFilterData } = this.props;
    const { url } = this.state;
    const { pgdef } = metaData[pgid];
    const formProps = {
      pgid,
      permissions: "",
      close: () => {},
      filter: false,
      renderMe: this.renderMe,
    };

    return (
      <Container>
        <Row>
          <h1 style={styles.pagetitle}>{pgdef.pgtitle}</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i
                  className="fas fa-question-circle  fa-lg"
                  onClick={this.OpenHelp}
                  style={styles.helpicon}
                />
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
              filterFormData={formFilterData}
              formProps={formProps}
              filter={true}
              isfilterform={false}
              tftools={tftools}
              formMetaData={metaData[pgid]}
              fieldData={fieldData[pgid]}
              formHandlerService={generateReportApi}
              styles={styles}
            />
            {url && (
              <p>
                Right click the filename below and select 'Save Target As...' to
                save csv file. <br />
                <a href="#" onClick={() => this.download()}>
                  {url}
                </a>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFilterFormData }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MaritalStatusReport);