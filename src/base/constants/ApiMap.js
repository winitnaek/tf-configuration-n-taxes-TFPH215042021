import {
  GET_TAX_HISTORY,
  GET_TAX_HISTORY_REPORT,
  GET_PA_SERVICES_TAX_REPORT,
  GET_PA_SERVICE_TAX_REPORT,
  GET_USER_DATA_QUERIES,
  GET_CUSTOM_PAYMENTS_LIST,
  GET_CUSTOM_TAX_CODES,
  GET_ALL_POPULATED_V3_STATES,
  GET_EXPERIENCE_RATES,
  GET_SAMPLE_DATE_FIELD_DATA,
  GET_SUPPLEMENTAL_INFO_FOR_TAX,
  GET_RECENT_USAGE,
  GET_CUSTOM_FORMULAS,
  GET_WORKSITES,
  GET_WORKSITES_LOCATIONS,
  GET_COMPANIES,
  GET_CUSTOM_TAX_FORMULAS,
  GET_CUSTOM_TAX_FORMULA,
  // Async field APIs
  GET_ALL_TAXCODES_AUTOCOMPLETE,
  GET_ALL_TAXTYPES_AUTOCOMPLETE,
  GET_PAYMENT_AUTOCOMPLETE_MOCKDATA,
  GET_ALL_AUTHORITY_CODE_AUTOCOMPLETE,
  GET_EXEMPT_MILITARY_LOCATION_AUTOCOMPLETE_MOCKDATA,
  GET_PRINCIPAL_STATE_EMPLOYMENT_AUTOCOMPLETE_MOCKDATA,
  GET_PLACE_CODE_AUTOCOMPLETE,
  GET_SCHOOL_DISTRICT_AUTOCOMPLETE,
  GET_GARNISMENT_FORMULA_AUTOCOMPLETE,
  GET_GARNISMENT_GROUP_CODE_AUTOCOMPLETE,
  GET_CUSTOM_GARNISMENT_FORMULA_AUTOCOMPLETE,
  GET_COUNTY_AUTOCOMPLETE,
  GET_GROUP_AUTOCOMPLETE,
  GET_USER_TAX_CODE_AUTOCOMPLETE_MOCKDATA,
  GET_GROUP_CODE_AUTOCOMPLETE,
  GET_TAX_CODE_UDQ_AUTOCOMPLETE_MOCKDATA,
  GET_CUSTOM_TYPEOF_DATA,
  GET_PAYMENT_CODE_AUTOCOMPLETE_MOCKDATA,
  GET_TAX_CODE_RECIPROCATE_AUTOCOMPLETE_MOCKDATA,
  GET_TAX_CODE_OVERRIDDEN_AUTOCOMPLETE_MOCKDATA,
  GET_NON_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
  GET_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
  GET_CALCULATION_METHOD_AUTOCOMPLETE_MOCKDATA,
  GET_WAGE_REPORTING_METHOD_AUTOCOMPLETE_MOCKDATA,
  GET_RESIDENT_STATE_AUTOCOMPLETE_MOCKDATA,
  GET_CUSTOM_GARNISMENT_CODE_AUTOCOMPLETE,
  DELTE_CUSTOM_PAYMENT,
  DELETE_CUSTOM_TAX_CODES,
  SAVE_CUSTOM_PAYMENT,
  SAVE_CUSTOM_TAX_CODES,
  SAVE_CUSTOM_FORMULAS,
  SAVE_WORKSITES_LOCATIONS,
  SAVE_WORKSITES,
  GET_CUSTOM_TAXCODES_AUTOCOMPLETE,
  GET_TYPEOF_DATA,
  GET_UDQ_AUTOCOMPLETE,
  SAVE_COMPANY,
  DELETE_COMPANY,
  GET_CUSTOM_GARNISHMENT_CODES,
  SAVE_CUSTOM_GARNISHMENT_CODE,
  DELETE_CUSTOM_GARNISHMENT_CODE,
  GET_EMPLOYEE_GROUPS,
  SAVE_EMPLOYEE_GROUP,
  DELETE_EMPLOYEE_GROUP,
  GET_GARNISHMENT_GROUPS,
  DELETE_GARNISHMENT_GROUP,
  SAVE_GARNISHMENT_GROUP,
  SAVE_CUSTOM_FORMULA,
  DELETE_CUSTOM_FORMULA,
  GENERATE_MARITAL_REPORT,
  GET_TAX_EFFECTIVE_DATE_OVERRIDES,
  DELETE_TAX_EFFECTIVE_DATE_OVERRIDE,
  SAVE_TAX_EFFECTIVE_DATE_OVERRIDE,
  GENERATE_BATCH_TEST_REPORT,
  GET_CUSTOM_GARNISMENT_FORMULAS,
  DELETE_WORKSITES_LOCATIONS,
  SAVE_SUPPRESS_MESSAGES,
  GET_SUPPRESSED_MESSAGES,
  GARNISHMENT_FORMULAS_OVERRIDE,
  GARNISHMENT_FORMULA_OVERRIDES,
  GET_DATASETS,
  GET_PERMISSIONS,
  SAVE_PERMISSIONS,
  PERMISSION_FOR,
  CUSTOM_GARNISHMENT_FORMULA,
  GARNISHMENT,
  AUTHORITY_NAME,
  GET_MESSAGE_VIEWER,
  GET_MESSAGES_VIEWER,
  GET_MESSAGES_VIEWER_TYPE,
  GET_MESSAGES_RUN_LIST_BY_DATE,
  DELETE_ALL_MESSAGES,
  DELETE_ALL_MESSAGES_BY_RUN_ID,
  GET_TAXTYPES_AUTOCOMPLETE,
  GET_TAXCODES_AUTOCOMPLETE,
  GET_TAXTYPES,
  WHAT_IF_EMP,
  SAVE_WHATIF_EMP,
  WHAT_IF_TAXES,
  WHAT_IF_GARNISHMENTS,
  WHAT_IF_DEDUCTION_BENEFITS,
  SAVE_WHAT_IF_DEDUCTION_BENEFITS,
  GET_BENEFITS_PLANS,
  TAX_LOCATOR,
  WHAT_IF_LOCATIONS,
  WAGE_CODE_DESC,
  GET_PENSION_WHAT_IF,
  GET_WHAT_IF_WAGES,
  DELETE_WAGE_DETAILS,
  SAVE_WAGE_DETAILS,
  GET_WHAT_IF_EMPLOYEES,
  GET_TAX_LOCATOR,
  GET_RUN_LOCATOR_SERVICE,
  GET_ADRRESS_FROM_WORKSITES,
  DELETE_GARN_DED_BENEFITS,
  SAVE_WHATIF_GARNISHMENT,
  DELETE_WHATIF_GARNISHMENT,
  SAVE_ADDRESS_FROM_WORKSITES,
  SAVE_TAX_LOCATOR,
  SAVE_AS_TAX_LOCATOR,
  VIEW_PDF_TAX_LOCATOR,
  VIEW_PDF_RUN_LOCATOR_SERVICE,
  SAVE_MANAGE_LOCATIONS,
  DELETE_TAX_LOCATOR,
  DELETE_WHATIF_LOCATIONS,
  GET_GROUP_OVERRIDE,
  GET_GROUP_OVERRIDES,
  GROUP_OVERRIDE_AUTHORITY,
  GROUP_OVERRIDE_FORMULA,
  VIEW_PDF_GROUP_OVERRIDE,
  SAVE_GROUP_OVERRIDE,
  DELETE_GROUP_OVERRIDE,
  DELETE_WHAT_IF_EMPLOYEES,
  DELETEALL_WHAT_IF_EMPLOYEES,
  WHATIF_GARN_AUTOCOMPLETE_AUTHS,
  WHATIF_GARN_AUTOCOMPLETE_TAXTYPES,
  WHATIF_GARN_AUTOCOMPLETE_FORMULAS,
  GET_PAYMENT_OVERRIDE,
  DELETE_PAYMENT_OVERRIDE,
  SAVE_PAYMENT_OVERRIDE,
  GET_ADDRESS_OVERRIDES,
  DELETE_ADDRESS_OVERRIDES,
  SAVE_ADDRESS_OVERRIDES,
  GET_REDUNDANT_ADDRESS_OVERRIDES,
  GENERATE_WHATIF_EMPLOYEE_DETAIL_PDF,
  GET_UM_EMPLOYMENT_OVERRIDE_LIST,
  GET_UM_EMPLOYMENT_OVERRIDE_DELETE,
  GET_UM_EMPLOYMENT_OVERRIDE_SAVE,
  GET_CUSTOM_GARNISHMENT_FORMULAS,
  GET_WHATIF_AUTOCOMPLETE_TAXTYPES,
  DELETE_WHATIF_EMPLOYEE_TAX,
  SAVE_WHATIF_EMPLOYEE_TAX,
  GET_RECIPROCAL_OVERRIDES,
  GET_RECIPROCAL_OVERRIDE,
  GET_TAX_CODE_TOBE_OVERRIDEN_STATE,
  GET_RESIDENT_TAX_TYPE_STATE,
  GET_TAX_CODE_TO_RECIPROCATE_STATE,
  GET_NON_RESIDENT_TAX_TYPE_STATE,
  GET_TAX_CODE_TOBE_OVERRIDEN_LOCAL,
  GET_RESIDENT_TAX_TYPE_LOCAL,
  GET_TAX_CODE_TO_RECIPROCATE_LOCAL,
  GET_NON_RESIDENT_TAX_TYPE_LOCAL,
  DELETE_RECIPROCAL_OVERRIDE,
  SAVE_RECIPROCAL_OVERRIDE,
  GET_CONNECT_TO_DATA_SETS,
  DELETE_GARNISHMENT_FORMULA_OVERRIDE,
  GET_GARN_FORMULA_OVERD_TAXTYPE_AUTOCOMP,
  SAVE_GARNISHMENT_FORMULA_OVD,
  GARNISHMENT_FORMULA_OVERRIDE_PDF,
  GET_OPTIONAL_RATE_OVERRIDES,
  GET_OPTIONAL_RATE_OVRD_AUTO_COMP_AUTH,
  GET_OPTIONAL_RATE_OVRD_AUTO_COMP_TAXT,
  GET_OPTIONAL_RATE_OVRD_AUTO_COMP_FORM,
  GET_OPTIONAL_RATE_OVRD_BSI_WAGE,
  DELETE_OPTIONAL_RATE_OVERRIDE,
  SAVE_OPTIONAL_RATE_OVERRIDE,
  DELETE_CUSTOM_GARNISHMENT_FORMULA,
  SAVE_CUSTOM_GARNISHMENT_FORMULA,
  GENERATE_CUSTOM_GARNISHMENT_FORMULA_PDF,
  AUTOCOMPLETE_CUSTOM_GARNISHMENT,
  GET_CUSTOM_PAYMENT,
  DELETE_ALL_WHHATIF_EMPLOYEE_GARN_DEDBENEFITS,
  GET_WHATIF_EMPLOYEEDETAIL_PDF,
  GET_WHATIF_EMPLOYEEGARN_PDF,
  CALCULATE_WHATIF_TAXES_PDF,
  GET_PENSION_WHAT_IF_TAXES,
  SAVE_PENSION_WHAT_IF_TEST,
  GENERATE_PENSION_WHAT_IF_TEST,
  GENERATE_PENSION_WHAT_IF_TEST_TAXES,
  DELETE_PENSION_WHAT_IF_TEST,
  GENERATE_PENSION_WHAT_IF_TEST_CALCULATE_TAXES,
  AUTOCOMPLETE_PENSION_TAX_TYPE,
  SAVE_PENSION_WHAT_IF_TEST_TAXES,
  DELETE_PENSION_WHAT_IF_TEST_TAXES,
  GET_CUSTOM_NEXUS_COMPANY_DATA,
  GET_CUSTOM_PAYMENT_EXCEPTIONS,
  SAVE_CUSTOM_PAYMENT_EXCEPTION,
  DELETE_CUSTOM_PAYMENT_EXCEPTION,
  CUSTOM_NEXUS_DATA_AUTHORITY_AUTOCOMPLETE,
  SAVE_CUSTOM_NEXUS_DATA,
  DELETE_CUSTOM_NEXUS_DATA,
  GENERATE_WHAT_IF_EMP_PDF,
  VIEW_PDF_WAGE_DETAILS,
  GENERATE_WHAT_IF_EMP_TAXES_PDF,
  VIEW_PDF_WHAT_IF_GARNISHMENT,
  GET_DISPOSABLE_OVERRIDE_LIST,
  AUTO_COMP_DISP_OVRD_AUTHS,
  AUTO_COMP_DISP_OVRD_GARNS,
  AUTO_COMP_DISP_OVRD_CODES,
  SAVE_DISPOSABLE_OVERRIDE,
  DELETE_DISPOSABLE_OVERRIDE,
  VIEW_DISPOSABLE_OVERRIDE,
  PENSION_WHATIF_AUTOCOMPLETE_AUTHS,
  GET_COMPANY_AUTOCOMPLETE,
  GET_CUSTOM_TAX_PAYMENT_OVERRIDE,
  CUSTOM_TAX_PAY_OVERRIDE_AUTOCOMPLETE,
  CUSTOM_TAX_PAY_OVERRIDE_TAXTYPE_AUTOCOMPLETE,
  DELETE_CUSTOM_TAX_PAY_OVERRIDE,
  SAVE_CUSTOM_TAX_PAY_OVERRIDE,
  DELETE_ALL_WHAT_IF_MANAGE_LOCATIONS,
  DELETE_ALL_TAX_LOCATOR,
  GET_MAPPING_TAX_CODES,
  GET_MAPPING_TAX_CODES_FOR_AUTHORITY,
  SAVE_MAPPING_TAX_CODES_FOR_AUTHORITY,
  GET_TAX_CODE_USAGE,
  GET_MAP_TAX_TYPES,
  GET_MAP_TAX_TYPES_FOR_AUTH,
  CREATE_NEW_TAXTYPE,
  UPDATE_PREFERRED_STATUS_TAXTYPE,
  DELETE_TAXTYPE_MAPPING,
  CREATE_DEFAULT_MAPPING_ALLTAXTYPE,
  GET_MAP_PAYMENT_CODE,
  GET_MAP_PAYMENT_CODE_FOR_PAYCODE,
  SAVE_MAP_PAYMENT_CODE_FOR_PAYCODE,
  DELETE_TAX_CODE_USAGE,
  DEFAULT_MAPPING_FOR_TAX_CODE_AUTH,
  DEFAULT_MAPPING_FOR_TAX_CODE_STATE_AUTH,
  DEFAULT_MAPPING_FOR_MAP_TAX_CODES_AUTH,
  DEFAULT_MAPPING_FOR_MAP_TAX_CODE_STATE_AUTH,
  UPDATE_PREFERRED_STATUS_TAXCODE,
  DEFAULT_MAPPING_FOR_ALL_TAX_TYPE,
  DEFAULT_MAPPING_FOR_ALL_PAY_CODES,
  DEFAULT_MAPPING_FOR_PAYMENT_CODE,
  GET_TAX_TYPE_USAGE,
  GET_PAYMENT_CODE_USAGE,
  GET_MAPPING_TOOLS_COUNTS,
  CONNECT_TO_DATASET_URL,
  GET_COUNTY_NAME_AUTOCOMPLETE,
  GET_ADDRESS_PLACE_NAME_AUTOCOMPLETE,
  GET_ADDRESS_SCHOOL_DISTRICT_AUTOCOMPLETE,
  DELETE_ALL_PENSION_WHAT_IF_TEST
} from './ServiceUrls';

export const metaDataApiMap = {
  whatifEmp: GET_WHAT_IF_EMPLOYEES,
  whatifTaxes:'/WhatIfService/getWhatIfTaxes',
  whatifGarnishment:'/WhatIfService/getWhatIfEmployeeGarnishments',
  groupOverride: GET_GROUP_OVERRIDE,
  groupOverrides: GET_GROUP_OVERRIDES,
  taxLocator: GET_TAX_LOCATOR,
  whatifLocations: WHAT_IF_LOCATIONS,
  runLocatorService: GET_RUN_LOCATOR_SERVICE,
  addressFromWorksite: GET_ADRRESS_FROM_WORKSITES,
  whatifDeductionBenefits:WHAT_IF_DEDUCTION_BENEFITS,
  wageDetails: GET_WHAT_IF_WAGES,
  pensionWhatIfTest: GET_PENSION_WHAT_IF,
  bSITaxes: GET_USER_DATA_QUERIES,
  customOverridesForAuthority: GET_USER_DATA_QUERIES,
  populatedV3States: GET_ALL_POPULATED_V3_STATES,
  bSITaxes: GET_USER_DATA_QUERIES,
  companies: GET_USER_DATA_QUERIES,
  customGarnishmentFormula: GET_CUSTOM_GARNISMENT_FORMULAS,
  customGarnishments: GET_USER_DATA_QUERIES,
  customOverridesForAuthority: GET_USER_DATA_QUERIES,
  customTaxabilityForAuthority: GET_USER_DATA_QUERIES,
  customTaxes: GET_USER_DATA_QUERIES,
  disposableOverrides: GET_USER_DATA_QUERIES,
  employeeGroups: GET_USER_DATA_QUERIES,
  garnishmentDisposableWages: GET_USER_DATA_QUERIES,
  garnishmentFormulaOverride: GET_USER_DATA_QUERIES,
  garnishmentGroups: GET_USER_DATA_QUERIES,
  garnishmentParameters: GET_USER_DATA_QUERIES,
  garnishmentRequiringFilingStatus: GET_USER_DATA_QUERIES,
  maritalStatus: GET_USER_DATA_QUERIES,
  minimumAgeTaxes: GET_USER_DATA_QUERIES,
  monthlyQuarterlyTaxType: GET_USER_DATA_QUERIES,
  orderedPercentGarnishments: GET_USER_DATA_QUERIES,
  residentWorkValidation: GET_USER_DATA_QUERIES,
  supplementalMethods: GET_USER_DATA_QUERIES,
  taxabilityForAuthority: GET_USER_DATA_QUERIES,
  taxAuthorities: GET_USER_DATA_QUERIES,
  taxTypes: GET_USER_DATA_QUERIES,
  unemployment: GET_USER_DATA_QUERIES,
  validTaxFormulas: GET_USER_DATA_QUERIES,
  wageLimitsByAuthorityAndTaxType: GET_USER_DATA_QUERIES,
  allMappedPayCodes: GET_USER_DATA_QUERIES,
  allMappedTaxCodes: GET_USER_DATA_QUERIES,
  allMappedTaxCodesWithCounty: GET_USER_DATA_QUERIES,
  allMappedTaxTypes: GET_USER_DATA_QUERIES,
  statementOfExemptionAuthorities: GET_USER_DATA_QUERIES,
  customPayments: GET_CUSTOM_PAYMENTS_LIST,
  customTaxCodes: GET_CUSTOM_TAX_CODES,
  allBSIPlans: GET_USER_DATA_QUERIES,
  experienceRates: GET_EXPERIENCE_RATES,
  sampleDateFields: GET_SAMPLE_DATE_FIELD_DATA,
  supplementalMethods: GET_SUPPLEMENTAL_INFO_FOR_TAX,
  recentUsage: GET_RECENT_USAGE,
  customFormulas: GET_CUSTOM_FORMULAS,
  worksites: GET_WORKSITES,
  worksiteCompanies: GET_WORKSITES_LOCATIONS,
  companies: GET_USER_DATA_QUERIES,
  customTaxFormulas: GET_CUSTOM_TAX_FORMULAS,
  selectSamplePage: GET_CUSTOM_TAX_FORMULA,
  // TODO: Update below Urls after get the actual Urls
  employeeGroup: GET_EMPLOYEE_GROUPS,
  garnishmentGroup: GET_GARNISHMENT_GROUPS,
  addressOverrides: GET_ADDRESS_OVERRIDES,
  customGarnishment: GET_CUSTOM_GARNISHMENT_CODES,
  taxEffectiveDateOverrides: GET_TAX_EFFECTIVE_DATE_OVERRIDES,
  auditLogViewer: GET_CUSTOM_TAX_CODES,
  logins: GET_CUSTOM_TAX_CODES,
  company: GET_COMPANIES,
  customNexusData: GET_COMPANIES,
  unemploymentOverrides: GET_COMPANIES,
  unemploymentCompanyOverrides: GET_UM_EMPLOYMENT_OVERRIDE_LIST,
  optionalRateOverrides: GET_COMPANIES,
  optionalRateOverride: GET_OPTIONAL_RATE_OVERRIDES,
  customNexusCompanyData: GET_CUSTOM_NEXUS_COMPANY_DATA,
  disposableRateOverrides: GET_GARNISHMENT_GROUPS,
  disposableOverride: GET_DISPOSABLE_OVERRIDE_LIST,
  customGarnishmentFormulas: GET_CUSTOM_FORMULAS,
  customGarnishmentTaxFormulas: GET_CUSTOM_GARNISHMENT_FORMULAS,
  customPaymentExceptions: GET_CUSTOM_PAYMENTS_LIST,
  customPaymentTaxExceptions: GET_CUSTOM_PAYMENT_EXCEPTIONS,
  customTaxPaymentOverrides: GET_CUSTOM_FORMULAS,
  customTaxPaymentOverride: GET_CUSTOM_TAX_PAYMENT_OVERRIDE,
  paymentOverrides: GET_EMPLOYEE_GROUPS,
  paymentOverride: GET_PAYMENT_OVERRIDE,
  reciprocalOverrides: GET_CUSTOM_FORMULAS,
  reciprocalOverride: GET_CUSTOM_TAX_FORMULAS,
  viewDisposableOverride: VIEW_DISPOSABLE_OVERRIDE,
  messageViewer: GET_MESSAGE_VIEWER,
  messagesViewer: GET_MESSAGES_VIEWER,
  messageViewListByMessageType: GET_MESSAGES_VIEWER_TYPE,
  getMessageRunListByFilterDate: GET_MESSAGES_RUN_LIST_BY_DATE,
  paServicesTaxReport: GET_PA_SERVICES_TAX_REPORT,
  paServiceTaxReport: GET_PA_SERVICE_TAX_REPORT,
  // Mapping Tools
  mappingTools: GET_MAPPING_TOOLS_COUNTS,
  mapPaymentCodes: GET_MAP_PAYMENT_CODE,
  createDefaultPC:DEFAULT_MAPPING_FOR_ALL_PAY_CODES,
  mapPaymentCode: GET_MAP_PAYMENT_CODE_FOR_PAYCODE,
  createMapPC:DEFAULT_MAPPING_FOR_PAYMENT_CODE,
  mapTaxCodes: GET_MAPPING_TAX_CODES,
  createDefault: DEFAULT_MAPPING_FOR_TAX_CODE_AUTH,
  createMap: DEFAULT_MAPPING_FOR_TAX_CODE_STATE_AUTH,
  mapTaxCode: GET_MAPPING_TAX_CODES_FOR_AUTHORITY,
  mapTaxTypes: GET_MAP_TAX_TYPES,
  createDefaultTT:DEFAULT_MAPPING_FOR_ALL_TAX_TYPE,
  mapTaxType: GET_MAP_TAX_TYPES_FOR_AUTH,
  createDefaultAuthority: DEFAULT_MAPPING_FOR_MAP_TAX_CODES_AUTH,
  createMapAuthority: DEFAULT_MAPPING_FOR_MAP_TAX_CODE_STATE_AUTH,
  taxCodeUsage: GET_TAX_CODE_USAGE,
  taxTypeUsage: GET_TAX_TYPE_USAGE,
  paymentCodeUsage: GET_PAYMENT_CODE_USAGE,
  taxHistory: GET_TAX_HISTORY,
  taxHistoryReport: GET_TAX_HISTORY_REPORT,
  messageToSuppress: GET_SUPPRESSED_MESSAGES,
  // Garnishnishment Formula Override
  garnishmentFormulasOverride: GET_GARNISHMENT_GROUPS,
  garnishmentFormulaOverrides: GARNISHMENT_FORMULA_OVERRIDES,
  garnishmentFormulaOverrideDetails: GET_USER_DATA_QUERIES,
  dataSets: GET_DATASETS,
  permissions: GET_PERMISSIONS,
  selectSamplePage: GET_SAMPLE_DATE_FIELD_DATA,
  findRedundantOverrides:GET_REDUNDANT_ADDRESS_OVERRIDES,
  reciprocalOverrides: GET_RECIPROCAL_OVERRIDES,
  reciprocalOverride: GET_RECIPROCAL_OVERRIDE,
  connectToDataSets: GET_CONNECT_TO_DATA_SETS,
  pensionWhatIfTaxes: GET_PENSION_WHAT_IF_TAXES,
};

export const viewPDFApiMap = {
  taxLocator: VIEW_PDF_TAX_LOCATOR,
  runLocatorService: VIEW_PDF_RUN_LOCATOR_SERVICE,
  groupOverride: VIEW_PDF_GROUP_OVERRIDE,
  garnishmentFormulaOverrides:GARNISHMENT_FORMULA_OVERRIDE_PDF,
  customGarnishmentTaxFormulas:GENERATE_CUSTOM_GARNISHMENT_FORMULA_PDF,
  pensionWhatIfTest: GENERATE_PENSION_WHAT_IF_TEST,
  pensionWhatIfTaxes: GENERATE_PENSION_WHAT_IF_TEST_TAXES,
  whatifTaxes: GENERATE_WHAT_IF_EMP_TAXES_PDF,
  whatifEmp: GENERATE_WHAT_IF_EMP_PDF,
  wageDetails: VIEW_PDF_WAGE_DETAILS,
  whatifGarnishment: VIEW_PDF_WHAT_IF_GARNISHMENT
}

export const viewPDFButtonBar = {
  pensionWhatIfTaxes: GENERATE_PENSION_WHAT_IF_TEST_CALCULATE_TAXES,
  whatifTaxes:CALCULATE_WHATIF_TAXES_PDF,
  whatifGarnishment:CALCULATE_WHATIF_TAXES_PDF
}

export const viewCalcPDFApiMap = {
  whatifTaxes:CALCULATE_WHATIF_TAXES_PDF
}
 
export const deleteDataApiMap = {
  customPayments: DELTE_CUSTOM_PAYMENT,
  customTaxCodes: DELETE_CUSTOM_TAX_CODES,
  addressOverrides: DELETE_ADDRESS_OVERRIDES,
  taxEffectiveDateOverrides: DELETE_TAX_EFFECTIVE_DATE_OVERRIDE,
  customTaxPaymentOverride: DELTE_CUSTOM_PAYMENT,
  messageViewer: DELETE_ALL_MESSAGES,
  messagesViewer: DELETE_ALL_MESSAGES_BY_RUN_ID,
  auditLogViewer: DELTE_CUSTOM_PAYMENT,
  company: DELETE_COMPANY,
  customGarnishment: DELETE_CUSTOM_GARNISHMENT_CODE,
  employeeGroup: DELETE_EMPLOYEE_GROUP,
  garnishmentGroup: DELETE_GARNISHMENT_GROUP,
  customTaxFormulas: DELETE_CUSTOM_FORMULA,
  customFormulas: DELETE_CUSTOM_FORMULA,
  worksiteCompanies: DELETE_WORKSITES_LOCATIONS,
  wageDetails: DELETE_WAGE_DETAILS,
  whatifDeductionBenefits:DELETE_GARN_DED_BENEFITS,
  whatifGarnishment:DELETE_WHATIF_GARNISHMENT,
  taxLocator: DELETE_TAX_LOCATOR,
  whatifLocations: DELETE_WHATIF_LOCATIONS,
  groupOverride: DELETE_GROUP_OVERRIDE,
  whatifEmp:DELETE_WHAT_IF_EMPLOYEES,
  paymentOverride:DELETE_PAYMENT_OVERRIDE,
  unemploymentCompanyOverrides:GET_UM_EMPLOYMENT_OVERRIDE_DELETE,
  whatifTaxes:DELETE_WHATIF_EMPLOYEE_TAX,
  reciprocalOverride: DELETE_RECIPROCAL_OVERRIDE,
  garnishmentFormulaOverrides:DELETE_GARNISHMENT_FORMULA_OVERRIDE,
  optionalRateOverride:DELETE_OPTIONAL_RATE_OVERRIDE,
  customGarnishmentTaxFormulas:DELETE_CUSTOM_GARNISHMENT_FORMULA,
  pensionWhatIfTest: DELETE_PENSION_WHAT_IF_TEST,
  pensionWhatIfTaxes: DELETE_PENSION_WHAT_IF_TEST_TAXES,
  customPaymentTaxExceptions:DELETE_CUSTOM_PAYMENT_EXCEPTION,
  customNexusCompanyData: DELETE_CUSTOM_NEXUS_DATA,
  disposableOverride:DELETE_DISPOSABLE_OVERRIDE,
  customTaxPaymentOverride: DELETE_CUSTOM_TAX_PAY_OVERRIDE,
  taxTypeUsage:DELETE_TAXTYPE_MAPPING,
  taxCodeUsage: DELETE_TAX_CODE_USAGE,
  paymentCodeUsage: '/MappingToolsService/deletePaymentCodeMapping'
};
export const deleteAllDataApiMap = {
  whatifEmp:DELETEALL_WHAT_IF_EMPLOYEES,
  whatifDeductionBenefits:DELETE_ALL_WHHATIF_EMPLOYEE_GARN_DEDBENEFITS,
  whatifLocations: DELETE_ALL_WHAT_IF_MANAGE_LOCATIONS,
  taxLocator: DELETE_ALL_TAX_LOCATOR,
  pensionWhatIfTest: DELETE_ALL_PENSION_WHAT_IF_TEST

};
export const updateDataApiMap ={
  mapTaxType:UPDATE_PREFERRED_STATUS_TAXTYPE,
  mapTaxCode:UPDATE_PREFERRED_STATUS_TAXCODE
}
export const saveDataApiMap = {
  customPayments: SAVE_CUSTOM_PAYMENT,
  customTaxCodes: SAVE_CUSTOM_TAX_CODES,
  addressOverrides: SAVE_ADDRESS_OVERRIDES,
  customFormulas: SAVE_CUSTOM_FORMULA,
  worksites: SAVE_WORKSITES,
  worksiteCompanies: SAVE_WORKSITES_LOCATIONS,
  customTaxFormulas: SAVE_CUSTOM_FORMULA,
  optionalRateOverride: SAVE_OPTIONAL_RATE_OVERRIDE,
  unemploymentOverrides: SAVE_CUSTOM_FORMULAS,
  taxEffectiveDateOverrides: SAVE_TAX_EFFECTIVE_DATE_OVERRIDE,
  customTaxPaymentOverride: SAVE_CUSTOM_FORMULAS,
  company: SAVE_COMPANY,
  customGarnishment: SAVE_CUSTOM_GARNISHMENT_CODE,
  employeeGroup: SAVE_EMPLOYEE_GROUP,
  garnishmentGroup: SAVE_GARNISHMENT_GROUP,
  messageToSuppress: SAVE_SUPPRESS_MESSAGES,
  permissions: SAVE_PERMISSIONS,
  whatifEmp:SAVE_WHATIF_EMP,
  whatifDeductionBenefits:SAVE_WHAT_IF_DEDUCTION_BENEFITS,
  wageDetails: SAVE_WAGE_DETAILS,
  whatifGarnishment:SAVE_WHATIF_GARNISHMENT,
  taxLocator: SAVE_TAX_LOCATOR,
  whatifLocations: SAVE_MANAGE_LOCATIONS,
  addressFromWorksite: SAVE_ADDRESS_FROM_WORKSITES,
  groupOverride: SAVE_GROUP_OVERRIDE,
  paymentOverride:SAVE_PAYMENT_OVERRIDE,
  unemploymentCompanyOverrides:GET_UM_EMPLOYMENT_OVERRIDE_SAVE,
  whatifTaxes:SAVE_WHATIF_EMPLOYEE_TAX,
  reciprocalOverride: SAVE_RECIPROCAL_OVERRIDE,
  garnishmentFormulaOverrides:SAVE_GARNISHMENT_FORMULA_OVD,
  customGarnishmentTaxFormulas:SAVE_CUSTOM_GARNISHMENT_FORMULA,
  pensionWhatIfTest: SAVE_PENSION_WHAT_IF_TEST,
  pensionWhatIfTaxes: SAVE_PENSION_WHAT_IF_TEST_TAXES,
  customPaymentTaxExceptions:SAVE_CUSTOM_PAYMENT_EXCEPTION,
  customNexusCompanyData: SAVE_CUSTOM_NEXUS_DATA,
  disposableOverride:SAVE_DISPOSABLE_OVERRIDE,
  customTaxPaymentOverride: SAVE_CUSTOM_TAX_PAY_OVERRIDE,
  mapTaxCode: SAVE_MAPPING_TAX_CODES_FOR_AUTHORITY,
  mapTaxType:CREATE_NEW_TAXTYPE,
  mapPaymentCode: SAVE_MAP_PAYMENT_CODE_FOR_PAYCODE
};

export const saveAsAPIMap = {
  taxLocator: SAVE_AS_TAX_LOCATOR,
}

export const generateApiMap = {
  maritalStatusReport: GENERATE_MARITAL_REPORT,
  batchTest: GENERATE_BATCH_TEST_REPORT
};

export const autoCompleteApiMap = {
  wageReportingMethod: GET_WAGE_REPORTING_METHOD_AUTOCOMPLETE_MOCKDATA,
  calculationMethod: GET_CALCULATION_METHOD_AUTOCOMPLETE_MOCKDATA,
  nonResidenceTaxType: GET_NON_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
  residenceTaxType: GET_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
  taxCodeReciprocate: GET_TAX_CODE_RECIPROCATE_AUTOCOMPLETE_MOCKDATA,
  userTaxCode: GET_USER_TAX_CODE_AUTOCOMPLETE_MOCKDATA,
  taxability: GET_TAXCODES_AUTOCOMPLETE,
  taxType: GET_ALL_TAXTYPES_AUTOCOMPLETE,
  taxTypeALL:GET_TAXTYPES_AUTOCOMPLETE,
  taxTypes:GET_TAXTYPES,
  garnishParamTaxType: GET_UDQ_AUTOCOMPLETE,
  companyCode: GET_COMPANY_AUTOCOMPLETE,
  riskClass: GET_UDQ_AUTOCOMPLETE,
  taxCode: GET_ALL_TAXCODES_AUTOCOMPLETE,
  taxCodeUnEmp:GET_UDQ_AUTOCOMPLETE,
  authorityCode: GET_ALL_AUTHORITY_CODE_AUTOCOMPLETE,
  authorityCodeList: GET_ALL_AUTHORITY_CODE_AUTOCOMPLETE,
  authorityCodegdw: GET_UDQ_AUTOCOMPLETE,
  authorityCodegp:GET_UDQ_AUTOCOMPLETE,
  authorityCodeNoall:GET_UDQ_AUTOCOMPLETE,
  placeCode: GET_PLACE_CODE_AUTOCOMPLETE,
  schoolDistrict: GET_SCHOOL_DISTRICT_AUTOCOMPLETE,
  garnishmentFormula: GET_GARNISMENT_FORMULA_AUTOCOMPLETE,
  garnishmentGroupCode: GET_UDQ_AUTOCOMPLETE,
  customTaxName: GET_CUSTOM_GARNISMENT_FORMULA_AUTOCOMPLETE,
  customGarnishmentCode: GET_CUSTOM_GARNISMENT_CODE_AUTOCOMPLETE,
  county: GET_COUNTY_AUTOCOMPLETE,
  groupAsync: GET_GROUP_AUTOCOMPLETE,
  groupCode: GET_UDQ_AUTOCOMPLETE,
  garnishmentGroup: GET_UDQ_AUTOCOMPLETE,
  garnishmentGrp: GET_GARNISHMENT_GROUPS,
  taxCodeUdq: GET_TAX_CODE_UDQ_AUTOCOMPLETE_MOCKDATA,
  typeOfData: GET_TYPEOF_DATA,
  userTax: GET_UDQ_AUTOCOMPLETE,
  paymentCode: GET_PAYMENT_CODE_AUTOCOMPLETE_MOCKDATA,
  taxCodeOverridden: GET_TAX_CODE_OVERRIDDEN_AUTOCOMPLETE_MOCKDATA,
  formula: GET_UDQ_AUTOCOMPLETE,
  residentState: GET_RESIDENT_STATE_AUTOCOMPLETE_MOCKDATA,
  exemptMilitaryLocation: GET_EXEMPT_MILITARY_LOCATION_AUTOCOMPLETE_MOCKDATA,
  principalStateEmployment: GET_PRINCIPAL_STATE_EMPLOYMENT_AUTOCOMPLETE_MOCKDATA,
  payment: GET_PAYMENT_AUTOCOMPLETE_MOCKDATA,
  customTaxCode: GET_CUSTOM_TAXCODES_AUTOCOMPLETE,
  customTypeOfData: GET_CUSTOM_TYPEOF_DATA,
  employeeGroupCode: GET_UDQ_AUTOCOMPLETE,
  bsiAuth: GET_UDQ_AUTOCOMPLETE,
  permissionFor: PERMISSION_FOR,
  customGarnishmentFormula: CUSTOM_GARNISHMENT_FORMULA,
  garnishmentType: GET_GARN_FORMULA_OVERD_TAXTYPE_AUTOCOMP,
  authorityName: AUTHORITY_NAME,
  employeeGroup: GET_EMPLOYEE_GROUPS,
  empGroup:GET_EMPLOYEE_GROUPS,
  company: GET_COMPANIES,
  exemptMilitaryLocation:'/WhatIfService/getWhatIfUSStates',
  residentState:'/WhatIfService/getWhatIfUSStates',
  principalStateOfEmp:'/WhatIfService/getWhatIfUSStates',
  remncd:GET_BENEFITS_PLANS,
  wageCodedesc: WAGE_CODE_DESC,
  authority: GROUP_OVERRIDE_AUTHORITY,
  formulaTitle: GROUP_OVERRIDE_FORMULA,
  usrauth:WHATIF_GARN_AUTOCOMPLETE_AUTHS,
  usrtxtyp:WHATIF_GARN_AUTOCOMPLETE_TAXTYPES,
  gform:WHATIF_GARN_AUTOCOMPLETE_FORMULAS,
  authTaxCode:GET_UDQ_AUTOCOMPLETE,
  planId:GET_UDQ_AUTOCOMPLETE,
  taxTypeUnemp:GET_UDQ_AUTOCOMPLETE,
  formulaUnemp:GET_UDQ_AUTOCOMPLETE,
  usrTax: AUTOCOMPLETE_CUSTOM_GARNISHMENT,
  usrauthcd:WHATIF_GARN_AUTOCOMPLETE_AUTHS,
  bsiauth:PENSION_WHATIF_AUTOCOMPLETE_AUTHS,
  bsitaxtyp:GET_WHATIF_AUTOCOMPLETE_TAXTYPES,
  formulawhatif:WHATIF_GARN_AUTOCOMPLETE_FORMULAS,
  taxCodeToBeOverridden: GET_TAX_CODE_TOBE_OVERRIDEN_STATE,
  residentTaxType: GET_RESIDENT_TAX_TYPE_STATE,
  taxCodeToReciprocate: GET_TAX_CODE_TO_RECIPROCATE_STATE,
  nonresidentTaxType: GET_NON_RESIDENT_TAX_TYPE_STATE,
  taxCodeToBeOverriddenlocal: GET_TAX_CODE_TOBE_OVERRIDEN_LOCAL,
  residentTaxTypelocal: GET_RESIDENT_TAX_TYPE_LOCAL,
  taxCodeToReciprocatelocal: GET_TAX_CODE_TO_RECIPROCATE_LOCAL,
  nonresidentTaxTypelocal: GET_NON_RESIDENT_TAX_TYPE_LOCAL,
  orOverrideAuth:GET_OPTIONAL_RATE_OVRD_AUTO_COMP_AUTH,
  orOverrideTaxType:GET_OPTIONAL_RATE_OVRD_AUTO_COMP_TAXT,
  orOverrideFormula:GET_OPTIONAL_RATE_OVRD_AUTO_COMP_FORM,
  orOverrideBsiWage:GET_OPTIONAL_RATE_OVRD_BSI_WAGE,
  taxTypeUserTaxType: AUTOCOMPLETE_PENSION_TAX_TYPE,
  pensionFormula: WHATIF_GARN_AUTOCOMPLETE_FORMULAS,
  taxCode1: CUSTOM_NEXUS_DATA_AUTHORITY_AUTOCOMPLETE,
  dispOvrdAuthTaxCode:AUTO_COMP_DISP_OVRD_AUTHS,
  garnishType:AUTO_COMP_DISP_OVRD_GARNS,
  dispOvrdPaymentCode:AUTO_COMP_DISP_OVRD_CODES,
  authorityname: CUSTOM_TAX_PAY_OVERRIDE_AUTOCOMPLETE,
  taxTypesPymtOvrd: CUSTOM_TAX_PAY_OVERRIDE_TAXTYPE_AUTOCOMPLETE,
  countyName: GET_COUNTY_NAME_AUTOCOMPLETE,
  placeName: GET_ADDRESS_PLACE_NAME_AUTOCOMPLETE,
  sdName: GET_ADDRESS_SCHOOL_DISTRICT_AUTOCOMPLETE
};

export const CONNECT_TO_DATA_SET = CONNECT_TO_DATASET_URL;
