import React from 'react';
import {Col } from 'reactstrap';

class UserDataQueriesPg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  

}
  render() {
    return (
      <Col >
        <h1>Address Overrides </h1>
        
        <p>{this.state.value}</p>
      </Col>
    );
  }
}

export default UserDataQueriesPg;