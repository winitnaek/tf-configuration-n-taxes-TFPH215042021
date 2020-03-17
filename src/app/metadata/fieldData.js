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
    validationtype: "string",
    validationsubtype: [
      { type: "min", params: [1, "min 1 characters"] },
      { type: "max", params: [25, "max 10 characters"] },
      { type: "matches", params: ["/(hi|bye)/", "Invalid Pattern"] }
    ],
    constraint: [
      { type: "uppercase", message: "Tax Code needs to be in uppercase." }
    ]
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
    validationtype: "number",
    validationsubtype: [
      { type: "min", params: [0, "Formula can not be < than 0"] },
      { type: "max", params: [100, "Formula can not be > than 100"] },
      { type: "matches", params: ["/(hi|bye)/", "Invalid Pattern"] }
    ],
    constraint: [
      { type: "positive", message: "Invalid Formula No." },
      { type: "integer", message: "Invalid Formula No.snip" }
    ]
  }
];