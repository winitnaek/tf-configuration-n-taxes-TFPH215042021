
import {fetchGridDataPending, fetchGridDataSuccess, fetchGridDataError} from './gridDataActions';

const url =  " '../../../../uitests/tempGridData/CUSTOM_PAYMENTS_MOCKDTA.json'"          //`http://localhost:8000/api/getGridData/`

export function fetchGridData() {
    return dispatch => {
        dispatch(fetchGridDataPending());
        fetch(url)
        .then(res => res.json())
        .then(res => { 
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchGridDataSuccess(res))
            return res.details;
        })
        .catch(error => {
            dispatch(fetchGridDataError(error));
        })
    }
}
