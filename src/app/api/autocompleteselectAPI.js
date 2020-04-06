import AppError from "../../base/utils/AppError";
import { ADMIN_ERROR_MSG } from "../../base/utils/AppErrorEvent";
import {autocompleteURL, reqInfo} from "../../base/utils/tfUtils";

class autocompleteselectAPI {
  static getAutoCompleteData(pgid, query) {    
    console.log('Made it to the autocomplete api')
    let url = autocompleteURL(pgid)      
    return fetch(url, reqInfo(null))
      .then(response => {
        if (response.ok) {
          console.log("Autocomplete data response ", response.json());
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