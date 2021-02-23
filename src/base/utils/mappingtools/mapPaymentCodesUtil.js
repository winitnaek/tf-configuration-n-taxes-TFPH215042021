import moment from "moment";
import store from "../../../tf-configuration-n-taxes";
import {setParentData} from '../../../app/actions/parentDataActions';
/**
 * mapPaymentCodesparent
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function mapPaymentCodesParentGridInput(pageid, formData, stDate, enDate,state) {
  let input = {
    dataset:appDataset(),
    mapMode:formData.paymentModes,
    pattern:formData.paymentCode || '',
    codeType:formData.earningTypes || ''
  };
  return input;
}

/**
 * createDefaultPC
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function createDefaultPCLinkInput(pageid) {
  let input = {
    dataset:appDataset(),
    userId: appUserId(),
  };
  return input;
}

/**
 * createMapPC
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function createMapPCLinkInput(pageid,formFilterData) {
  let input = {
    dataset:appDataset(),
    userId: appUserId(),
    pmtUsrCode: formFilterData.payment
  };
  return input;
}

/**
 * mapPaymentCode
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function mapPaymentCodeGridInput(pageid, filterData, stDate, enDate,state) {
    let parentInfo = state.parentInfo;
    let input = {
      dataset:appDataset(),
      pmtUsrCode: parentInfo.payment,
      pmtUsrName:parentInfo.name
    };
    return input;
}

/**
 * mapPaymentCode
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildMapPaymentCodeSaveInput(pageId, formData, editMode, state) {
    let parentInfo = state.parentInfo;
    
    let input = {
      dataset: appDataset(),
      userId: appUserId(),
      planCode: formData.payCode,
      pmtUsrCode: parentInfo.payment,
      pmtUsrName:parentInfo.name,
      codeType:parentInfo.payType
     }
    return input;
  }

  /**
 * buildpaymentCodeUsageDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildPaymentCodeUsageDelete(pageId, formData, editMode, state) {
  let parentInfo = state.parentInfo;
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    pmtUsrCode:parentInfo.userCode
  };
  return input;
}