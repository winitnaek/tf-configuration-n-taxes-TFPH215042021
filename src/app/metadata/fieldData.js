export const selectSamplePage = [
  {
    id: "authorityCode",
    placeholder: "Authority Code",
    fieldtype: "select",
    label: "Authority Code",
    value: "",
    errmsg: "Authority Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "taxType",
    placeholder: "Tax Type",
    fieldtype: "select",
    label: "Tax Type",
    value: "",
    errmsg: "Tax Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "exemptionStatus",
    placeholder: "Exemption Status",
    fieldtype: "select",
    label: "Exemption Status",
    value: "",
    errmsg: "Exemption Status is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        "Common Law",
        "Independent Contractor",
        "FICA/FUTA",
        "FICA",
        "Self-Employed"
      ],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "taxability",
    placeholder: "Select a type",
    fieldtype: "select",
    label: "Taxability",
    value: "",
    errmsg: "PayType is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        "Taxable",
        "Non-Taxable",
        "Limit-YTD",
        "Limit-QTD",
        "Limit-MTD",
        "Taxable/Exclude"
      ],
      multiselect: false
    },
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    id: "payType",
    placeholder: "Select a type",
    fieldtype: "select",
    label: "Type",
    value: "",
    errmsg: "PayType is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["Custom Earnings", "Custom Benefit Plan"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "streetNumberType",
    placeholder: "Select a type",
    fieldtype: "select",
    label: "Street Number Type",
    value: "Numeric",
    errmsg: "Street Number Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["Numeric", "Alphanumeric", "None"]
    },
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    id: "prefixDirection",
    placeholder: "",
    description: "Example: N",
    fieldtype: "select",
    label: "Prefix Direction",
    value: "",
    errmsg: "Prefix Direction is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [".", "N", "S", "E", "W", "NE", "NW", "SE", "SW"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "postDirection",
    placeholder: "",
    description: "Example: N",
    fieldtype: "select",
    label: "Post Direction",
    value: "",
    errmsg: "Post Direction is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [".", "N", "S", "E", "W", "NE", "NW", "SE", "SW"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "streetType",
    placeholder: "",
    description: "Example: Blvd",
    fieldtype: "select",
    label: "Street Type",
    value: "",
    errmsg: "Street Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        ".",
        "ALY",
        "ANX",
        "ARC",
        "AVE",
        "BCH",
        "BG",
        "BGS",
        "BLF",
        "BLFS",
        "BLVD",
        "BND",
        "BR",
        "BRG",
        "BRK",
        "BRKS",
        "BTM",
        "BYP",
        "BYU",
        "CIR",
        "CLB",
        "CLF",
        "CLFS",
        "CMN",
        "CMNS",
        "COR",
        "CORS",
        "CP",
        "CPE",
        "CRES",
        "CRK",
        "CRSE",
        "CRST",
        "CSWY",
        "CT",
        "CTR",
        "CTRS",
        "CTS",
        "CURV",
        "CV",
        "CVS",
        "CYN",
        "DL",
        "DM",
        "DR",
        "DRS",
        "DV",
        "EST",
        "ESTS",
        "EXPY",
        "EXT",
        "EXTS",
        "FALL",
        "FLD",
        "FLDS",
        "FLS",
        "FLT",
        "FLTS",
        "FRD",
        "FRDS",
        "FRG",
        "FRGS",
        "FRK",
        "FRKS",
        "FRST",
        "FRY",
        "FT",
        "FWY",
        "GDN",
        "GDNS",
        "GLN",
        "GLNS",
        "GRN",
        "GRNS",
        "GRV",
        "GRVS",
        "GTWY",
        "HBR",
        "HBRS",
        "HL",
        "HLS",
        "HOLW",
        "HTS",
        "HVN",
        "HWY",
        "INLT",
        "IS",
        "ISLE",
        "ISS",
        "JCT",
        "JCTS",
        "KNL",
        "KNLS",
        "KY",
        "KYS",
        "LAND",
        "LCK",
        "LCKS",
        "LDG",
        "LF",
        "LGT",
        "LGTS",
        "LK",
        "LKS",
        "LN",
        "LNDG",
        "LOOP",
        "MALL",
        "MDW",
        "MDWS",
        "MEWS",
        "ML",
        "MLS",
        "MNR",
        "MNRS",
        "MSN",
        "MT",
        "MTN",
        "MTNS",
        "MTWY",
        "NCK",
        "OPAS",
        "ORCH",
        "ORS",
        "OVAL",
        "PARK",
        "PASS",
        "PATH",
        "PIKE",
        "PKWY",
        "PL",
        "PLN",
        "PLNS",
        "PLZ",
        "PNE   ",
        "PNES",
        "PR",
        "PRT",
        "PRTS",
        "PSGE",
        "PT",
        "PTS",
        "RADL",
        "RAMP",
        "RD",
        "RDG",
        "RDGS",
        "RDS",
        "RIV",
        "RNCH",
        "ROW",
        "RPD",
        "RPDS",
        "RST",
        "RTE",
        "RUE",
        "RUN",
        "SHL",
        "SHLS",
        "SHR",
        "SHRS",
        "SKWY",
        "SMT",
        "SPG",
        "SPGS",
        "SPUR",
        "SQ",
        "SQS",
        "ST",
        "STA",
        "STRA",
        "STRM",
        "STS",
        "TER",
        "TPKE",
        "TRAK",
        "TRCE",
        "TRFY",
        "TRL",
        "TRLS",
        "TRWY",
        "TUNL",
        "UN",
        "UNS",
        "UPAS",
        "VIA",
        "VIS",
        "VL",
        "VLG",
        "VLGS",
        "VLY",
        "VLYS",
        "VW",
        "VWS",
        "WALK",
        "WALL",
        "WAY",
        "WAYS",
        "WL",
        "WLS",
        "XING",
        "XRD"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "parity",
    placeholder: "",
    fieldtype: "select",
    label: "Parity",
    value: "",
    errmsg: "Parity is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["BOTH", "ODD", "EVEN"]
    },
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    id: "stateAbbreviation",
    placeholder: "",
    fieldtype: "select",
    label: "State Abbreviation",
    value: "",
    errmsg: "State Abbreviation is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "AL",
        "AR",
        "CA",
        "CO",
        "DE",
        "IN",
        "KY",
        "MD",
        "MI",
        "MO",
        "NJ",
        "NY",
        "OH",
        "OR",
        "PA",
        "TX",
        "WA",
        "WV"
      ]
    },
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    id: "country",
    placeholder: "Select Country",
    fieldtype: "select",
    label: "Country",
    value: "NONE",
    errmsg: "County is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "NONE",
        "001- ADAMS",
        "003- ASOTIN",
        "005- BENTON",
        "007- CHELAN",
        "009- CLALLAM",
        "011- CLARK",
        "013- COLUMBIA",
        "015- COWLITZ",
        "017- DOUGLAS",
        "019- FERRY",
        "021- FRANKLIN",
        "023- GARFIELD",
        "025- GRANT",
        "027- GRAYS HARBOR",
        "029- ISLAND",
        "031- JEFFERSON",
        "033- KING",
        "035- KITSAP",
        "037- KITTITAS",
        "039- KLICKITAT",
        "041- LEWIS",
        "043- LINCOLN",
        "045- MASON",
        "047- OKANOGAN",
        "049- PACIFIC",
        "051- PEND OREILLE",
        "053- PIERCE",
        "055- SAN JUAN",
        "057- SKAGIT",
        "059- SKAMANIA",
        "061- SNOHOMISH",
        "063- SPOKANE",
        "065- STEVENS",
        "067- THURSTON",
        "069- WAHKIAKUM",
        "071- WALLA WALLA",
        "073- WHATCOM",
        "075- WHITMAN",
        "077- YAKIMA"
      ]
    },
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    id: "placeCode",
    placeholder: "Place Code",
    fieldtype: "select",
    label: "Place Code",
    value: "",
    errmsg: "Place Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "schoolDistrict",
    placeholder: "School District",
    fieldtype: "select",
    label: "School District",
    value: "",
    errmsg: "School District is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "group",
    placeholder: "Select Group",
    fieldtype: "select",
    label: "Group",
    value: "NONE",
    errmsg: "Group is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["N/A", "EMPGR00001 - EMPLOYEE GROUP 00001"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "company",
    placeholder: "Select Company",
    fieldtype: "select",
    label: "Company",
    value: "NONE",
    errmsg: "Company is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "N/A",
        "RG999 - RG999 Company",
        "Z001 - company Z001 for cache-testing"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "paymentType",
    placeholder: "Select Payment Type",
    fieldtype: "select",
    label: "Payment Type",
    value: "NONE",
    errmsg: "Payment Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["Regular", "Supplemental", "Cumulative", "Vacation"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "groupUpIndicator",
    placeholder: "Select Gross up Indicator",
    fieldtype: "select",
    label: "Gross up Indicator",
    value: "NONE",
    errmsg: "Gross up Indicator is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - Do Not Perform Gross-Up", "1 - Perform Gross-Up"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "rollOverEligible",
    placeholder: "Select Rollover Eligible",
    fieldtype: "select",
    label: "Rollover Eligible",
    value: "NONE",
    errmsg: "Rollover Eligible is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - Not Eligible", "1 - Eligible"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "companyPlan",
    placeholder: "Select Company Plan",
    fieldtype: "select",
    label: "Company Plan",
    value: "NONE",
    errmsg: "Company Plan is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "garnishment",
    placeholder: "Select Garnishment",
    fieldtype: "select",
    label: "Garnishment",
    value: "NONE",
    errmsg: "Garnishment is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Do not Process Garnishments",
        "1 - Do Garnishments and Tax Calculation",
        "2 - Do Garnishments with Input Calculation"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "garnishmentFormula",
    placeholder: "Select Garnishment",
    fieldtype: "select",
    label: "Garnishment Formula",
    value: "NONE",
    errmsg: "Garnishment is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true
    },
    validation: {
      required: true,

      type: "string"
    }
  },
  {
    id: "customGarnishmentFormula",
    placeholder: "Select Garnishment",
    fieldtype: "select",
    label: "Custom Garnishment Formula",
    value: "NONE",
    errmsg: "Custom Garnishment is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true
    },
    validation: {
      required: true,

      type: "string"
    }
  },
  {
    id: "calculationType",
    placeholder: "Select Calculation Type",
    fieldtype: "select",
    label: "Calculation Type",
    value: "NONE",
    errmsg: "Calculation Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Taxes Only",
        "1 - Wage Assessment And Taxes",
        "2 - Wage Assessment Only",
        "3 - Non Negative Wage And Tax",
        "4 - Non Neg Wage and Zero Tax",
        "5 - Non Negative Tax Calc"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "wagesProcessCode",
    placeholder: "Select Wages Process Code",
    fieldtype: "select",
    label: "Wages Process Code",
    value: "NONE",
    errmsg: "Wages Process Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Assess Earnings And Contributions",
        "1 - Assess Earnings Only",
        "2 - Assess Contributions Only",
        "3 - Do not Assess Earnings or Contributions"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "employeeType",
    placeholder: "Select Employee Type",
    fieldtype: "select",
    label: "Employee Type",
    value: "NONE",
    errmsg: "Employee Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - N/A",
        "1 - PA local House Bill 172 alternate recip",
        "2 - PA (outside PA)",
        "3 - Military Spouse (exempt tax)",
        "4 - Military Spouse (exempt tax/wage)"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "employmentType",
    placeholder: "Select Employment Type",
    fieldtype: "select",
    label: "Employment Type",
    value: "NONE",
    errmsg: "Employment Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Active Regular Employee",
        "1 - Mobile Workforce Employee",
        "2 - Terminated Employee",
        "4 - Deceased Employee in the Private Sector",
        "5 - Deceased Railroad Employee (non ICC-eligible)",
        "6 - Deceased Employee in the Public Sector",
        "7 - Active Railroad Employee (ICC-eligible)",
        "8 - Deceased Railroad Employee (ICC-eligible)"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "calculatedLocalTax",
    placeholder: "Select Calculated Local Tax In",
    fieldtype: "select",
    label: "Calculated Local Tax In",
    value: "NONE",
    errmsg: "Calculated Local Tax In is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Use Data Set Option",
        "1 - Nonresident Tax Record wins tie",
        "2 - Resident Tax Records win tie"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "statutoryEEindicator",
    placeholder: "Select Statutory EE Indicator",
    fieldtype: "select",
    label: "Statutory EE Indicator",
    value: "NONE",
    errmsg: "Statutory EE Indicator is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Common Law",
        "1 - Independent Contractor",
        "2 - FICA/FUTA",
        "3 - FICA Only",
        "4 - Self-employed"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "foreignEarnedIncome",
    placeholder: "Select Foreign Earned Income",
    fieldtype: "select",
    label: "Foreign Earned Income",
    value: "NONE",
    errmsg: "Foreign Earned Income is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "residenceCode",
    placeholder: "Select Resident Code",
    fieldtype: "select",
    label: "Resident Code",
    value: "NONE",
    errmsg: "Resident Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Resident",
        "1 - Nonresident",
        "2 - Sourced Location",
        "3 - Live/Work",
        "4 - Res 1/1",
        "5 - Work 1/1",
        "6 - Live/Work 1/1"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "roundingIndicator",
    placeholder: "Select Rounding Indicator",
    fieldtype: "select",
    label: "Rounding Indicator",
    value: "NONE",
    errmsg: "Rounding Indicator is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Default",
        "1 - Cents",
        "2 - Dollars",
        "3 - Down to Dollars"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "withholdingForm",
    placeholder: "Select Withholding Form",
    fieldtype: "select",
    label: "Withholding Form",
    value: "NONE",
    errmsg: "Withholding Form is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0,0 - 2019 or earlier Form W-4",
        "1,1 - 2020 Form W-4, Multiple Jobs not checked",
        "1,2 - 2020 Form W-4, Multiple Jobs checked"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "withholdingForm",
    placeholder: "Select Withholding Form",
    fieldtype: "select",
    label: "Withholding Form",
    value: "NONE",
    errmsg: "Withholding Form is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0,0 - 2019 or earlier Form W-4",
        "1,1 - 2020 Form W-4, Multiple Jobs not checked",
        "1,2 - 2020 Form W-4, Multiple Jobs checked"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "taxExempt",
    placeholder: "Select Tax Exempt",
    fieldtype: "select",
    label: "Tax Exempt",
    value: "NONE",
    errmsg: "Tax Exempt is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Non Exempt",
        "1 - Exempt Taxes Only",
        "2 - Exempt Wages &amp; Taxes"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "selfAdjust",
    placeholder: "Select Self Adjust",
    fieldtype: "select",
    label: "Self Adjust",
    value: "NONE",
    errmsg: "Self Adjust is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Use Formula Default",
        "1 - Self Adjust for quarterly formula",
        "7 - Do not self adjust, ignore YTD tax, ignore YTD wage",
        "8 - Do not self adjust, ignore year-to-date tax",
        "9 - Do Not Self Adjust"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "maritalStatus",
    placeholder: "Select Marital Status",
    fieldtype: "select",
    label: "Marital Status",
    value: "NONE",
    errmsg: "Marital Status is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - None",
        "1 - Single",
        "2 - Married",
        "3 - Married, claim self, file separate",
        "4 - Married, both working",
        "5 - Married, one working",
        "6 - Head of household",
        "7 - Married, multiple employers",
        "8 - Widow or widower",
        "9 - Married, not living with spouse",
        "10 - Married, claim all, file joint",
        "11 - Married, claim half, file joint",
        "12 - Married, claim all, file separate",
        "13 - Married, claim none, file joint",
        "14 - Married, living with spouse",
        "15 - Married, single tax rate",
        "16 - Civil Union",
        "17 - Civil Union, single tax rate",
        "18 - Married, spouse is a nonresident alien",
        "19 - Married, 19",
        "20 - Married, 20",
        "21 - Married, 21",
        "22 - Married, 22",
        "23 - Married, 23",
        "24 - Married, 24",
        "25 - Married, 25"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "eicStatus",
    placeholder: "Select EIC Status",
    fieldtype: "select",
    label: "EIC Status",
    value: "NONE",
    errmsg: "EIC Status is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - None",
        "1 - Single or Married, no certificate (W5)",
        "2 - Single, one certificate (W5)",
        "3 - Married, both filing certificate (W5)",
        "4 - Married, one certificate (W5)"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "electedstateIndicator",
    placeholder: "Select Elected State Indicator",
    fieldtype: "select",
    label: "Elected State Indicator",
    value: "NONE",
    errmsg: "Elected State Indicator is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "certificateCode",
    placeholder: "Select Certificate Code",
    fieldtype: "select",
    label: "Certificate Code",
    value: "NONE",
    errmsg: "Certificate Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - No Nonresident Certificate",
        "1 - Nonresident Certificate Filed",
        "2 - Advanced Local Courtesy Withholding",
        "3 - State Level Courtesy Withholding",
        "4 - Withholding Affidavit (Res. Certificate)"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "additionalTax",
    placeholder: "Select Additional Tax",
    fieldtype: "select",
    label: "Additional Tax",
    value: "NONE",
    errmsg: "Additional Tax is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - None",
        "1 - Substitute flat amount",
        "2 - Add flat amount",
        "3 - Substitute percentage",
        "4 - Add percentage",
        "5 - Substitute percentage and flat amount",
        "6 - Add Percent to Calculated Tax",
        "7 - Substitute percentage of Calculated Tax",
        "8 - Substitute voluntary tax",
        "9 - Substitute lump sum tax",
        "10 - Substitute percentage mandatory supplemental",
        "11 - Substitute flat amount (exceed)",
        "12 - Add flat amount (exceed)",
        "13 - Substitute percentage (exceed)",
        "14 - Add percentage (exceed)",
        "15 - Substitute percentage and flat amount (exceed)",
        "16 - Add Percent to Calculated Tax (exceed)",
        "17 - Substitute percentage of Calculated Tax (exceed)",
        "18 - Add Virginia Credit",
        "19 - Add voluntary tax state",
        "22 - Add flat amount, allowing negatives"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "supplementalCode",
    placeholder: "Select Supplemental Code",
    fieldtype: "select",
    label: "Supplemental Code",
    value: "NONE",
    errmsg: "Supplemental Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - Regular",
        "1 - Flat rate",
        "2 - Separate aggregation",
        "3 - Rate table",
        "4 - Cumulative",
        "5 - Aggregation with pay periods",
        "6 - Wage-associated",
        "7 - Concurrent",
        "8 - Regular, no exemptions",
        "9 - System selected",
        "10 - Commission",
        "11 - Christmas bonus"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "filingStatus",
    placeholder: "Select Filing Status",
    fieldtype: "select",
    label: "Filing Status",
    value: "NONE",
    errmsg: "Filing Status is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "1 - Single",
        "3 - Married filing separate",
        "4 - Married filing jointly",
        "6 - Unmarried, head of household"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "secondFamily",
    placeholder: "Select Second Family",
    fieldtype: "select",
    label: "Second Family",
    value: "NONE",
    errmsg: "Second Family is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "headofFamily",
    placeholder: "Select Head Of Family",
    fieldtype: "select",
    label: "Head Of Family",
    value: "NONE",
    errmsg: "Head Of Family is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "garnishmentDuration",
    placeholder: "Select Garnishment Duration",
    fieldtype: "select",
    label: "Garnishment Duration",
    value: "NONE",
    errmsg: "Garnishment Duration is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - Continuing", "1 - One Time", "2 - Specific End Date"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "statementofExemptions",
    placeholder: "Select Statement of Exemptions",
    fieldtype: "select",
    label: "Statement of Exemptions",
    value: "NONE",
    errmsg: "Statement of Exemptions is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - Not Filed", "1 - Filed"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "isDelinquent",
    placeholder: "Select Is Delinquent",
    fieldtype: "select",
    label: "Is Delinquent",
    value: "NONE",
    errmsg: "Is Delinquent is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "typeofDebt",
    placeholder: "Select Type Of Debt",
    fieldtype: "select",
    label: "Type Of Debt",
    value: "NONE",
    errmsg: "Type Of Debt is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - N/A",
        "1 - Loan Contract",
        "2 - Hospital",
        "3 - Consumer Credit",
        "4 - Civil Judgement",
        "5 - Public Assistance Fund",
        "6 - Debt To Creditor-Landlord",
        "7 - Residential Lease",
        "8 - Judgement Garnishment for Support",
        "9 - Wage Assignment for Child Support",
        "10 - Fines/Other Court Costs",
        "11 - Order Issued by CSE",
        "12 - Order Issued by Secretary"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "vocation",
    placeholder: "Select Vocation",
    fieldtype: "select",
    label: "Vocation",
    value: "NONE",
    errmsg: "Vocation is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - N/A",
        "1 - Sailor",
        "2 - Laborer",
        "3 - Mechanic",
        "4 - Municipal Employee",
        "5 - State Employee",
        "6 - WI State Employee"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "consent",
    placeholder: "Select Consent",
    fieldtype: "select",
    label: "Consent",
    value: "NONE",
    errmsg: "Consent is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes", "3 - Hardship"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "orderedamountFlag",
    placeholder: "Select Ordered Amount Flag",
    fieldtype: "select",
    label: "Ordered Amount Flag",
    value: "NONE",
    errmsg: "Ordered Amount Flag is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - System Selected",
        "1 - Total Ordered Amount",
        "2 - Total Pay Period"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "roundingIndicator",
    placeholder: "Select Rounding Indicator",
    fieldtype: "select",
    label: "Rounding Indicator",
    value: "NONE",
    errmsg: "Rounding Indicator is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0 - System Default",
        "1 - Round To Cents",
        "2 - Round To Dollars"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "limitforchildSupport",
    placeholder: "Select Limit for Child Support",
    fieldtype: "select",
    label: "Limit for Child Support",
    value: "NONE",
    errmsg: "Limit for Child Support is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - Use State Limit", "1 - Use Federal Limit"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "remainderofdisposableEarnings",
    placeholder: "Select Remainder of Disposable Earnings",
    fieldtype: "select",
    label: "Remainder of Disposable Earnings",
    value: "NONE",
    errmsg: "Remainder of Disposable Earnings is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - normal", "1 - 100%"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "doesthisgarnishmentuseatimereferenceCalculation?",
    placeholder:
      "Select Does this garnishment use a time reference calculation?",
    fieldtype: "select",
    label: "Does this garnishment use a time reference calculation?",
    value: "NONE",
    errmsg:
      "Does this garnishment use a time reference calculation? is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No Lump Sum Calculation", "1 - Yes Lump Sum Calculation"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "garnishmentlimitInd",
    placeholder: "Select Garnishment Limit Ind",
    fieldtype: "select",
    label: "Garnishment Limit Ind",
    value: "NONE",
    errmsg: "Garnishment Limit Ind is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - YTD", "1 - QTD", "2 - MTD", "3 - PPTD"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "UsealternateLimit",
    placeholder: "Select Use Alternate Limit",
    fieldtype: "select",
    label: "Use Alternate Limit",
    value: "NONE",
    errmsg: "Use Alternate Limit is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - Regular % Limit", "1 - Alternate % Limit"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "garnishmentType",
    placeholder: "Select Garnishment Type",
    fieldtype: "select",
    label: "Garnishment Type",
    value: "NONE",
    errmsg: "Garnishment Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - Stacking /Default", "1 - Divide Evenly", "2 - Pro-Rate"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "usestateofIssue",
    placeholder: "Select Use State of Issue",
    fieldtype: "select",
    label: "Use State of Issue",
    value: "NONE",
    errmsg: "Use State of Issue is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - No", "1 - Yes"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "firstpayCode",
    placeholder: "Select First Pay Code",
    fieldtype: "select",
    label: "First Pay Code",
    value: "NONE",
    errmsg: "First Pay Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["0 - First Pay", "1 - Not First Pay"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "calculationMethod",
    placeholder: "Select Calculation Method",
    fieldtype: "select",
    label: "Calculation Method",
    value: "NONE",
    errmsg: "Calculation Method is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "00 Tax Rate Only",
        "01 Tax Rate, Max Wage",
        "02 Tax Rate, Min Wage",
        "03 Tax Rate, Min Wage, Max Wage",
        "04 Tax Rate, Max Tax",
        "05 Tax Rate, Min Wage, Max Tax",
        "06 Flat Amount Only",
        "07 Flat Amount, Max Wage",
        "08 Flat Amount, Min Wage",
        "09 Flat Amount, Min Wage, Max Wage",
        "10 Flat Amount, Max Tax",
        "11 Flat Amount, Tax Rate",
        "12 Tax Rate For Hours Worked",
        "13 Tax Rate, Max Annualized Wage",
        "14 Tax Rate, Min YTD Wage",
        "15 Tax Rate, Min YTD Wage, Max YTD Wage, Max Tax",
        "16 Flat Amt, Max YTD Wage",
        "17 Flat Amt, Min YTD Wage",
        "18 Flat Amt, Min YTD Wage, Max YTD Wage",
        "19 Flat Amt, Min YTD Wage, Max Tax",
        "20 Tax Rate, Min YTD Wage, Max Tax"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "roundingMethod",
    placeholder: "Select Rounding Method",
    fieldtype: "select",
    label: "Rounding Method",
    value: "NONE",
    errmsg: "Rounding Method is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "Round To Cents",
        "Round To Dollars",
        "Either/Cents",
        "Either/Dollars",
        "Round Down To Dollars",
        "Authority/Round Down To Dollars"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "state",
    placeholder: "Select State",
    fieldtype: "select",
    label: "State",
    value: "NONE",
    errmsg: "State is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "GA",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "aggregationStatus",
    placeholder: "Select Aggregation Status",
    fieldtype: "select",
    label: "Aggregation Status",
    value: "NONE",
    errmsg: "Aggregation Status is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "Aggregate to Highest Maximum",
        "Aggregate to Lowest Maximum",
        "Do Not Aggregate Plans",
        "Use Authority Default Aggregation Rule "
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "dateCode",
    placeholder: "Select Date Code",
    fieldtype: "select",
    label: "Date Code",
    value: "NONE",
    errmsg: "Date Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["Not Applicable", "Use if Prior To Order"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "processCode",
    placeholder: "Select Process Code",
    fieldtype: "select",
    label: "Process Code",
    value: "NONE",
    errmsg: "Process Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "Disposable",
        "Not Disposable",
        "To Max. Amount",
        "To Max. Percent",
        "Over Max. Amount",
        "Over Max. Percent",
        "Between Min. Amount &amp; Max. Amount",
        "Between Min. Percent &amp; Max. Percent",
        "To Min. Amount",
        "To Min. Percent",
        "Greater of Max. Amount OR API",
        "Greater of Max. Percent OR API",
        "Lesser of Max. Amount OR API",
        "Lesser of Max. Percent OR API"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "paymentcodesthatAre",
    placeholder: "Select Payment Codes that are",
    fieldtype: "select",
    label: "Payment Codes that are",
    value: "NONE",
    errmsg: "Payment Codes that are is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["Both:Mapped and Not Mapped", "Mapped", "Not Mapped"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "planearningTypes",
    placeholder: "Select Plan Earning Types",
    fieldtype: "select",
    label: "Plan Earning Types",
    value: "NONE",
    errmsg: "Plan Earning Types is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["ALL", "Earning", "Credit", "Deduction", "Plan"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "messageFilter",
    placeholder: "Select Message Filter",
    fieldtype: "select",
    label: "Message Filter",
    value: "NONE",
    errmsg: "Message Filter is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "All Messages",
        "0000 - 0999 - Informational",
        "1000 - 1999 - Assumptions",
        "2000 - 2999 - Legalities",
        "3000 - 4999 - Failures",
        "5000 - 9999 - Fatals"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "gfo_inputsectionMethod",
    placeholder: "Input Section Method",
    fieldtype: "select",
    label: "Input Section Method",
    value: "NONE",
    errmsg: "Method is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0- Use Flat Amount",
        "1- Use Disposable Earnings Amount",
        "2- Use Disposable Earnings Amount Reduced by Higher Priority Garnishment",
        "3- Use Gross Wages API Amount",
        "4- Use Gross Wages API Amount Reduced by Higher Priority Garnishments",
        "5- Use Net Wages API Amount",
        "6- Use Net Wages API Amount Reduced by Higher Priority Garnishments"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "gfo_exemptionsectionMethod",
    placeholder: "Exemption Section Method",
    fieldtype: "select",
    label: "Exemption Section Method",
    value: "NONE",
    errmsg: "Method is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0- No Exemptions",
        "1- Subtract Flat Amount",
        "2- Subtract Exemption Amount",
        "3- Subtract Exemption Dependent Amount * Number of Dependents",
        "4- Subtract Exemption Amount and Exemption Dependent Amount * Number of Dependents",
        "5- Subtract Exemption Dependent Amount * Number of Exemptions",
        "6- Subtract Exemption Amount and Exemption Dependent Amount * Number of Exemptions"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "gfo_calculationsectionMethod",
    placeholder: "Calculation Section Method",
    fieldtype: "select",
    label: "Calculation Section Method",
    value: "NONE",
    errmsg: "Method is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "1- Take Calculation Percent",
        "2- Take Greater of Calculation Amount or Calculation Percent",
        "3- Take Lesser of Calculation Amount or Calculation Percent",
        "4- Take Calculation Percent to Calculation Limit",
        "5- Take Greater of Calculation Amount or Calculation Percent to Calculation Limit",
        "6- Take Lesser of Calculation Amount or Calculation Percent to Calculation Limit",
        "7- Take Greater of Calculation Percent or Amount that Exceeds Calculation Amount",
        "8- Take Lesser of Calculation Percent or Amount that Exceeds Calculation Amount",
        "9- Take Greater of Calculation Percent or Amount that Exceeds Calculation Amount to Limit",
        "10- Take lesser of Calculation Percent or Amount that exceeds Calculation Amount to Limit"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "gfo_eductionsectionMethod",
    placeholder: "Deduction Section Method",
    fieldtype: "select",
    label: "Deduction Section Method",
    value: "NONE",
    errmsg: "Method is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: [
        "0- No Deductions",
        "1- Subtract Deduction Flat Amount",
        "2- Subtract Deduction Amount",
        "3- Subtract Deduction Dependent Amount * Number of Dependents",
        "4- Subtract Deduction Amount and Deduction Dependent Amount * Number of Dependents"
      ]
    },
    validation: {
      required: false,
      type: "string"
    }
  }
];

export const customPayments = [
  {
    id: "userCode",
    placeholder: "Enter Custom Payment Code",
    fieldtype: "text",
    label: "Code",
    value: "",
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
        {
          type: "uppercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 1,
          message: "min 1 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    id: "payType",
    placeholder: "Select a type",
    fieldtype: "select",
    label: "Type",
    value: "",
    errmsg: "PayType is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      options: ["Custom Earnings", "Custom Benefit Plan"]
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "name",
    placeholder: "Enter Custom Payment Name",
    fieldtype: "text",
    label: "Custom Payment",
    value: "",
    errmsg: "Custom Payment Name is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "uppercase",
          message: "Payment Name needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    id: "taxability",
    placeholder: "Select a type",
    fieldtype: "select",
    label: "Taxability",
    value: "",
    errmsg: "PayType is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        "Taxable",
        "Non-Taxable",
        "Limit-YTD",
        "Limit-QTD",
        "Limit-MTD",
        "Taxable/Exclude",
        "Imputed"
      ],
      multiselect: false
    },
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    id: "eemax",
    placeholder: "Enter Maximum Limit Here",
    fieldtype: "text",
    label: "Maximum Limit",
    value: "",
    errmsg: "Custom Payment Name is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: false,
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Maximum Limit Cannot be negative"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "min",
          input: 0,
          message: "Maximum Limit can not be < 0"
        },
        {
          type: "max",
          input: 100,
          message: "Maximum Limit can not be > 100"
        }
      ]
    }
  }
];
export const customTaxCodes = [
  {
    id: "taxCode",
    placeholder: "Enter Custom Tax Code",
    fieldtype: "text",
    label: "Custom Tax Code",
    value: "",
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
        {
          type: "uppercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    id: "name",
    placeholder: "Enter Custom Tax Name",
    fieldtype: "text",
    label: "Custom Tax Name",
    value: "",
    errmsg: "Custom Tax Name is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  }
];
export const customTaxFormulas = [
  {
    name: "taxCode",
    id: "taxCode",
    placeholder: "Enter Custom Tax Code",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Custom Tax Code",
    value: "",
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "uppercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "startDate",
    id: "startDate",
    placeholder: "Enter Start Date",
    fieldtype: "date",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Start Date",
    value: "",
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "rescind",
    id: "rescind",
    placeholder: "Enter End Date",
    fieldtype: "date",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "End Date",
    value: "",
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "cmName",
    id: "cmName",
    placeholder: "Select Calculation Method",
    fieldtype: "select",
    fieldlength: {},
    fieldinfo: {
      options: [
        "00 Tax Rate Only",
        "01 Tax Rate, Max Wage",
        "02 Tax Rate, Min Wage",
        "03 Tax Rate, Min Wage, Max Wage",
        "04 Tax Rate, Max Tax",
        "05 Tax Rate, Min Wage, Max Tax",
        "06 Flat Amount Only",
        "07 Flat Amount, Max Wage",
        "08 Flat Amount, Min Wage",
        "09 Flat Amount, Min Wage, Max Wage",
        "10 Flat Amount, Max Tax",
        "11 Flat Amount, Tax Rate",
        "12 Tax Rate For Hours Worked",
        "13 Tax Rate, Max Annualized Wage",
        "14 Tax Rate, Min YTD Wage",
        "15 Tax Rate, Min YTD Wage, Max YTD Wage, Max Tax",
        "16 Flat Amt, Max YTD Wage",
        "17 Flat Amt, Min YTD Wage",
        "18 Flat Amt, Min YTD Wage, Max YTD Wage",
        "19 Flat Amt, Min YTD Wage, Max Tax",
        "20 Tax Rate, Min YTD Wage, Max Tax"
      ]
    },
    validationType: "string",
    label: "Calculation Method",
    value: "",
    validation: {
      required: false,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "taxRate",
    id: "taxRate",
    placeholder: "Enter Tax Rate",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Tax Rate",
    value: "",
    validation: {
      required: false,
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Zipcode cannot be negative"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "rounding",
    id: "rounding",
    placeholder: "Enter Rounding Value",
    fieldtype: "select",
    fieldlength: {},
    fieldinfo: {
      options: [
        "Round To Cents",
        "Round To Dollars",
        "Either/Cents",
        "Either/Dollars",
        "Round Down To Dollars",
        "Authority/Round Down To Dollars"
      ]
    },
    validationType: "string",
    label: "Rounding Methods",
    value: "",
    validation: {
      required: false,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "minWage",
    id: "minWage",
    placeholder: "Enter Min Wage",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Minimum Wage",
    value: "",
    validation: {
      required: false,
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Minimum Wage cannot be negative"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "maxWage",
    id: "maxWage",
    placeholder: "Enter Max Wage",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Maximum Wage",
    value: "",
    validation: {
      required: false,
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Maximum Wage cannot be negative"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "maxTax",
    id: "maxTax",
    placeholder: "Enter Max Tax",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Max Tax",
    value: "",
    validation: {
      required: false,
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Maximum Tax cannot be negative"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "flatAmount",
    id: "flatAmount",
    placeholder: "Enter Flat Amount",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Flat Amount",
    value: "",
    validation: {
      required: false,
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Zipcode cannot be negative"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  }
];

export const worksiteCompanies = [
  {
    name: "location",
    id: "location",
    placeholder: "Enter Worksite",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Location",
    value: "",
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "street1",
    id: "street1",
    placeholder: "Enter Street",
    description: "Example: PeachTree Industrial",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Street1",
    value: "",
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "street2",
    id: "street2",
    placeholder: "Enter Street2",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Street2",
    value: "",
    validation: {
      required: false,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "city",
    id: "city",
    placeholder: "Enter city",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "City",
    value: "",
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "county",
    id: "county",
    placeholder: "Select County",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "County",
    value: "",
    validation: {
      required: false,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    name: "state",
    id: "state",
    placeholder: "Enter state",
    fieldtype: "select",
    fieldlength: {},
    fieldinfo: {
      typeahead: true,
      isasync: false,
      multiselect: false,
      options: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "GA",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    },
    validationType: "string",
    label: "State",
    value: "",
    validation: {
      required: true,
      type: "string"
    }
  },
  {
    name: "zip",
    id: "zip",
    placeholder: "Enter zip",
    fieldtype: "text",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Max Tax",
    value: "",
    validation: {
      required: true,
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Zipcode cannot be negative"
        },
        {
          type: "integer",
          message: "Zipcode must be an integer"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "min",
          input: 0,
          message: "Invalid Zip Code"
        },
        {
          type: "max",
          input: 99999,
          message: "Invalid Zip Code"
        }
      ]
    }
  }
];
export const experienceRates = [
  {
    id: "taxCode",
    placeholder: "Enter Tax Code",
    fieldtype: "select",
    label: "Tax Code",
    value: "",
    errmsg: "TaxCode is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "companyCode",
    placeholder: "Enter Company Code",
    fieldtype: "select",
    label: "Company Code",
    value: "",
    errmsg: "CompanyCode is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    name: "startDate",
    id: "startDate",
    placeholder: "",
    fieldtype: "date",
    fieldlength: {},
    fieldinfo: {},
    label: "Start Date",
    value: "",
    validation: [
      {
        required: false,
        type: "string"
      }
    ]
  },
  {
    id: "riskClass",
    placeholder: "Enter Risk Class",
    fieldtype: "select",
    label: "Risk Class",
    value: "",
    errmsg: "Risk Class is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  }
];

export const supplementalMethods = [
  {
    id: "taxCode",
    placeholder: "Enter Tax Code",
    fieldtype: "select",
    label: "Tax Code",
    value: "",
    errmsg: "TaxCode is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "taxType",
    placeholder: "Enter Tax Type",
    fieldtype: "select",
    label: "Tax Type",
    value: "",
    errmsg: "Tax Type is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: true,
      isasync: true,
      options: [],
      multiselect: false
    },
    validation: {
      required: false,
      type: "string"
    }
  },
  {
    id: "formulaNumber",
    placeholder: "Enter Formula Number",
    fieldtype: "text",
    label: "Formula Number",
    value: "",
    errmsg: "Formula Number is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [],
      multiselect: false
    },
    validation: {
      type: "number",
      subtype: [
        {
          type: "positive",
          message: "Formula Number cannot be negative"
        },
        {
          type: "typeError",
          message: "Must be a number"
        }
      ],
      constraint: [
        {
          type: "min",
          input: 0,
          message: "Maximum Limit can not be < 0"
        },
        {
          type: "max",
          input: 100,
          message: "Maximum Limit can not be > 100"
        }
      ]
    }
  },
  {
    name: "startDate",
    id: "startDate",
    placeholder: "",
    fieldtype: "date",
    fieldlength: {},
    fieldinfo: {},
    validationType: "string",
    label: "Start Date",
    value: "",
    validation: [
      {
        required: false
      }
    ]
  }
];

export const worksites = [
  {
    id: "company",
    placeholder: "Enter Company Code",
    fieldtype: "text",
    label: "Code ",
    value: "",
    errmsg: "Company Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "uppercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    id: "companyName",
    placeholder: "Enter Company Name",
    fieldtype: "text",
    label: "Name ",
    value: "",
    errmsg: "Company Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  }
];
export const customFormulas = [
  {
    id: "taxCode",
    placeholder: "Enter Custom Tax Code",
    fieldtype: "text",
    label: "Code ",
    value: "",
    errmsg: "TaxCode is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "uppercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    id: "name",
    placeholder: "Enter Custom Tax Name",
    fieldtype: "text",
    label: "Name ",
    value: "",
    errmsg: "Tax Code is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: true,
      type: "string",
      subtype: [
        {
          type: "lowercase",
          message: "Tax Code needs to be in uppercase."
        }
      ],
      constraint: [
        {
          type: "min",
          input: 5,
          message: "min 5 characters"
        },
        {
          type: "max",
          input: 25,
          message: "max 25 characters"
        }
      ]
    }
  },
  {
    id: "testStartDate",
    placeholder: "StartDate",
    fieldtype: "date",
    label: "StartDate ",
    value: "2013-03-01",
    errmsg: "StartDate is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: false,
      type: "date",
      constraint: [
        {
          type: "max",
          input: new Date(),
          message: "Start Date cannot be in future"
        }
      ]
    }
  },
  {
    id: "testEndDate",
    placeholder: "Enter EndDate",
    fieldtype: "date",
    label: "EndDate ",
    value: "",
    errmsg: "EndDate is required",
    fieldlength: {
      minlength: 1,
      maxlength: 25
    },
    fieldinfo: {},
    validation: {
      required: false,
      type: "date",
      constraint: [
        {
          type: "max",
          input: new Date(),
          message: "Date Cannot in the future"
        }
      ],
      dependent: [
        {
          inputField: "testStartDate",
          message: "StartDate cannot be after EndDate"
        }
      ],
      disableFields: ["testEndDate", "testStartDate"]
    }
  },
  {
    id: "checkboxGroup",
    placeholder: "",
    fieldtype: "checkbox",
    label: "CheckBox",
    value: "",
    fieldlength: {},
    fieldinfo: {
      typeahead: false,
      isasync: false,
      options: [
        {
          id: "checkbox1",
          label: "Enable/Disable"
        }
      ],
      multiselect: false
    },
    validationType: "string",
    validation: [
      {
        type: "string",
        required: false
      }
    ],
    disable: ["testEndDate", "testStartDate"]
  }
];
