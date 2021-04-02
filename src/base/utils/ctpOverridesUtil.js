import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';

/**
 * buildCustomTaxPaymentOverrideDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildCustomTaxPaymentOverrideDelete(pageId, formData, editMode, state) {
    let input = {
        pageId: pageId,     
        dataset:appDataset(),
        userId: appUserId(),
        taxCode: formData.taxCode,
        startdate: formData.startdate,
        endDate: formData.stopdate,
        authCode: formData.authorityname,
        taxType: formData.taxTypesPymtOvrd
      };
      return input;
    }

    /**
 * buildCustomTaxPaymentOverrideSave
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildCustomTaxPaymentOverrideSaveInput(pageId, formData, editMode, state) {
    const filterFormData = state.formFilterData;
    let parentInfo = state.parentInfo;
    let input = 
    {
       id : {
        dataset:appDataset(),
        userId: appUserId(),
        taxcode : parentInfo.taxCode,
        startdate : moment(formData.startdate).format("MM/DD/YYYY"),
         
       },
          
       stopdate : moment(formData.stopdate).format("MM/DD/YYYY"),
       bsiauth : editMode == 1 ? formData.authorityname : formData.bsiauth,
       taxtype : editMode == 1 ? formData.taxTypesPymtOvrd : formData.taxtype,
       editMode : editMode
    
   };
   return input;
}

  /**
 * gettaxTypesPymtOvrdInput
 * @param {*} input 
 * @param {*} formValues 
 */
export function getTaxTypesPymtOvrdInput(input,formValues){
    let additionalFields = {
      authCode : formValues["authorityname"].authId,
      startdate: moment(formValues.startdate).format("MM/DD/YYYY")
    }
    return Object.assign(input, additionalFields);
  }