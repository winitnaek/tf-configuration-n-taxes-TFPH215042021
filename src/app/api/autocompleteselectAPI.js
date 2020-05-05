import {appError, getAdminErrorMessage}  from "bsiuilib";
import {autocompleteURL, reqInfo,buildAutoCompSelInput} from "../../base/utils/tfUtils";
import store from '../../tf_index';
class autocompleteSelectAPI {
  static getAutoCompleteData(fieldId, query) {    
    let autoCompInput = buildAutoCompSelInput(fieldId,store,query);
    let url = autocompleteURL(fieldId)      
    let tt = JSON.stringify(autoCompInput);
    return fetch(url, reqInfo(tt))
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