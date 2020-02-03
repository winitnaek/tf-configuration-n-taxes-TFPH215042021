import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Row, Col, Container, Button, Modal } from "reactstrap";
import SystemSummary from "./SystemSummary";
import PayrollAndEmployeeTestMessages from "../userdataqueries/PayrollAndEmployeeTestMessages";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    

    this.setState({});
  }

  render() {
    const {
      taxCodes,
      unmappedAuthorites,
      overrides,
      testMessages
    } = this.props;

    return (
      <Container style={{ marginTop: "-50px" }}>
        <Col>
          <Row>
            <p sytle={{ fontSize: "24px" }}>
              <strong> Welcome! </strong>
            </p>
          </Row>

          <Row style={{ marginTop: "25px" }}>
            <SystemSummary />
          </Row>

          <Row>
            <PayrollAndEmployeeTestMessages />
          </Row>
        </Col>
      </Container>
    );
  }
}

// function connectWithStore(store, WrappedComponent, ...args) {
//   var ConnectedWrappedComponent = connect(...args)(WrappedComponent)
//   return function (props) {
//     return <ConnectedWrappedComponent {...props} store={store} />
//   }
// }

function mapStateToProps(state) {
  return {
    taxCodes: state.data.taxCodes,
    unmappedAuthorites: state.data.unmappedAuthorites,
    overrides: state.data.overrides,
    testMessages: state.data.testMessages
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
