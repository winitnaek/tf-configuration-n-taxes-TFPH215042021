import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Sidebar from "./Sidebar";
import { Row, Col, Container, Button, Modal } from "reactstrap";
import DisplayLinks from "../components/DisplayLinks";
import Grid from "../components/JqxGridModal";
import { PortalWithState } from "react-portal";
import ModalGrid from "./Modal";
import Landing from './Landing';

const handleRender = () => {
  console.log(`I have been clicked`)
  ReactDOM.render(
    <h1> This is a test </h1>,
    document.getElementById('pageContainer')
  )
}

class TFHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payeeDetails: null,
      isOpen: false,
      linksdata: {
        title: "",
        links: []
      }
    };
    this.showModal = e => {
      console.log("Trying to open modal");
      this.setState({
        isOpen: true
      });
    };

   
    

  }

  componentDidMount() {
    console.log(this.props);

    this.setState({
      payeeDetails: this.props.data.payeeDetails,
      linksdata: this.props.data.linksdata
    });
  }

  handleClose() {
    console.log("You tried to close modal");
    // this.setState({
    //   isOpen: false
    // });
  }
  


  handleModalOpen() {
    console.log("Trying to open Modal");
    this.setState({
      isOpen: true
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.data.linksdata !== this.state.linksdata) {
      console.log("Setting the state");
      this.setState({
        linksdata: nextProps.data.linksdata
      });
    }

    if (nextState.isOpen !== this.state.isOpen) {
      console.log("A change is occuring");
      this.setState({ isOpen: true });
    }
  }

  render() {
    console.log(this.props);

   
  
    let isOpen = false;

    const toggelModal = () => {
      console.log("you just tried to open Modal");
      isOpen = !isOpen;
      console.log(isOpen);
    };

    console.log(this.state.isOpen);
    return (
      <div style={{marginTop: 0}}>
         <Sidebar
          options={this.props.data.sidebar.options}
          favorites={this.props.data.sidebar.favorites}
        />
        <Container id="pageContainer">
        <ModalGrid data={this.props.data.payeeDetails} />
     
        {/* <Col>
          <Row>
            <h1 style={{ margin: "0 auto" }}>
              Welcome to Tax Factory Home Page
            </h1>
          </Row>
          <Row></Row>
          <Row>
            <DisplayLinks
              title={this.props.data.linksdata.title}
              links={this.props.data.linksdata.links}
            />
            {this.state.linksData}
          </Row>
        </Col>  */}
        <Col style={{marginTop: 0}}> <Landing/> </Col>
      </Container>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.data
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(TFHome);



