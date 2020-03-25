import React from "react";
import CustomForm from "../../app/poc/CustomForm";
import WorksiteCompaniesForm from "../../app/components/WorksiteCompaniesForm";
//import CustomTaxFormulasForm from "../../app/components/CustomTaxFormulasForm";

const renderForm = (close, change, pgid, permissions, deleteRow) => {
  let form;
  const formProps = {close, change, permissions, deleteRow, pgid}
  console.log(pgid)
  switch (pgid) {
    case "customPayments":
    case "customTaxCodes":
    case "experianceRates":
    case "worksites":
    case "worksiteCompanies":
    case "customFormulas":
      form = <CustomForm formProps={formProps} />;
      break;
    default:
    ""
      break;
  }
  console.log(form)
  return  form;
};


export default renderForm;
