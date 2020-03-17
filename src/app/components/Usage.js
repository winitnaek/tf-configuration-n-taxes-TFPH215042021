import React, { Component } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {Col, Collapse, Button} from "reactstrap";
import {closeForm} from "../actions/formActions";
import { tftools } from "../../base/constants/TFTools";
import {getRecentUsage} from "../actions/usageActions";

class Usage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
        this.toggle = this.toggle.bind(this);
      }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    componentDidMount() {
            this.props.getRecentUsage(this.props.pgid)
    }

    handleLink(data) {
        renderTFApplication("pageContainer", data);
        this.props.closeForm();
    }

    render() {
        const {recentUsage} = this.props;
        const {isOpen} = this.state;
        return (
        <Col>
        {recentUsage && (
            <div>
            <Button color="link" onClick={this.toggle} style={{marginTop: 8, paddingLeft: 0}}>Recent Usage</Button>
            <Collapse isOpen={isOpen}>
                    <div>
                        <strong>Usage:</strong> 
                        <div>
                            <span>This company is being used in the following contexts: </span>
                            <ul>
                                {recentUsage.map((item,key) => {
                                    for (let x in tftools) {
                                        if (tftools[x].id == item) {
                                            return (  
                                                <li>
                                                    <a href="#" onClick={() => this.handleLink(tftools[x])}>{tftools[x].label}</a>
                                                </li>
                                            )
                                        }
                                    } 
                                })}
                            </ul>
                        </div>
                    </div>
            </Collapse>
            </div>
        )}
        </Col>
        )
    }
}

const mapStateToProps = state => {
    return {
      recentUsage: state.usage.recentUsage
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({closeForm, getRecentUsage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Usage);
