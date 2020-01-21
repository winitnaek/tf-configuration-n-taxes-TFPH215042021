import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class TFHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                TF Home
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TFHome);