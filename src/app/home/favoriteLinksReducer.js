import * as types from './favoriteLinksActions';
import initialState from '../../base/config/initialState';


const favoriteLinks = (state = initialState.favoriteAreas, action) => {
    switch(action.type) {
        case types.GET_FAVORITE_LINKS:
            // To do..  Need to fetch real data from api then return it
            return [
                ...state,
                {
                   // Need to implement react-thunk action call to get data from api
                }
            ]
        case types.SAVE_FAVORITE_LINKS:
            return [
                action.payload,
            ]
        default:
            return state
    }
}

export default favoriteLinks;