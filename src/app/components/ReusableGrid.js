import React, {Component} from "react";
import Grid from "../../deps/jqwidgets-react/react_jqxgrid";
import { Container, Col, Row, Button } from "reactstrap";




const handleSelect = () => {
   console.log("Hello")
}





class ReusableGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    this.onRowSelect = () => {
      console.log('Row selected')
    }
  }
  render() {
    
    return (
      <Container style={{width: "99%"}}>
        <Row>
          <h1
            style={{
              color: "#599153",
              fontWeight: "bold",
              fontSize: "1.5em",
            }}
          >
            {this.props.data.pgdef.pgtitle}
          </h1>
        </Row>
        <Row>
          <p> {this.props.data.pgdef.addNewLabel} </p>
         

        </Row>
        <Row style={{ marginTop: "50px" }}>
          <Grid
           ref={this.props.ref}
            width="100%"
            source={this.props.source}
            columns={this.props.columns}
            pageable={true}
            autoheight={true}
            onRowSelect={this.onRowSelect}
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
}

export default ReusableGrid;
