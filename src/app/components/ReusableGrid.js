import React, { Component, Fragment } from "react";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid";
import { Container, Col, Row, Button, UncontrolledTooltip } from "reactstrap";
import Styles from "./reusableGrid.css";

const handleSelect = () => {
  console.log("Hello");
};

class ReusableGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  


  }
  render() {
    console.log(this.props.width);
    let width;
    if (this.props.width) {
      width = this.props.width;
    }

    return (
     <Fragment>
        <Row>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "1.5em"
            }}
          >
            {this.props.data.pgdef.pgtitle}
            
          </h1>
          <span style={{marginLeft: "10px"}}
               >
                <span id="help">
                  <a href="" onClick="">
                    <i className="fas fa-question-circle  fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="help">
                  <span> Click Here for more  </span>
                </UncontrolledTooltip>
              </span>
          {/* <span>
          <span  id="help" style={{ marginLeft: "25px" }}>
              <a href="#">
                <i   className="fas fa-question-circle" />
              </a>
            </span>
            <UncontrolledTooltip placement="right" target="help">
              <span> Help </span>
            </UncontrolledTooltip>
            </span> */}
        </Row>
        <Row>
          <p> {this.props.data.pgdef.addNewLabel} </p>
        </Row>
         
       
        {/* <Row style={{ marginTop: "20px" }}>
        <Col sm="11">
         </Col>
         <Col sm="1">
            {this.props.data.pgdef.hasAddNew && (
               <span style={{marginLeft: "45px"}}>
                <span id="addNew">
                  <a href="" onClick="">
                    <i className="fas fa-calendar-plus  fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="addNew">
                  <span> Add New </span>
                </UncontrolledTooltip>
              </span>
            )}
          
         
            {this.props.data.pgdef.actiondel && (
              <span style={{marginLeft: "9px"}}>
                <span id="delAll">
                  <a href="" onClick="">
                    <i className="fas fa-calendar-minus fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="delAll">
                  <span> Delete All </span>
                </UncontrolledTooltip>
              </span>
            )}
       </Col>
        </Row> */}
       
        <Row style={{marginTop: "10px"}}>

        <Col sm="11">
         </Col>
         <Col sm="1" style={{paddingRight: 0}}>
            {this.props.data.pgdef.hasAddNew && (
               <span style={{marginLeft: "10px"}}
               >
                <span id="addNew">
                  <a href="" onClick="">
                    <i className="fas fa-calendar-plus  fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="addNew">
                  <span> Add New </span>
                </UncontrolledTooltip>
              </span>
            )}
          
         
            {this.props.data.pgdef.actiondel && (
              <span style={{marginLeft: "5px"}}>
                <span id="delAll">
                  <a href="" onClick="">
                    <i className="fas fa-calendar-minus fa-2x" />
                  </a>
                </span>
                <UncontrolledTooltip placement="right" target="delAll">
                  <span> Delete All </span>
                </UncontrolledTooltip>
              </span>
            )}
       </Col>
            <Grid
              altrows={true}
              ref={this.props.ref}
              width="100%"
              source={this.props.source}
              columns={this.props.columns}
              pageable={true}
              autoheight={true}
              onRowSelect={this.onRowSelect}
              style={{ color: "black", marginTop: "10px" }}
            />
        </Row>
        <Row style={{ marginTop: "50px" }}>
          {/* <Button
            color="primary"
            style={{ margin: "0 auto", padding: "5px", width: "75px" }}
            onClick={e=> props.exit()}
          >
            Exit
          </Button> */}
        </Row>
        </Fragment>
    
    );
  }
}

export default ReusableGrid;
