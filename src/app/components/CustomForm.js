import React, { Component } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { tftools } from "../../base/constants/TFTools";
import * as metadata from "../metadata/metaData";
import * as fieldData from "../metadata/fieldData";
import {DynamicForm} from "../../../library/src/index";
import {getRecentUsage} from "../actions/usageActions";
import autocompleteSelectAPI from "../api/autocompleteselectAPI";

import savegriddataAPI from "../api/savegriddataAPI";
import { setFilterFormData } from "../actions/filterFormActions";
import gridDataAPI from "../api/griddataAPI";
import deleteGridDataAPI from "../api/deletegriddataAPI";

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
          autoComplete={autocompleteSelectAPI}
          saveGridData={savegriddataAPI}
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
