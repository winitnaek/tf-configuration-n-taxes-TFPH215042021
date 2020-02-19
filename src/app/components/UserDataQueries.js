import React from 'react';
import {Col,Row } from 'reactstrap';
class UserDataQueries extends React.Component {
  constructor(props) {
    super(props);
    console.log('metadata>>>>');
    console.log(this.props.metadata);
    this.state = {
      value: '',
    };
}
  render() {
    return (
       <Row>
      <Col>
        <h3>All BSI Plans</h3> 
      </Col>
      <Col >
        <h3>V3 Polulated States</h3> 
      </Col>
    </Row>
    );
  }
}
export default UserDataQueries;