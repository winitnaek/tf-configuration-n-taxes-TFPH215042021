import React, { Component } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {Col} from "reactstrap";
import {closeForm} from "../actions/formActions";
import { tftools } from "../../base/constants/TFTools";
import {getRecentUsage} from "../actions/usageActions";

class Usage extends Component {
    componentDidMount() {
        this.props.getRecentUsage(this.props.pgid)
    }

    handleLink(data) {
        renderTFApplication("pageContainer", data);
        this.props.closeForm();
    }

    render() {
        const {recentUsage} = this.props;
        return (
        <Col>
            {recentUsage && (
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
