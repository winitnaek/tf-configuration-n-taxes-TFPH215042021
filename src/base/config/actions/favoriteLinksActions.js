import {GET_FAVORITE_LINKS , SAVE_FAVORITE_LINKS} from '../../constants/LinksConstants';


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

