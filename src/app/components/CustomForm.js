import React, { Component } from "react";
import { tftools } from "../../base/constants/TFTools";
import * as metadata from "../metadata/metaData";
import {connect} from 'react-redux';
import {getRecentUsage} from "../actions/usageActions";
import { bindActionCreators } from "redux";

import { setFilterFormData } from "../actions/filterFormActions";
import gridDataApi from "../api/griddataAPI";
import savegriddataApi from "../api/savegriddataAPI";
import deleteGridDataApi from "../api/deletegriddataAPI";

import * as fieldData from "../metadata/fieldData";
import DynamicForm from "../../../library/src/dynamicForm";

class CustomForm extends Component {
  render() {
    const {getRecentUsage} = this.props;
    return(
        <DynamicForm
          formProps={this.props.formProps}
          tftools={tftools}
          metadata={metadata}
          fieldData={fieldData}
          recentUsage={getRecentUsage}
        />
    )
  }
}


const mapDispatchToProps = dispatch => {
      return bindActionCreators({getRecentUsage}, dispatch);
}

export default connect(null, mapDispatchToProps)(CustomForm);
