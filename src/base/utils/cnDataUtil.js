import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
/**
 * customNexusCompanyData
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function buildCustomNexusCompanyDataSaveInput(pageId, formData, editMode, state) {
  const filterFormData = state.formFilterData;
  let parentInfo = state.parentInfo;
  let authtyCode = 'BSI' + formData.taxCode1;
  if (editMode == 1) {
    authtyCode = 'BSI' + formData.taxCode1;
  } else if (editMode == 2) {
    authtyCode = formData.taxCode1;
  }
  let input = {
    id : {
        pageId: pageId,
        dataset:appDataset(),
        userId: appUserId(),
        company : parentInfo.company,
        authority1 : authtyCode,
      },  
     
      dcCourtesy : formData.dcCourtesy === "" ? false : formData.dcCourtesy,
      startdate : moment( formData.startdate).format("MM/DD/YYYY"),
      rescind : moment(formData.rescind).format("MM/DD/YYYY"),
      editMode : editMode
 };
  return input;
}