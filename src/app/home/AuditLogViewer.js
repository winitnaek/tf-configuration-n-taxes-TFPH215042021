import React from 'react';
import {Col } from 'reactstrap';


class AuditLogViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  

}
  render() {
    return (
      <Col >
        <h1>AuditLogViewer </h1> 
      </Col>
    );
  }
}

export default AuditLogViewer;