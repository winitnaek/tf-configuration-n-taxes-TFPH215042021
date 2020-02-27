import React from "react";

const getFormFields = pgid => {
  let fields = {};

  switch (pgid) {
    case "customPayments":
      fields = {
        customPaymentCode: " ",
        customPaymentName: " ",
        paymentType: "Custom Earnings",
        taxability: "Non-Taxable",
        eeMax: ""
      };
      break;
    case "customTaxCodes":
      fields = {
        customTaxCode: "",
        customTaxName: ""
      };
      break;
    default:
      break;
  }

  return fields;
};
export default getFormFields;
