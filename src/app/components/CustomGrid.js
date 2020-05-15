import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tftools } from "../../base/constants/TFTools";
import { ReusableGrid } from "bsiuilib";
import { setFilterFormData } from "../actions/filterFormActions";
import { setFormData } from "../actions/formActions";
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

    this.filterFormAction = (formData) => {
      console.log('Setting filterForm Data')
      const mode = "Edit"
      const index = null
      const data = {data: this.props.formFilterData , mode, index}
      console.log(this.props.formFilterData)
    //  this.props.setFormData(data)    //  This is needed for subsequent edits to get form data
      this.props.setFilterFormData(formData);  // This is used to make the api call to render the grid
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
      formFilterData,
      fieldData,
      formMetaData
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
        formFilterData={formFilterData}
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
    formFilterData: state.formFilterData
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { getRecentUsage, setFilterFormData, setFormData },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomGrid);
