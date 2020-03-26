import React from "react";
// import CustomPaymentsForm from "../../app/components/CustomPaymentsForm";
import ExperienceRatesFilterForm from "../../app/filterforms/ExperienceRates";
import CustomForm from "../../app/components/CustomForm";
import SupplementalMethodsFilterForm from "../../app/filterforms/SupplementalMethods" //components/FilterForms/SupplementalMethodsFilterForm"

const renderFilterForm = (close, change, pgid,  deleteRow, view,  renderGrid) => {
  let form;  
  // const formProps = {close,  permissions, deleteRow}
  const formProps = {close, change, pgid,  deleteRow, view,  renderGrid}
  switch (pgid) {
    case "experienceRates":
      form =   form = <CustomForm formProps={formProps}  filter={true} />;         //   <ExperienceRatesFilterForm close={close} renderGrid={renderGrid}/>;
      break;
    case "supplementalMethods":
      form = <SupplementalMethodsFilterForm close={close} renderGrid={renderGrid} />
    // Add additoal cases for other forms here
    default:
      break; 
  }
  return form;
};

export default renderFilterForm;