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
import {DynamicForm} from "../../../library/src/index";

class CustomForm extends Component {
  render() {
    const {getRecentUsage, formProps, formData} = this.props;
    return(
        <DynamicForm
          formData={formData}
          formProps={formProps}
          tftools={tftools}
          metadata={metadata}
          fieldData={fieldData}
          recentUsage={getRecentUsage}
        />
    )
  }
}

function mapStateToProps(state) {
  return {
    formData: state.formData,
  };
}

const mapDispatchToProps = dispatch => {
      return bindActionCreators({getRecentUsage}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomForm);
