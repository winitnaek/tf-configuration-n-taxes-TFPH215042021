import React, { Component } from "react";
import { connect } from "react-redux";
import { link, rowStyle, selectStyle } from "../../css/sidebar-css";
import { Row, FormGroup, Col, UncontrolledTooltip } from "reactstrap";
import Select, { components } from "react-select";

class Search extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleRender = this.handleRender.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleRender(data) {
    renderTFApplication("pageContainer", data);
  }

  onChange(currentSelected) {
    this.setState({
      currentSelected
    });
  }

  render() {
    const Option = props => {
      const { data } = props;
      return (
        <Row key={data} style={rowStyle}>
          <Col className="p-0">
            <div className="mylink" style={link}>
              <span id={`jumpto-${data.value}`} onClick={e => this.handleRender(data)}>
                {data.label}
              </span>
              <UncontrolledTooltip placement="bottom" target={`jumpto-${data.value}`}>
                Jump to {data.label}
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      );
    };

    return (
      <FormGroup style={{zIndex:999, position:'relative'}}>
        <Select
          singleValue
          isSearchable
          placeholder="Search Links"
          options={this.props.options}
          onChange={this.onChange}
          value={this.state.currentSelected}
          style={selectStyle}
          components={{ Option }}
        />
      </FormGroup>
    );
  }
}

function mapStateToProps(state) {
  return {
    options: state.moduleAreas.areas
  };
}
export default connect(mapStateToProps, null)(Search);
