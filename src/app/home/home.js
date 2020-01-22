import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Sidebar from "../components/Sidebar";
import { Row, Col, Container } from "reactstrap";
import DisplayLinks from '../components/DisplayLinks';



const links = [
  {link: '', label: "Optional Rate Overrides"},
  {link: '', label: "Unemployment Overrides"},
  {link: '', label: "What-if Test"},
  {link: '', label: "Worksites"},

]

const linksTitle = "Related Activity Links:"


class TFHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Container>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <Row>
              <h1 style={{margin: '0 auto'}}> Welcome to Tax Factory Home Page </h1>
         
            </Row>
            <Row>
                <DisplayLinks title={linksTitle} links={links} />
            </Row>
          </Col>
        </Container>
        )
    }

}
function mapStateToProps(state) {
  console.log(state)
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TFHome);