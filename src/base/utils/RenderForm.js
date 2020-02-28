import React from "react";
import CustomPaymentsForm from "../../app/components/CustomPaymentsForm";
import CustomTaxCodesForm from "../../app/components/CustomTaxCodesForm";

const renderForm = (close, change, pgid, permissions, deleteRow) => {
  let form;
  const formProps = {close, change, permissions, deleteRow}

  switch (pgid) {
    case "customPayments":
      form = <CustomPaymentsForm formProps={formProps} />;
      break;
    case "customTaxCodes":
      form = <CustomTaxCodesForm formProps={formProps} />;
      break;
    // Add additoal cases for other forms here
    default:
      break;
  }
  return form;
};

export default renderForm;
