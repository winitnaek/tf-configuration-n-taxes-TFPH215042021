export default {
  outputgeninprogress: {},
  printinprogress: {},
  w2data: {
    loadeew2: false,
    eew2id: ""
  },
  compdata: {
    loadcomp: false,
    compid: ""
  },
  eew2data: {
    filtertype: "",
    filterlabel: "",
    eew2pdf: {},
    transmitters: [],
    eew2ecords: [],
    eew2recordInput: {},
    pubunpubcnt: 0,
    genstatus: 0,
    w2dgridata: []
  },
  viewcompdata: {
    messages: [],
    outputDoc: {},
    isConfForTurboTax: {}
  },
  linksdata: {
    title: "Related Activity Links:",
    links: [
      { link: "", label: "Optional Rate Overrides" },
      { link: "", label: "Unemployment Overrides" },
      { link: "", label: "What-if Test" },
      { link: "", label: "Worksites" }
    ]
  },

  links: {
    pending: false,
    data: {
      links: []
    }
  },

  moduleLinks:{

  modules: [
    {
      id: 1,
      name: "All",
      areas: [
        { value: "welcome", label: "Home", link: "<Welcome/>" },
        {
          value: "AddressOverrides",
          label: "Address Overrides",
          link: "AddressOverrides"
        },
        {
          value: "AuditLogViewer",
          label: "Audit Log Viewer",
          link: "AuditLogViewer"
        },
        { value: "companies", label: "Companies", link: "" },
        { value: "batchTest", label: "Batch Test", link: "" },
        { value: "connectToDataSets", label: "Connect To Data Sets", link: "" },
        {
          value: "customBackupRestore",
          label: "Custom Backup/Restore",
          link: ""
        },
        { value: "customFormulas", label: "Custom Formulas", link: "" },
        {
          value: "customGarnishmentFormulas",
          label: "Custom Garnishment Formulas",
          link: ""
        },
        { value: "customGarnishments", label: "Custom Garnishments", link: "" },
        { value: "customNexusData", label: "Custom Nexus Data", link: "" },
        {
          value: "customPaymentExceptions",
          label: "Custom Payment Exceptions",
          link: ""
        },
        {
          value: "customPayments",
          label: "Custom Payments",
          link: "CustomPayments"
        },
        {
          value: "customPayments2",
          label: "Custom Payments2",
          link: "CustomPayments2"
        },
        { value: "customTaxCodes", label: "Custom Tax Codes", link: "" },
        {
          value: "customTaxPaymentOverrides",
          label: "Custom Tax Payment Overrides",
          link: ""
        },
        { value: "cyclicBulletin", label: "Cyclic Bulletin", link: "" },
        { value: "dataSets", label: "Data Sets", link: "" },
        { value: "databaseLoad", label: "Database Load", link: "" },
        {
          value: "disposableOverrides",
          label: "Disposable Overrides",
          link: ""
        },
        { value: "employeeGroups", label: "Employee Groups", link: "" },
        {
          value: "garnishmentFormulaOverrides",
          label: "Garnishment Formula Overrides",
          link: ""
        },
        { value: "garnishmentGroups", label: "Garnishment Groups", link: "" },
        { value: "groupOverrides", label: "Group Overrides", link: "" },
        { value: "locatorBulletins", label: "Locator Bulletins", link: "" },
        {
          value: "loginsAndPermissions",
          label: "Logins and Permissions",
          link: ""
        },
        { value: "mapPaymentCodes", label: "Map Payment Codes", link: "" },
        { value: "mapTaxCodes", label: "Map Tax Codes", link: "" },
        { value: "mapTaxTypes", label: "Map Tax Types", link: "" },
        { value: "mappingTools", label: "Mapping Tools", link: "" },
        {
          value: "maritalStatusReport",
          label: "Marital Status Report",
          link: ""
        },
        { value: "messageViewer", label: "Message Viewer", link: "" },
        {
          value: "optionalRateOverrides",
          label: "Optional Rate Overrides",
          link: ""
        },
        {
          value: "paServicesTaxReport",
          label: "PA Services Tax Report",
          link: ""
        },
        { value: "paymentOverrides", label: "Payment Overrides", link: "" },
        { value: "pensionWhatIftest", label: "Pension What-if Test", link: "" },
        {
          value: "reciprocalOverrides",
          label: "Reciprocal Overrides",
          link: ""
        },
        {
          value: "regulatroyBulletins",
          label: "Regulatory Bulletins",
          link: ""
        },
        { value: "reportingTools", label: "Reporting Tools", link: "" },
        { value: "systemTools", label: "System Tools", link: "" },
        {
          value: "taxEffectiveDateOverrides",
          label: "Tax Effective Date Overrides",
          link: ""
        },
        { value: "taxHistory", label: "Tax History", link: "" },
        { value: "taxabilityReport", label: "Taxability Report", link: "" },
        { value: "taxLocator", label: "TaxLocator", link: "" },
        {
          value: "usPensionQuickFormulas",
          label: "U.S. Pension QuickFormulas",
          link: ""
        },
        { value: "usQuickFormulas", label: "U.S. QuickFormulas", link: "" },
        {
          value: "usWageAttachmentQuickFormulas",
          label: "U.S. WageAttachment QuickF..",
          link: ""
        },
        {
          value: "unemployementOverrides",
          label: "Unemployment Overrides",
          link: ""
        },
        { value: "userDataQueries", label: "User Data Queries", link: "" },
        { value: "whatIfTest", label: "What-if Test", link: "" },
        { value: "worksites", label: "Worksites", link: "" },
        {
          value: "defineFavoriteLinks",
          label: "Define Favorite Links",
          link: ""
        }
      ]
    },
    {
      id: 2,
      name: "Mapping Tools",
      areas: [
        { value: "mapPaymentCodes", label: "Map Payment Codes", link: "" },
        { value: "mapTaxCodes", label: "Map Tax Codes", link: "" },
        { value: "mapTaxTypes", label: "Map Tax Types", link: "" }
      ]
    },
    {
      id: 3,
      name: "Reporting Tools",
      areas: [
        { value: "taxHistory", label: "Tax History", link: "" },
        { value: "taxabilityReport", label: "Taxability Report", link: "" },
        {
          value: "paServicesTaxReport",
          label: "PA Services Tax Report",
          link: ""
        },
        {
          value: "maritalStatusReport",
          label: "Marital Status Report",
          link: ""
        }
      ]
    }
  ]
},

  payeeDetails: {
    dueDate: "01/30/2020",
    company: "Acuity Brands Lighting Inc",
    method: "Check",
    payee: "PA Berkheimer EIT",
    amount: 397.29,
    details: [
      { authority: "BUCKINGHAM", taxType: "WITHHOLDING TAX", amount: 0.0 },
      { authority: "CRANBERRY", taxType: "WITHHOLDING TAX", amount: 130.07 },
      { authority: "HARBORCREEK", taxType: "WITHHOLDING TAX", amount: 97.98 },
      { authority: "JACKSON", taxType: "WITHHOLDING TAX", amount: 53.2 },
      { authority: "LIMERICK", taxType: "WITHHOLDING TAX", amount: 116.04 },
      { authority: "VENANGO", taxType: "WITHHOLDING TAX", amount: 0.0 }
    ],
    dataFields: [
      { name: "authority", type: "string" },
      { name: "taxtype", type: "string" },
      { name: "amount", type: "number" }
    ]
  },
  sidebar: {
    options: [
      {
        value: "readOnlyType1",
        label: "Read Only Type1",
        link: "ReadOnlyType1"
      },
      {
        value: "readOnlyType2",
        label: "Read Only Type2",
        link: "ReadOnlyType2"
      },
      
      {
        value: "modules",
        label: "Module Selector",
        link: "Modules"
      },
      { value: "welcome", label: "Home", link: "Welcome" },
      {
        value: "AddressOverrides",
        label: "Address Overrides",
        link: "AddressOverrides"
      },
      {
        value: "AuditLogViewer",
        label: "Audit Log Viewer",
        link: "AuditLogViewer"
      },
      { value: "companies", label: "Companies", link: "" },
      { value: "batchTest", label: "Batch Test", link: "" },
      { value: "connectToDataSets", label: "Connect To Data Sets", link: "" },
      {
        value: "customBackupRestore",
        label: "Custom Backup/Restore",
        link: ""
      },
      { value: "customFormulas", label: "Custom Formulas", link: "" },
      {
        value: "customGarnishmentFormulas",
        label: "Custom Garnishment Formulas",
        link: ""
      },
      { value: "customGarnishments", label: "Custom Garnishments", link: "" },
      { value: "customNexusData", label: "Custom Nexus Data", link: "" },
      {
        value: "customPaymentExceptions",
        label: "Custom Payment Exceptions",
        link: ""
      },
      {
        value: "customPayments",
        label: "Custom Payments",
        link: "CustomPayments"
      },
      {
        value: "customPayments2",
        label: "Custom Payments2",
        link: "CustomPayments2"
      },
      { value: "customTaxCodes", label: "Custom Tax Codes", link: "" },
      {
        value: "customTaxPaymentOverrides",
        label: "Custom Tax Payment Overrides",
        link: ""
      },
      { value: "cyclicBulletin", label: "Cyclic Bulletin", link: "" },
      { value: "dataSets", label: "Data Sets", link: "" },
      { value: "databaseLoad", label: "Database Load", link: "" },
      {
        value: "disposableOverrides",
        label: "Disposable Overrides",
        link: ""
      },
      { value: "employeeGroups", label: "Employee Groups", link: "" },
      {
        value: "garnishmentFormulaOverrides",
        label: "Garnishment Formula Overrides",
        link: ""
      },
      { value: "garnishmentGroups", label: "Garnishment Groups", link: "" },
      { value: "groupOverrides", label: "Group Overrides", link: "" },
      { value: "locatorBulletins", label: "Locator Bulletins", link: "" },
      {
        value: "loginsAndPermissions",
        label: "Logins and Permissions",
        link: ""
      },
      { value: "mapPaymentCodes", label: "Map Payment Codes", link: "" },
      { value: "mapTaxCodes", label: "Map Tax Codes", link: "" },
      { value: "mapTaxTypes", label: "Map Tax Types", link: "" },
      { value: "mappingTools", label: "Mapping Tools", link: "" },
      {
        value: "maritalStatusReport",
        label: "Marital Status Report",
        link: ""
      },
      { value: "messageViewer", label: "Message Viewer", link: "" },
      {
        value: "optionalRateOverrides",
        label: "Optional Rate Overrides",
        link: ""
      },
      {
        value: "paServicesTaxReport",
        label: "PA Services Tax Report",
        link: ""
      },
      { value: "paymentOverrides", label: "Payment Overrides", link: "" },
      { value: "pensionWhatIftest", label: "Pension What-if Test", link: "" },
      {
        value: "reciprocalOverrides",
        label: "Reciprocal Overrides",
        link: ""
      },
      {
        value: "regulatroyBulletins",
        label: "Regulatory Bulletins",
        link: ""
      },
      { value: "reportingTools", label: "Reporting Tools", link: "" },
      { value: "systemTools", label: "System Tools", link: "" },
      {
        value: "taxEffectiveDateOverrides",
        label: "Tax Effective Date Overrides",
        link: ""
      },
      { value: "taxHistory", label: "Tax History", link: "" },
      { value: "taxabilityReport", label: "Taxability Report", link: "" },
      { value: "taxLocator", label: "TaxLocator", link: "" },
      {
        value: "usPensionQuickFormulas",
        label: "U.S. Pension QuickFormulas",
        link: ""
      },
      { value: "usQuickFormulas", label: "U.S. QuickFormulas", link: "" },
      {
        value: "usWageAttachmentQuickFormulas",
        label: "U.S. WageAttachment QuickF..",
        link: ""
      },
      {
        value: "unemployementOverrides",
        label: "Unemployment Overrides",
        link: ""
      },
      { value: "userDataQueries", label: "User Data Queries", link: "" },
      { value: "whatIfTest", label: "What-if Test", link: "" },
      { value: "worksites", label: "Worksites", link: "" },
      {
        value: "defineFavoriteLinks",
        label: "Define Favorite Links",
        link: ""
      }
    ],
    favorites: [
      { value: "employeeGroups", label: "Employee Groups", link: "" },
      { value: "usQuickFormulas", label: "U.S. QuickFormulas", link: "" }
    ]
  },
  taxCodes: [
    {
      authority: "FEDERAL",
      title: "STATE",
      countyId: "",
      bsiCode: "00010000",
      taxCode: "BSI1234",
      preferred: "N"
    },
    {
      authority: "ALABAMA",
      title: "STATE",
      countyId: "",
      bsiCode: "00020000",
      taxCode: "BSI1235",
      preferred: "N"
    },
    {
      authority: "ALASKA",
      title: "STATE",
      countyId: "",
      bsiCode: "00040000",
      taxCode: "BSI1236",
      preferred: "N"
    },
    {
      authority: "ARIZONA",
      title: "STATE",
      countyId: "",
      bsiCode: "00050000",
      taxCode: "BSI1237",
      preferred: "N"
    },
    {
      authority: "ARKANSAS",
      title: "STATE",
      countyId: "",
      bsiCode: "0006000",
      taxCode: "BSI1238",
      preferred: "N"
    },
    {
      authority: "CALFORNIA",
      title: "STATE",
      countyId: "",
      bsiCode: "0007000",
      taxCode: "BSI1239",
      preferred: "N"
    },
    {
      authority: "COLORADO",
      title: "STATE",
      countyId: "",
      bsiCode: "0008000",
      taxCode: "BSI1210",
      preferred: "N"
    },
    {
      authority: "CONNECTICUT",
      title: "STATE",
      countyId: "",
      bsiCode: "0009000",
      taxCode: "BSI1211",
      preferred: "N"
    },
    {
      authority: "DELEWARE",
      title: "STATE",
      countyId: "",
      bsiCode: "0010000",
      taxCode: "BSI1212",
      preferred: "N"
    },
    {
      authority: "DISTRICT OF COLUMBIA",
      title: "STATE",
      countyId: "",
      bsiCode: "0011000",
      taxCode: "BSI1213",
      preferred: "N"
    }
  ],
  overrides: [
    { value: "addressOverrides", label: "Address Overrides", link: "" },
    {
      value: "unemploymentOverrides",
      label: "Unemployment Overrides",
      link: ""
    },
    {
      value: "optionalRateOverrides",
      label: "Optional Rate Overrides",
      link: ""
    },
    { value: "groupOverrides", label: "Group Overrides", link: "" },
    { value: "reciprocalOverrides", label: "Reciprocal Overridess", link: "" },
    { value: "paymentOverrides", label: "Payment Overrides", link: "" },
    {
      value: "customTaxPaymentOverrides",
      label: "Custom Tax Payment Overrides",
      link: ""
    },
    { value: "customNexusData", label: "Custom Nexus Data", link: "" },
    {
      value: "customPaymentExceptions",
      label: "Custom Payment Exceptions",
      link: ""
    }
  ],
  testMessages: [
    {
      runName: "This is a test message",
      runDate: "01/15/2020",
      runTime: "01:15:00",
      product: ""
    }
  ],
  unmappedAuthorites: []
};
