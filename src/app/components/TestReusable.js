import React from 'react';
import {Col } from 'reactstrap';
class TestReusable extends React.Component {
  constructor(props) {
    super(props);
    console.log('metadata>>>>');
    let metadata = this.props.metadata(this.props.pageid)
    console.log(metadata);
    console.log('metadata>>>>');
    this.state = {
      value: '',
      pgdef:metadata.pgdef,
      griddef:metadata.griddef,
      cruddef:metadata.cruddef,
    };
}
  render() {
    return (
      <Col >
        <h1>TestReusable {this.state.pgdef.pgtitle}</h1> 
      </Col>
    );
  }
}
export default TestReusable;