import {fetchLinksPending, fetchLinksSuccess, fetchLinksError} from './linksActions';

const url = `http://localhost:8000/api/getLinks/`

export function fetchLinks() {
    console.log(`Made to to the getdetails action function`)
    return dispatch => {
        dispatch(fetchLinksPending());
        fetch(url)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchLinksSuccess(res))
            return res.data;
        })
        .catch(error => {
            console.log(error)
            dispatch(fetchLinksError(error));
        })
    }
}

export default fetchLinks;