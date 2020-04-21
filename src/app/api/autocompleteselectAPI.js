import {appError, getAdminErrorMessage}  from "bsiuilib";
import {autocompleteURL, reqInfo} from "../../base/utils/tfUtils";

class autocompleteSelectAPI {
  static getAutoCompleteData(pgid, query) {    
    let url = autocompleteURL(pgid)      
    return fetch(url, reqInfo(null))
    .then((response) => {
      if (response.ok) {
        return response.json(); 
      } else {
        var errorCode = response.status;
        var errorMsg = "Unable to retrieve Auto Complete Data. " + getAdminErrorMessage();
        return new appError(errorMsg, errorCode);
      } 
    })
    .then((responseJSON) => {
       return responseJSON;
    })
    .catch(error => {
        return error;
    });
  }
}

export default autocompleteSelectAPI;