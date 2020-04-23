import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tftools } from "../../base/constants/TFTools";
import { ReusableGrid } from "bsiuilib";
import { setFilterFormData } from "../actions/filterFormActions";
import { setFormData } from "../actions/formActions";
import * as fieldData from "../metadata/fieldData";
import * as formMetaData from "../metadata/metaData";
import { getRecentUsage } from "../actions/usageActions";
import savegriddataAPI from "../api/savegriddataAPI";
import deletegriddataAPI from "../api/deletegriddataAPI";
import autocompleteSelectAPI from "../api/autocompleteselectAPI";
import * as gridStyles from "../../base/constants/AppConstants";

class CustomGrid extends Component {
  constructor(props) {
    super(props);

    this.renderGrid = (pgData) => {
      renderTFApplication("pageContainer", pgData);
    };

    this.formAction = (data) => {
      console.log(data)
      console.log("you made it back to customGrid");
      this.props.setFormData(data);
    };

    this.filterFormAction = (data) => {
      this.props.setFilterFormData(data);
    };

  }

  render() {
    const {
      pageid,
      metadata,
      pid,
      permissions,
      griddata,
      help,
      gridProps,
      formData,
      getRecentUsage,
    } = this.props;

   
const {formAction, filterFormAction} = this
    

    return (
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
        setFormData={formAction}
        deleteGridData={deletegriddataAPI}
        recentUsage={getRecentUsage}
        renderGrid={this.renderGrid}
        formMetaData={formMetaData}
        formData={formData}
        fieldData={fieldData}
        autoComplete={autocompleteSelectAPI}
        styles={gridStyles}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    formData: state.formData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getRecentUsage, setFilterFormData, setFormData },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomGrid);
