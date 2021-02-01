import {appError, getAdminErrorMessage}  from "bsiuilib";
import {viewPDFUrl, reqInfo, buildPdfInput,viewPDFUrlButtonBar, viewCalcPDFUrl} from "../../base/utils/tfUtils";
import store from '../../tf-configuration-n-taxes';
class getPdfDataAPI {
  static getPdfData(pageid, data, mode, fromBar) {
    let url;
    if(fromBar) {
     url = viewPDFUrlButtonBar(pageid);
    } else {
     url = viewPDFUrl(pageid);
    }
    let formInput = buildPdfInput(pageid, store, data, mode, fromBar);
    let tt = JSON.stringify(formInput);
    return fetch(url, reqInfo(tt))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable toGET PDF." + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .catch((error) => {
        return error;
      });
  }
  static getPdf(pageid,pdfInput, calculatePdf) {
    let url=''
    if(calculatePdf){
      url = viewCalcPDFUrl(pageid);
    }else{
      url = viewPDFUrl(pageid);
    }
    let formInput = pdfInput;
    let tt = JSON.stringify(formInput);
    return fetch(url, reqInfo(tt))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          var errorCode = response.status;
          var errorMsg = "Unable toGET PDF." + getAdminErrorMessage();
          return new appError(errorMsg, errorCode);
        }
      })
      .catch((error) => {
        return error;
      });
  }
}

export default getPdfDataAPI;