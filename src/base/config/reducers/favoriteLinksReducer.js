import { getFavoriteLinks, saveFavoriteLinks } from '../actions/favoriteLinksActions';
import initialState from '../initialState';


const favoriteLinks = (state = initialState.sidebar.favorites, action) => {
    console.log('Made it to the reducer')
    console.log(action)
    switch(action.type) {
        case 'GET_FAVORITE_LINKS':
            console.log('This action type was found')
            // To do..  Need to fetch real data from api then return it
            return [
                ...state,
                {
                   // Need to implement react-thunk action call to get data from api
                }
            ]
        case 'saveFavoriteLinks'://'SAVE_FAVORITE_LINKS':
            console.log('saving a new favorite')
            console.log(action.payload)
            return [
                action.payload,
            ]
        default:
            console.log(`This action was not found`)
            console.log(state)
            return state
    }
}

export default favoriteLinks;