import { fetchProducts } from "./getGridData";



export const FETCH_GRID_DATA_PENDING = 'FETCH_GRID_DATA_PENDING';
export const FETCH_GRID_DATA_SUCCESS = 'FETCH_GRID_DATA_SUCCESS';
export const FETCH_GRID_DATA_ERROR = 'FETCH_GRID_DATA_ERROR';

export function fetchGridDataPending() {
    return {
        type: FETCH_GRID_DATA_PENDING
    }
}

export function fetchGridDataSuccess(details) {
    console.log(details)
    return {
        type: FETCH_GRID_DATA_SUCCESS,
        data: details
    }
}

export function fetchGridDataError(error) {
    return {
        type: FETCH_GRID_DATA_ERROR,
        error: error
    }
}

