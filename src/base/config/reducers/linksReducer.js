import {FETCH_LINKS_PENDING, FETCH_LINKS_SUCCESS, FETCH_LINKS_ERROR} from '../actions/detailActions';

const initialState = {
    pending: false,
    links: [],
    error: null
}

export function LinksReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_LINKS_PENDING: 
            return {
                 ...state,
                pending: true
            }
            break;
            
        case FETCH_LINKS_SUCCESS:
            console.log(action)
            return {
                ...state,
                pending: false,
                links: action
            }
            break;
        case FETCH_LINKS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
            break;
        default: 
            return state;
    }
}

export const getLinks = state => state.links;
export const getLinksPending = state => state.pending;
export const getLinksError = state => state.error;

export default LinksReducer;