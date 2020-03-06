import React from "react";
// import CustomPaymentsForm from "../../app/components/CustomPaymentsForm";
import ExperienceRatesFilterForm from "../../app/filterforms/ExperienceRates";
import SupplementalMethodsFilterForm from "../../app/filterforms/SupplementalMethods" //components/FilterForms/SupplementalMethodsFilterForm"

const renderForm = (pgid, close, renderGrid) => {
  let form;
//   const formProps = {close, change, permissions, deleteRow}

  switch (pgid) {
    case "experienceRates":
      form = <ExperienceRatesFilterForm close={close} renderGrid={renderGrid}/>;
      break;
    case "supplementalMethods":
      form = <SupplementalMethodsFilterForm close={close} renderGrid={renderGrid} />
    // Add additoal cases for other forms here
    default:
      break;
  }
  return form;
};

export default renderForm;