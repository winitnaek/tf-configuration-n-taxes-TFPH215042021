export const fielddatamap = [
  {
    id: "customTaxCode",
    name: "customTaxCode",
    placeholder: "Enter Custom Tax Code",
    fieldtype: "text",
    label: "Custom Tax Code",
    initialvalue: "",
    errmsg: "Custom Tax Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "string",
      subtype: [
        { type: "uppercase", message: "Tax Code needs to be in uppercase." }
      ],
      constraint: [
        { type: "min", input: 1, message: "min 1 characters" },
        { type: "max", input: 25, message: "max 10 characters" },
        { type: "matches", input: "/(hi|bye)/", message: "Invalid Pattern" }
      ]
    }
  },
  {
    id: "formulaNumber",
    name: "formulaNumber",
    placeholder: "Enter Formula Number",
    fieldtype: "text",
    label: "Formula Number",
    initialvalue: "",
    errmsg: "Formula Number is required",
    fieldlength: {
      minlength: 1,
      maxlength: 3
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "number",
      subtype: [
        { type: "positive", message: "Invalid Formula No." },
        { type: "integer", message: "Invalid Formula No.snip" }
      ],
      constraint: [
        { type: "min", input: 0, message: "Formula can not be < 0" },
        { type: "max", input: 100, message: "Formula can not be > 100" }
      ]
    }
  },
  {
    id: "taxCodeAutoCompl",
    name: "taxCodeAutoCompl",
    placeholder: "Select Tax Code",
    fieldtype: "select",
    label: "Tax Code",
    initialvalue: "",
    errmsg: "Tax Code is required",
    fieldlength: {},
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: true
    }
  },
  {
    id: "taxTypeAutocomplete",
    name: "taxTypeAutocomplete",
    placeholder: "Select Tax Type",
    fieldtype: "select",
    label: "Tax Type",
    initialvalue: "",
    errmsg: "Tax Type is required",
    fieldlength: {},
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        { value: "TaxType1", label: "Withholding" },
        { value: "TaxType2", label: "Income Tax" },
        { value: "TaxType3", label: "Payroll Tax" }
      ],
      multiselect: false
    },
    validation: {
      required: true
    }
  },
  {
    id: "companyCodeAutoCompl",
    name: "companyCodeAutoCompl",
    placeholder: "Select Company",
    fieldtype: "select",
    label: "Company Code",
    initialvalue: "",
    errmsg: "Company Code is required",
    fieldlength: {},
    fieldinfo: {
      typeahead: false,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: true
    }
  },
  {
    id: "riskClassAutoCompl",
    name: "riskClassAutoCompl",
    placeholder: "Select Risk Class",
    fieldtype: "select",
    label: "Risk Class",
    initialvalue: "",
    errmsg: "Risk Class is required",
    fieldlength: {},
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        { value: "Risk1", label: "Risk Class 1" },
        { value: "Risk1", label: "Risk Class 2" },
        { value: "Risk1", label: "Risk Class 3" }
      ],
      multiselect: false
    },
    validation: {
      required: true
    }
  },
  {
    id: "localCourtesyWithholding",
    name: "localCourtesyWithholding",
    placeholder: "",
    fieldtype: "check",
    label: "Local Courtesy Withholding",
    initialvalue: flase,
    errmsg: "Local Courtesy Withholding is required",
    fieldlength: {
      options: [
        { value: "checkVal", label: "CheckLabel" }
      ]
    },
    fieldinfo: {},
    validation: {
      required: true
    }
  },
  {
    id: "themeChoices",
    name: "themeChoices",
    placeholder: "",
    fieldtype: "checklist",
    label: "",
    initialvalue: flase,
    errmsg: "Select at least one theme.",
    fieldlength: {},
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        { value: "theme1", label: "White On Black" },
        { value: "theme2", label: "Black On White" },
        { value: "theme3", label: "High Constrast" }
      ],
      multiselect: false
    },
    validation: {
      required: true
    }
  },
  {
    id: "selectDataset",
    name: "selectDataset",
    placeholder: "",
    fieldtype: "radio",
    label: "Restore Dataset",
    initialvalue: flase,
    errmsg: "Select Dataset for restore",
    fieldlength: {},
    fieldinfo: {
      options: [
        { value: "radioVal", label: "radioLabel" }
      ]
    },
    validation: {
      required: true,
      type: "boolean"
    }
  },
  {
    id: "selectDatasetOptions",
    name: "selectDatasetOptions",
    placeholder: "",
    fieldtype: "radiolist",
    label: "Restore Dataset",
    initialvalue: flase,
    errmsg: "Select At lest one Dataset to restore",
    fieldlength: {},
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        { value: "Pay1", label: "Online" },
        { value: "Pay2", label: "Wire Transfer" },
        { value: "Pay3", label: "Bank Check" }
      ],
      multiselect: false
    },
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    id: "selectDatasetOptionsNo",
    name: "selectDatasetOptionsNo",
    placeholder: "",
    fieldtype: "radiolist",
    label: "Restore Dataset",
    initialvalue: flase,
    errmsg: "Select At lest one Dataset to restore",
    fieldlength: {},
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        { value: 1, label: "Online" },
        { value: 2, label: "Wire Transfer" },
        { value: 3, label: "Bank Check" }
      ],
      multiselect: false
    },
    validation: {
      required: true,
      type: "number"
    }
  },
  {
    id: "endDate",
    name: "endDate",
    placeholder: "",
    fieldtype: "date",
    label: "Restore Dataset",
    initialvalue: "12/31/9999",
    errmsg: "Select At lest one Dataset to restore",
    fieldlength: {},
    fieldinfo: {},
    validation: {
      required: true,
      type: "date",
      constraint: [
        {
          type: "min",
          input: new Date(),
          message: "Can not be less than today"
        },
        {
          type: "max",
          input: "12/31/9999",
          message: "Can not be greater than 12/31/9999"
        }
      ]
    }
  }
];
