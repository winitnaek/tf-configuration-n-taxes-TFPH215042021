import {FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../actions/detailActions';

const initialState = {
    pending: false,
    details: [],
    error: null
}

export function productsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING:   
            return {
         
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            console.log(action)
            return {
               
                pending: false,
                data: action.data
            }
        case FETCH_PRODUCTS_ERROR:
            return {
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getProducts = state => state;
export const getProductsPending = state => state.pending;
export const getProductsError = state => state.error;

export default productsReducer;