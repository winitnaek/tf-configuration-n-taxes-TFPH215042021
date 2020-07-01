import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Col, Row, Button, UncontrolledTooltip, Container } from "reactstrap";
import { tftools } from "../../base/constants/TFTools";
import { closeForm, setFormData } from "../actions/formActions";
import * as styles from "../../base/constants/AppConstants";
import * as formMetaData from "../metadata/metaData";
import * as fieldData from "../metadata/fieldData";
import { ReusableModal } from "bsiuilib";
import { DynamicForm } from "bsiuilib";

import { getRecentUsage } from "../actions/usageActions";
import autocompleteSelectAPI from "../api/autocompleteselectAPI";
import savegriddataAPI from "../api/savegriddataAPI";
import { setFilterFormData } from "../actions/filterFormActions";

const renderTFCustomComp = "renderTFCustomComp";

class UserDataQueries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      helpLabel: "Click here for more info",
      title: "User Data Queries",
      pgid: "",
      formTitle: "",
      isOpen: false,
      isfilterform: false,
      permissions: " ",
      isOpen: false
    };

    this.OpenHelp = () => {
      this.props.help("userDataQueries");
    };

    this.renderMe = (pgid, values, filter) => {
      filter && this.props.setFilterFormData(values);
      let data = tftools.filter(tftool => {
        if (tftool.id == pgid) return tftool;
      });
      renderTFApplication("pageContainer", data[0]);
    };

    this.renderCustom = renderName => {
      renderTFApplication("pageContainer", renderName);
    };

    this.toggle = (id, title) => {
      const payload = { data: {}, mode: "New" };
      this.props.setFormData(payload);
      this.setState({
        isOpen: true,
        pgid: id,
        formTitle: title,
        isfilterform: true
      });
    };

    this.handleClose = () => {
      this.setState({ isOpen: false });
    };
  }

  render() {
    const { permissions, cruddef, isfilterform, pgid } = this.state;
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
          <h1 style={styles.pagetitle}>{this.state.title}</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i className="fas fa-question-circle  fa-lg" onClick={this.OpenHelp} style={styles.helpicon} />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row>
          <Col xs="6">
            <h3>
              <Button color="link" onClick={() => this.renderCustom(renderTFCustomComp)}>
                Test Custom Component
              </Button>
            </h3>
          </Col>
          {tftools.map(({ label, id, value, type }) => {
            return value === "UQ" && type !== "page" ? (
              <Col xs="6">
                <h3>
                  <Button color="link" onClick={() => this.renderMe(id)}>
                    {label}
                  </Button>
                </h3>
              </Col>
            ) : null;
          })}
        </Row>

        <ReusableModal
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
            formMetaData={formMetaData[pgid]}
            fieldData={fieldData[pgid]}
            recentUsage={getRecentUsage}
            autoComplete={autocompleteSelectAPI}
            saveGridData={savegriddataAPI}
            styles={styles}
          />
        </ReusableModal>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDataQueries);
