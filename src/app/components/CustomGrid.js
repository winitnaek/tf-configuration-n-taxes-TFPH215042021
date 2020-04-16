import React, { Component } from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { tftools } from "../../base/constants/TFTools";
import {ReusableGrid} from "bsiuilib";
import  setFilterFormData  from "../actions/filterFormActions";
import savegriddataAPI from "../api/savegriddataAPI";
import * as fieldData from "../metadata/fieldData";
import * as formMetaData from "../metadata/metaData";
import gridDataAPI from "../api/griddataAPI";
import deletegriddataAPI from "../api/deletegriddataAPI";
import {getRecentUsage} from "../actions/usageActions";

import * as gridStyles from "../../base/constants/AppConstants";
import autocompleteSelectAPI from "../api/autocompleteselectAPI";

class CustomGrid extends Component {
  render() {
    const {pageid, metadata, pid, permissions, griddata, help, gridProps, formData, getRecentUsage} = this.props;
    const {dispatch } = gridProps;
    const filterFormAction = data => {
      dispatch(setFilterFormData(data))
    }
    return(
        <ReusableGrid
            pageid={pageid}
            metadata={metadata}
            pid={pid}
            permissions={permissions}
            griddata={griddata}
            help={help}
            gridProps={gridProps}
            tftools={tftools}
            saveGridData={savegriddataAPI}
            setFilterFormData={filterFormAction}
            deleteGridData={deletegriddataAPI}
            recentUsage={getRecentUsage}
            formMetaData={formMetaData}
            formData={formData}
            fieldData={fieldData}
            autoComplete={autocompleteSelectAPI}
            styles={gridStyles}
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomGrid);

