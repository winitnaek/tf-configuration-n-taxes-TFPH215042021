import {appError, getAdminErrorMessage}  from "bsiuilib";
import {generateReportUrl, reqInfo,buildMaritalStatusInput, buildBatchTestInput} from "../../base/utils/tfUtils";
import store from '../../tf-configuration-n-taxes';
class generateReportApi {
  static generate(pageid, data) {
    let url = generateReportUrl(pageid);
    let formInput;
    if(pageid === "batchTest")
    {
        formInput = buildBatchTestInput(pageid, store, data);
    } else {
        formInput = buildMaritalStatusInput(pageid, store, data);
    }
    let tt = JSON.stringify(formInput);
    return fetch(url, reqInfo(tt))
    .then(response => {
        if (response.ok) {
            var isFirefox = typeof InstallTrigger !== 'undefined';
            console.log('isFirefox : ' +isFirefox);
            if(isFirefox){
                console.log('Here 1========>');
                console.log('response')
                console.log(response)
            //   return OUTPUT_MESSAGES === fileType ? response.json() : new Response(response.body);
            return response.json();
            }else{
                console.log('Here 0========>No FF, Chrome or Edge===>');
              //  return OUTPUT_MESSAGES === fileType ? response.json() : response;
            return response.json();
            }
          
        } else {
            var errorCode = response.status;
            var errorMsg = 'Failed to get Company Audit Document. ';
            return response.json();
        }
    })
    .then(response => { 
        console.log('Here 2========>');
    //   return OUTPUT_MESSAGES === fileType ? response : response.blob();
    return response; 
    })
    .catch(error => {
        return error;
    });
  }
}

export default generateReportApi;