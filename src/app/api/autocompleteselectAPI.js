import { appError, getAdminErrorMessage } from 'bsiuilib';
import { autocompleteURL, reqInfo, buildAutoCompSelInput } from '../../base/utils/tfUtils';
import store from '../../tf_index';
class autocompleteSelectAPI {
  static getAutoCompleteData(fieldId, query, formValues={}) {
    let autoCompInput = buildAutoCompSelInput(fieldId, store, query, formValues);
    let url = autocompleteURL(fieldId);
    let tt = JSON.stringify(autoCompInput);
    return fetch(url, reqInfo(tt))
      .then(async response => {
        if (response.ok) {
          if (isMock()) {
            const data = await response.json();
            return Promise.resolve(mockData[query] ? mockData[query](data) : data);
          }
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = 'Unable to retrieve Auto Complete Data. ' + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .then(responseJSON => {
        return responseJSON;
      })
      .catch(error => {
        return error;
      });
  }
}

export default autocompleteSelectAPI;

export const mockData = {
  '1- Subtract Deduction Flat Amount': data => data.slice(0, 5),
  '3- Subtract Deduction Dependent Amount * Number of Dependents': data => data.slice(3, 8),
  '001- ALBANY': data => data.slice(0, 4)
};
