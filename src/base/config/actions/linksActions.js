// import { fetchLinks } from "./getLinksActions";
import {FETCH_LINKS_ERROR, FETCH_LINKS_PENDING, FETCH_LINKS_SUCCESS} from "../../constants/LinksConstants";


export function fetchLinksPending() {
    console.log('Setting to pending')
    return {
      
        type: FETCH_LINKS_PENDING
    }
}

export function fetchProductsSuccess(payload) {
    console.log(payload)
    return {
        type: FETCH_LINKS_SUCCESS,
        details: payload
    }
}

export function fetchProductsError(error) {
    return {
        type: FETCH_LINKS_ERROR,
        error: error
    }
}