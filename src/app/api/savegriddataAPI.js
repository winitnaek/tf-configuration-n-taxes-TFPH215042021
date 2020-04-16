import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {saveUrl, reqInfo,buildSaveInput} from "../../base/utils/tfUtils";
import store from '../../tf_index';
class savegriddataAPI {
  static saveGridData(pageid, data, mode) {
    console.log("Made it to the savegriddata api");
    console.log(pageid);
    let url = saveUrl(pageid);
    console.log(url);
    let formInput = buildSaveInput(pageid, store, data, mode);
    let tt = JSON.stringify(formInput);
    return fetch(url, reqInfo(tt))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to Save Grid Data Record." + ADMIN_ERROR_MSG;
          return new AppError(errorMsg, errorCode);
        }
      })
      .catch((error) => {
        return error;
      });
    /*return fetch(url, reqInfo(tt), mode)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to Save Grid Data Record. " + ADMIN_ERROR_MSG;
          return new AppError(errorMsg, errorCode);
        } 
      })
      .catch(error => {
        return error;
      });*/
  }
}

export default savegriddataAPI;