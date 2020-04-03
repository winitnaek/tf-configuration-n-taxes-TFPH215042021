import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {autoCompleteUrl, reqInfo} from "../../base/utils/tfUtils";

class autocompleteselectAPI {
  static getAutoCompleteData(pgid, id, query) {    
    console.log('Made it to the autocomplete api')
    console.log(pgid)
    let url =    autoCompleteUrl(id)      
    let tt = JSON.stringify(data);
    return fetch(url, reqInfo(tt), mode)
      .then(response => {
        if (response.ok) {
          return response.json(); 
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable to retrieve Auto Complete Data. " + ADMIN_ERROR_MSG;
          return new AppError(errorMsg, errorCode);
        } 
      })
      .catch(error => {
        return error;
      });
  }
}

export default autocompleteselectAPI;