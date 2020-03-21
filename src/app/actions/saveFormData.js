import {
  fetchGridDataPending,
  fetchSaveFormDataSuccess,
  fetchGridDataError
} from "./gridDataActions";

let url = `http://localhost:8000/api/getGridData/`;

export function saveFormData(pgid, payload, mode, rowid) {
  const data = { pgid, payload };
  let methodType;
  if (mode === "new") {
    methodType = "POST";
  } else if (mode === "edit") {
    methodType = "PUT";
    url = url + rowid
  }
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
        dispatch(fetchSaveFormDataSuccess(payload));
        return res;
      })
      .catch(error => {
        dispatch(fetchGridDataError(error));
      });
  };
}
