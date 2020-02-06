
import {fetchProductsPending, fetchProductsSuccess, fetchProductsError} from './detailActions';

const url = `http://localhost:8000/api/getDetails/`

export function fetchDetails() {
    console.log(`Made to to the getdetails action function`)
    return dispatch => {
        dispatch(fetchProductsPending());
        fetch(url)
        .then(res => res.json())
        .then(res => { 
            console.log(res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchProductsSuccess(res))
            return res.details;
        })
        .catch(error => {
            console.log(error)
            dispatch(fetchProductsError(error));
        })
    }
}

export default fetchDetails;
