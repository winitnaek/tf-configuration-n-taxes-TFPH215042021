import {appError, getAdminErrorMessage}  from "bsiuilib";
import {getUrl, reqInfo} from "../../base/utils/tfUtils";
import {getMappingToolsCountsInput} from '../../base/utils/mappingtools/mapTaxTypesUtil';
class GeneralApi {
  static getApiData(id) {
    let url = getUrl(id);
    return fetch(url, reqInfo(null))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to get Data Records. " + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
  static getPageData(id) {
    let url = getUrl(id);
    let formInput = getMappingToolsCountsInput(id);
    let tt = JSON.stringify(formInput);
    return fetch(url, reqInfo(tt))
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to get Data Records. " + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .catch(error => {
        return error;
      });
  }
}
export default GeneralApi;