import React from "react";
import CustomPaymentsForm from "../../app/components/CustomPaymentsForm";
import CustomTaxCodesForm from "../../app/components/CustomTaxCodesForm";

const renderForm = (toggle, change, pgid, permissions, deleteRow) => {
  let form;
  switch (pgid) {
    case "customPayments":
      form = <CustomPaymentsForm close={toggle} change={change} permissions={permissions} deleteRow={deleteRow} />;
      break;
    case "customTaxCodes":
      form = <CustomTaxCodesForm close={toggle} change={change} permissions={permissions} deleteRow={deleteRow}/>;
      break;
    // Add additoal cases for other forms here
    default:
      break;
  }
  return form;
};

export default renderForm;
