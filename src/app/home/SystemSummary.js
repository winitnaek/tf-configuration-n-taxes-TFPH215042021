import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "./Sidebar";
import {
  Row,
  Col,
  Container,
  Button,
  Modal,
  ListGroup,
  ListGroupItem
} from "reactstrap";


class SystemSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);

    this.setState({});
  }

  render() {
    const { taxCodes, unmappedAuthorites, overrides } = this.props;

    const displayOverrides = () => {
      overrides.map(item => {
          console.log(item.label)
        return (
          <li>
            <a href={item.link}> {item.label} </a>
          </li>
        );
      });
    };

    return (
      <Container>
        <Col>
            <p>
              <strong> System Summary </strong>
            </p>
          <hr />
          <ul>
            <li>
              There are {taxCodes ? taxCodes.length : 0}
              <a href=""> Tax Codes</a> mapped for the current Dataset
            </li>
            <li>
              There are {unmappedAuthorites ? unmappedAuthorites.length : 0 }
              &nbsp; unmapped authorites
            </li>
            <li>
              The Following Overides are definded which may affect tax
              calculations
              <ul>
              {overrides.map(item => (
               <li> <a href={item.link}> {item.label} </a></li>   
              )

              )}
              </ul>
            </li>
          </ul>
        </Col>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    taxCodes: state.data.taxCodes,
    unmappedAuthorites: state.data.unmappedAuthorites,
    overrides: state.data.overrides
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SystemSummary);
