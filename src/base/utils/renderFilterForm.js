import React from "react";
// import CustomPaymentsForm from "../../app/components/CustomPaymentsForm";
import ExperienceRatesFilterForm from "../../app/components/FilterForms/ExperienceRatesFilterForm";//CustomTaxCodesForm";

const renderForm = (pgid, close, renderGrid) => {
  let form;
//   const formProps = {close, change, permissions, deleteRow}

  switch (pgid) {
    case "experienceRates":
      form = <ExperienceRatesFilterForm close={close} renderGrid={renderGrid}/>;
      break;
    // case "customTaxCodes":
    //   form = <CustomTaxCodesForm formProps={formProps} />;
    //   break;

    // Add additoal cases for other forms here
    default:
      break;
  }
  return form;
};

export default renderForm;