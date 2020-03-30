import React, { Fragment } from "react";
import { Col, Row, Button, UncontrolledTooltip } from "reactstrap";
import { tftools } from "../../base/constants/TFTools";
import { connect } from "react-redux";
import { closeForm, setFormData } from "../actions/formActions";
import { bindActionCreators } from "redux";
const allBSIPlans = "allBSIPlans";
const populateV3States = "populateV3States";
const experienceRates = "experienceRates";
const supplementalMethods = "supplementalMethods";
import { pagetitle, helpicon } from "../../base/constants/AppConstants";
import CustomForm from './CustomForm';
import Modal from "./Modal";

const TitleStyle = {
  margin: "0 auto",
  paddingBottom: "50px"
};

const LinkStyles = {
  marginTop: "50px"
};

class UserDataQueries extends React.Component {
  constructor(props) {
    super(props);
    console.log("metadata>>>>");
    console.log(this.props.metadata);
    this.state = {
      value: "",
      helpLabel: "Click here for more info",
      title: "User Data Queries",
      pgid: "",
      formTitle: "",
      isOpen: false,
      isfilterform: false,
      permissions: " "
    };
    this.OpenHelp = () => {
      this.props.help("userDataQueries");
    };

    this.renderMe = (pgid) => {
      console.log(pgid);
      let data = tftools.filter(tftool => {
        if (tftool.id == pgid) return tftool;
      });
      console.log(data[0]);
      renderTFApplication("pageContainer", data[0]);
    }

    this.closeModal = () => {
      this.setState({ isOpen: false });
    };

    this.toggle = (id, title) => {
      const payload = { data:{} , mode: "New" };
     this.props.setFormData(payload)

      this.setState({
        pgid: id,
        formTitle: title,
        isfilterform: true
      });

    };
  }



  render() {
    const { permissions, cruddef, isfilterform, pgid } = this.state;
    const { deleteRow, handleChange, renderMe, handleSubmit } = this;
    let filter;
    if (isfilterform) {
      filter = true;
    }

    const close = this.props.closeForm;
    const formProps = {
      close,
      handleChange,
      pgid,
      permissions,
      deleteRow,
      handleSubmit,
      renderMe,
      filter
    };
    return (
      <Fragment>
        <Row>
          <h1 style={pagetitle}>{this.state.title}</h1>
          <span style={{ marginLeft: "10px" }}>
            <span id="help">
              <span>
                <i
                  className="fas fa-question-circle  fa-lg"
                  onClick={this.OpenHelp}
                  style={helpicon}
                />
              </span>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> {this.state.helpLabel} </span>
            </UncontrolledTooltip>
          </span>
        </Row>
        <Row>
          <Col>
            <h3>
              <Button color="link" onClick={() => this.renderMe(allBSIPlans)}>
                All BSI Plan
              </Button>
            </h3>
          </Col>
          <Col>
            <h3>
              <Button
                color="link"
                onClick={() => this.renderMe(populateV3States)}
              >
                V3 Polulated States
              </Button>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>
              <Button
                color="link"
                onClick={() => this.toggle(experienceRates, "Experience Rates")}
              >
                Experience Rates
              </Button>
            </h3>
          </Col>
          <Col>
            <h3>
              <Button
                color="link"
                onClick={() =>
                  this.toggle(supplementalMethods, "Supplemental Methods")
                }
              >
                Supplemental Methods
              </Button>
            </h3>
          </Col>
        </Row>

        <Modal
          open={this.props.isOpen}
          close={this.props.closeForm}
          title={this.state.formTitle}
          cruddef={cruddef}
        >
          <CustomForm
            formProps={formProps}
            filter={filter}
            isfilterform={this.state.isfilterform}
          />
        </Modal>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.formData.isOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ closeForm, setFormData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDataQueries);


