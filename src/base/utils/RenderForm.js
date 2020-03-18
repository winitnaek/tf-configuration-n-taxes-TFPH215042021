import React from "react";
import CustomPaymentsForm from "../../app/components/CustomPaymentsForm";
import CustomTaxCodesForm from "../../app/components/CustomTaxCodesForm";
import WorksiteCompaniesForm from "../../app/components/WorksiteCompaniesForm"

const renderForm = (close, change, pgid, permissions, deleteRow) => {
  let form;
  const formProps = {close, change, permissions, deleteRow, pgid}
  console.log(pgid)
  switch (pgid) {
    case "customPayments":
      form = <CustomPaymentsForm formProps={formProps} />;
      break;
    case "customTaxCodes":
      form = <CustomTaxCodesForm formProps={formProps} />;
      break;
    case "experianceRates":
      form = "";
      break;
      case "worksites":
      console.log('found it')
      form = <WorksiteCompaniesForm  formProps={formProps} />
      break;
    case "worksiteCompanies":
      console.log('found it')
      form = <WorksiteCompaniesForm formProps={formProps} />
      break;
    // Add additoal cases for other forms here
    default:
    ""
      break;
  }
  console.log(form)
  return  form;
};

export default renderForm;
