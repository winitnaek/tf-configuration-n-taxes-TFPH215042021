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
        options: [
          "Custom Earnings",
          "Custom Benefit Plan"
        ]
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
        typeahead: true,
        isasync: true,
        options: [
          "Non-Taxable",
          "Limit-YTD",
          "Limit-QTD",
          "Limit-MTD",
          "Taxable/Exclude",
          "Imputed"
        ],
        multiselect: false,  
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
      id: "stateDate",
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
        options:[
          "01 Tax Rate, Max Wage",
          "00 Tax Rate Only</option",
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
            "Authority/Round Down To Dollars",
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
      name: "country",
      id: "country",
      placeholder: "Select Country",
      fieldtype: "select",
      fieldlength: {},
      fieldinfo: {
        typeahead: true,
        isasync: false,
        options: [
          "Afghanistan",
          "land Islands",
          "Albania",
          "Algeria",
          "American Samoa",
          "AndorrA",
          "Angola",
          "Anguilla",
          "Antarctica",
          "Antigua and Barbuda",
          "Argentina",
          "Armenia",
          "Aruba",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia and Herzegovina",
          "Botswana",
          "Bouvet Island",
          "Brazil",
          "British Indian Ocean Territory",
          "Brunei Darussalam",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Cape Verde",
          "Cayman Islands",
          "Central African Republic",
          "Chad",
          "Chile",
          "China",
          "Christmas Island",
          "Cocos (Keeling) Islands",
          "Colombia",
          "Comoros",
          "Congo",
          "Congo, The Democratic Republic of the",
          "Cook Islands",
          "Costa Rica",
          "Cote D\"Ivoire",
          "Croatia",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Falkland Islands (Malvinas)",
          "Faroe Islands",
          "Fiji",
          "Finland",
          "France",
          "French Guiana",
          "French Polynesia",
          "French Southern Territories",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Gibraltar",
          "Greece",
          "Greenland",
          "Grenada",
          "Guadeloupe",
          "Guam",
          "Guatemala",
          "Guernsey",
          "Guinea",
          "Guinea-Bissau",
          "Guyana",
          "Haiti",
          "Heard Island and Mcdonald Islands",
          "Holy See (Vatican City State)",
          "Honduras",
          "Hong Kong",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran, Islamic Republic Of",
          "Iraq",
          "Ireland",
          "Isle of Man",
          "Israel",
          "Italy",
          "Jamaica",
          "Japan",
          "Jersey",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Kiribati",
          "Korea, Democratic People\"S Republic of",
          "Korea, Republic of",
          "Kuwait",
          "Kyrgyzstan",
          "Lao People\"S Democratic Republic",
          "Latvia",
          "Lebanon",
          "Liberia",
          "Libyan Arab Jamahiriya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Macao",
          "Macedonia, The Former Yugoslav Republic of",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Marshall Islands",
          "Martinique",
          "Mauritania",
          "Mauritius",
          "Mayotte",
          "Mexico",
          "Micronesia, Federated States of",
          "Moldova, Republic of",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Myanmar",
          "Namibia",
          "Nauru",
          "Nepal",
          "Netherlands",
          "Netherlands Antilles",
          "New Caledonia",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "Niue",
          "Norfolk Island",
          "Northern Mariana Islands",
          "Norway",
          "Oman",
          "Pakistan",
          "Palau",
          "Palestinian Territory, Occupied",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Pitcairn",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russian Federation",
          "RWANDA",
          "Saint Helena",
          "Saint Kitts and Nevis",
          "Saint Lucia",
          "Saint Pierre and Miquelon",
          "Saint Vincent and the Grenadines",
          "Samoa",
          "San Marino",
          "Sao Tome and Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovakia",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Georgia and the South Sandwich Islands",
          "Spain",
          "Sri Lanka",
          "Sudan",
          "Suriname",
          "Svalbard and Jan Mayen",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syrian Arab Republic",
          "Taiwan, Province of China",
          "Tajikistan",
          "Tanzania, United Republic of",
          "Thailand",
          "Timor-Leste",
          "Togo",
          "Tokelau",
          "Tonga",
          "Trinidad and Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks and Caicos Islands",
          "Tuvalu",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United Kingdom",
          "United States",
          "United States Minor Outlying Islands",
          "Uruguay",
          "Uzbekistan",
          "Vanuatu",
          "Venezuela",
          "Viet Nam",
          "Virgin Islands, British",
          "Virgin Islands",
          "Wallis and Futuna",
          "Western Sahara",
          "Yemen",
          "Zambia",
          "Zimbabwe"
        ]
      },
      validationType: "string",
      label: "Country",
      value: "",
      validation: {
        required: true,
        type: "string"
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
      name: "taxCode",
      id: "taxCode",
      placeholder: "Enter Tax Code",
      fieldtype: "text",
      fieldlength: {},
      fieldinfo: {},
      validationType: "string",
      label: "Tax Code",
      value: "",
      validation: [
        {
          required: false,
        }
      ]
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
          required: false,
        }
      ]
    },
    {
      name: "companyCode",
      id: "companyCode",
      placeholder: "Enter Company Code",
      fieldtype: "text",
      fieldlength: {},
      fieldinfo: {},
      validationType: "string",
      label: "Company Code",
      value: "",
      validation: [
        {
          required: false,
        }
      ]
    },
    {
      name: "riskClass",
      id: "riskClass",
      placeholder: "Enter Risk Class",
      fieldtype: "text",
      fieldlength: {},
      fieldinfo: {},
      validationType: "string",
      label: "Risk Class",
      value: "",
      validation: [
        {
          required: false,
        }
      ]
    }
  ];

export const supplementalMethods = [
    {
      name: "taxCode",
      id: "taxCode",
      placeholder: "Enter Tax Code",
      fieldtype: "text",
      fieldlength: {},
      fieldinfo: {},
      validationType: "string",
      label: "Tax Code",
      value: "",
      validation: [
        {
          required: false,
        }
      ]
    },
    {
      name: "taxType",
      id: "taxType",
      placeholder: "Enter Tax Type",
      fieldtype: "text",
      fieldlength: {},
      fieldinfo: {},
      validationType: "string",
      label: "TaxType",
      value: "",
      validation: [
        {
          required: false,
        }
      ]
    },
    {
      name: "formulaNumber",
      id: "formulaNumber",
      placeholder: "Enter Formula Number",
      fieldtype: "text",
      fieldlength: {},
      fieldinfo: {},
      validationType: "string",
      label: "Formula Number",
      value: "",
      validation: [
        {
          required: false,
        }
      ]
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
      validation: [
        {
          required: false,
        }
      ]
    }
  ];

export const worksites = [
    {
      id: "companyCode",
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
      id: "customTaxCode",
      placeholder: "Enter Tax Code",
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
      id: "customTaxName",
      placeholder: "Enter Tax Name",
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
    }
  ];