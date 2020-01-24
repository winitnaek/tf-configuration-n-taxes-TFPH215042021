import {GET_FAVORITE_LINKS} from '../../constants/FavoriteLinksConstants';
import {SAVE_FAVORITE_LINKS} from '../../constants/FavoriteLinksConstants';

export const getFavoriteLinks = () => {
    return  {
        type: GET_FAVORITE_LINKS,
    }   
}

export const saveFavoriteLinks = (payload) => {
    console.log(payload)
    return  {
        type: SAVE_FAVORITE_LINKS,
        payload: payload
    }   
}

