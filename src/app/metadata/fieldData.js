export const fielddatamap = [
  {
    id: "customTaxCode",
    name: "customTaxCode",
    placeholder: "Enter Custom Tax Code",
    type: "text",
    label: "Custom Tax Code",
    initialvalue: "",
    required: true,
    errmsg: "Custom Tax Code is required",
    minlength: 1,
    maxlength: 25,
    datatype: ["AN"], //["N","S","AN","ARR","B","D"],
    validatefor: "" //["email", "url"]
  },
  {
    id: "customTaxName",
    name: "customTaxName",
    placeholder: "Enter Custom Tax Name",
    type: "text",
    label: "Custom Tax Name",
    initialvalue: "",
    required: true,
    errmsg: "Custom Tax Name is required",
    minlength: 1,
    maxlength: 25,
    datatype: ["AN"],
    validatefor: "" //["email", "url"]
  },
  {
    id: "taxCodeAutoCompl",
    name: "taxCodeAutoCompl",
    placeholder: "Select Tax Code",
    type: "select",
    label: "Tax Code",
    initialvalue: "",
    required: true,
    errmsg: "Tax Code is required",
    options: "",
    autocomplete: true,
    isasync: true,
    multiselect: false
  },
  {
    id: "taxCodeAutoCompl",
    name: "taxCodeAutoCompl",
    placeholder: "Select Tax Code",
    type: "select",
    label: "Tax Type",
    initialvalue: "",
    required: true,
    errmsg: "Tax Code is required",
    options: "",
    autocomplete: true,
    isasync: true,
    multiselect: false
  },
  {
    id: "formulaNumber",
    name: "formulaNumber",
    placeholder: "",
    type: "text",
    label: "Formula Number",
    initialvalue: "",
    required: true,
    errmsg: "Invalid Formula Number. Defaulting to 0.",
    minlength: 0,
    maxlength: 3,
    datatype: ["N"],
    validatefor: "" //["email", "url"]
  }
];