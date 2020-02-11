import React, {Component} from "react";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid";
import { Container, Col, Row, Button } from "reactstrap";




const handleSelect = () => {
   console.log("Hello")
}

const ReusableGrid = props => {
    return (
      <Container>
        <Row>
          <h1
            style={{
              color: "#599153",
              fontWeight: "bold",
              fontSize: "1.5em",
            }}
          >
            {props.data.pgdef.pgtitle}
          </h1>
        </Row>
        <Row>
          <p> {props.data.pgdef.addNewLabel} </p>
        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Grid
           ref={props.ref}
            width="100%"
            source={props.source}
            columns={props.columns}
            pageable={true}
            autoheight={true}
            onRowClick={props.onRowClick}
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
      </Container>
    );
  }

export default ReusableGrid;
