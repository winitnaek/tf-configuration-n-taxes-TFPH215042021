import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
/**
 * pensionWhatIfTest
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function buildPensionWhatIfTestSaveInput(pageId, formData, editMode, state) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false";
  }else if (editMode == 2) 
  {
      editRec = "true";
  }
  let input = {
     pageId: pageId,     
     dataset:appDataset(),
     userId: appUserId(),
     empName: 'EMPLOYEE CODE' + formData.empCode,
     empCode: formData.empCode,
     checkDate: moment(formData.checkDate).format("MM/DD/YYYY"),
     regPen: "P", 
     empGroup: formData.empGroup,
     companyCode: formData.companyCode,
     paymentType: formData.paymentType,
     payFreq: formData.payFreq,
     ytdPayPeriod: formData.ytdPayPeriod,
     estAnnualGrossAmt: formData.estAnnualGrossAmt,
     grossUpInd: formData.grossUpInd,
     rollOverElg: formData.rollOverElg,
     rollOverMonths: formData.rollOverMonths,
     companyPlan: formData.companyPlan,
     netWages: formData.netWages,
     disburseDate: moment(formData.disburseDate).format("MM/DD/YYYY"),
     editRec: editRec
 };
  return input;
}

/**
 * buildPensionWhatIfTestDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildPensionWhatIfTestDelete(pageId, formData, editMode, state) {
  let input = {
    pageId: pageId,     
     dataset:appDataset(),
     userId: appUserId(),
     empName: 'EMPLOYEE CODE' + formData.empCode,
     empCode: formData.empCode,
     checkDate: moment(formData.checkDate).format("MM/DD/YYYY"),
     regPen: "P", 
     empGroup: formData.empGroup,
     companyCode: formData.companyCode,
     paymentType: formData.paymentType,
     payFreq: formData.payFreq,
     ytdPayPeriod: formData.ytdPayPeriod,
     estAnnualGrossAmt: formData.estAnnualGrossAmt,
     grossUpInd: formData.grossUpInd,
     rollOverElg: formData.rollOverElg,
     rollOverMonths: formData.rollOverMonths,
     companyPlan: formData.companyPlan,
     netWages: formData.netWages,
     disburseDate: moment(formData.disburseDate).format("MM/DD/YYYY")
  };
  return input;
}

/**
 * generatePensionWhatIfTestTaxesPDF
 * @param {*} pageId 
 * @param {*} store 
 * @param {*} formdata 
 * @param {*} mode 
 */
export function generatePensionWhatIfTaxesPDF(pageId, filterFormData, formData, mode){
  let input= {
    btxttax : {
      id : {
        dataset:appDataset(),
        regpen : "P",
        empcode: filterFormData.empCode,
        chkdt: filterFormData.checkDate,
        taxn: formData.taxn
      },
    btxtaxc : {
      id : null,
      btxauth : {
        bsiauth : formData.usrauthcd,
        name : filterFormData.name      
      }     
    },    
    ppdwgs : formData.payPeriodWage,
    aytdwgs : formData.actualYearToDateWages,
    ytdwgs : formData.yearToDateWage,
    ytdtax : formData.yearToDateTax,
    regexmamt : formData.exemptionAmount,
    addexmamt : formData.additionalExemptionAmount,
    basewage : formData.baseWages,
    "regex" : formData.exemptions,
    "addamt" : formData.additionalAmount,
    "ppdtax" : formData.payPeriodTax,
    pptdwgs : formData.payPeriodToDateWages,
    "mtdwgs" : formData.monthToDateWages,
  "mtdtax" : formData.monthToDateTax,
  "qtdwgs" : formData.quarterToDateWages,
  qtdtax : formData.quarterToDateTax,
  "prsex" : formData.personalExemptions,
  "depex" : formData.dependentExemptions,
  "addex" : formData.numberOfAdditionalExemptions,
  "addtxrt" : formData.additionalTaxRate,
  "mart" : formData.maritalStatus,
  "grossannp" : 0.00,
  "rndind" : formData.roundingIndicator,
  "supcd" : formData.supplementalCode,
  "addnwi" : formData.additionalNonwageIncome,
  "taxcredit" : formData.taxCreditAmount,
  "formula" : formData.pensionFormula,   
  "bsitaxtyp" : formData.taxTypeUserTaxType,   
  "usrauthcd" : 'BSI' + formData.usrauthcd
   
  },
  btxtaxt : {
    taxtype : formData.taxTypeUserTaxType,
    taxname : filterFormData.taxName  
  },
  "btxform" : {
    "id" : {
      "bsiauth" : null,
      "taxtype" : null,
      "effective" : null,
      "formula" : 0
    },
   "title" : "WITHHOLDING FORMULA-FED"
  }, 
  "editMode" : 1, 
  "taxcodetype" : "B", 
  fymj :formData.withholdingForm,
    };
    return input;
  }

  /**
 * pensionWhatIfTaxes
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function buildPensionWhatIfTaxesSaveInput(pageId, formData, editMode, state) {
  const filterFormData = state.formFilterData;
  let authtyCode = 'BSI' + formData.usrauthcd;
  if (editMode == 1) {
    authtyCode = 'BSI' + formData.usrauthcd;
  } else if (editMode == 2) {
    authtyCode = formData.usrauthcd;
  }
  let input = {
    btxttax : {
      id : {
        dataset:appDataset(),
        regpen : "P",
        empcode: filterFormData.empCode,
        chkdt: filterFormData.checkDate,
        taxn: formData.taxn
      },
      btxtaxc : {
        id : null,
        btxauth : {
          bsiauth : formData.usrauthcd,
          name : filterFormData.name       
        }     
      },   
      "ppdwgs" : formData.payPeriodWage,
      "aytdwgs" : formData.actualYearToDateWages,
      "ytdwgs" : formData.yearToDateWage,
      "ytdtax" : formData.yearToDateTax,
      "regexmamt" : formData.exemptionAmount,
      "addexmamt" : formData.additionalExemptionAmount,
      "basewage" : formData.baseWages,
      "regex" : formData.exemptions,
      "addamt" : formData.additionalAmount,
      "ppdtax" : formData.payPeriodTax,
      "pptdwgs" : formData.payPeriodToDateWages,
      "mtdwgs" : formData.monthToDateWages,
      "mtdtax" : formData.monthToDateTax,
      "qtdwgs" : formData.quarterToDateWages,
      "qtdtax" : formData.quarterToDateTax,
      "prsex" : formData.personalExemptions,
      "depex" : formData.dependentExemptions,
      "addex" : formData.numberOfAdditionalExemptions,
      "addtxrt" : formData.additionalTaxRate,
      "mart" : formData.maritalStatus,
      "grossannp" : 0.00,
      "rndind" : formData.roundingIndicator,
      "supcd" : formData.supplementalCode,
      "addnwi" : formData.additionalNonwageIncome,
      "taxcredit" : formData.taxCreditAmount,
      "formula" : formData.pensionFormula,   
      "bsitaxtyp" : formData.taxTypeUserTaxType,   
      "usrauthcd" : authtyCode 
     
    },
    "btxtaxt" : {
      "taxtype" : formData.taxTypeUserTaxType,
      "taxname" : filterFormData.taxName  
    },
    "btxform" : {
      "id" : {
        "bsiauth" : null,
        "taxtype" : null,
        "effective" : null,
      }
    
    },
    editMode : editMode, 
    fymj : formData.withholdingForm
 };
  return input;
}

/**
 * generatePensionWhatIfTestCalculateTaxesPDF
 * @param {*} pageId 
 * @param {*} store 
 * @param {*} formdata 
 * @param {*} mode 
 */
export function generatePensionWhatIfCalculateTaxesPDF(pageId, filterFormData, formdata, mode){
  let input= {
    dataset:appDataset(),
    userId: appUserId(),   
    empCode: filterFormData.empCode,
    checkDate: filterFormData.checkDate,
    regPen: "P"
  };
  
  return input;

}

/**
 * DeletePensionWhatIfTestTaxes
 * @param {*} pageId 
 * @param {*} store 
 * @param {*} formdata 
 * @param {*} mode 
 */
export function buildPensionWhatIfTestTaxesDelete(pageId, formData, editMode, state){
  const filterFormData = state.formFilterData;
  let input= {
   btxttax: {
    id : {
      dataset:appDataset(),
        regpen : "P",
        empcode: filterFormData.empCode,
        chkdt: filterFormData.checkDate,
        taxn: formData.taxn
  }
    }      
  };
  
  return input;

}
/**
 * generatePensionWhatIfTestPDF
 * @param {*} pageId 
 * @param {*} store 
 * @param {*} formdata 
 * @param {*} mode 
 */
export function generatePensionWhatIfTestPDF(pageId, filterFormData, formdata, mode){
  let input= {
    pageId: pageId,      
    dataset:appDataset(),
    userId: appUserId(),  
    empName: formdata.empName,
    empCode: formdata.empCode,
    checkDate: formdata.checkDate,
    regPen: formdata.regPen, 
    empGroup: formdata.empGroup,
    companyCode: formdata.companyCode,
    paymentType:formdata.paymentType,
    payFreq: formdata.payFreq,
    ytdPayPeriod: formdata.ytdPayPeriod,
    estAnnualGrossAmt: formdata.estAnnualGrossAmt,
    grossUpInd: formdata.grossUpInd,
    rollOverElg: formdata.rollOverElg,
    rollOverMonths: formdata.rollOverMonths,
    companyPlan: formdata.companyPlan,
    netWages: formdata.netWages,
    disburseDate: formdata.disburseDate
  };
  
  return input;

}