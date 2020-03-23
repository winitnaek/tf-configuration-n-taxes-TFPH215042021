import {
    fetchGridDataPending,
    fetchDeleteGridDataSuccess,
    fetchGridDataError
  } from "./gridDataActions";
  
  import {mockdatamap} from '../../base/utils/tfUtils';
  

  
  export function deleteGridData(pgid, rowid) {
    const data = { pgid, rowid };
    const url = `http://localhost:8000/api/getGridData/${rowid}`;
    
    const methodType = "DELETE"

    return dispatch => {
      dispatch(fetchGridDataPending());
      fetch(url, {
        method: methodType,
        headers: "",
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw res.error;
          }
          dispatch(fetchDeleteGridDataSuccess(payload));
          return res;
        })
        .catch(error => {
          dispatch(fetchGridDataError(error));
        });
    };
  }
     