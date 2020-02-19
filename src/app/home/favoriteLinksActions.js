import {
  GET_FAVORITE_LINKS,
  SAVE_FAVORITE_LINKS,
  FETCH_FAVORTIE_LINKS_ERROR,
  FETCH_FAVORITE_LINKS_SUCCESS,
  FETCH_FAVORITE_LINKS_PENDING
<<<<<<< HEAD:src/app/home/actions/favoriteLinksActions.js
} from "../../../base/constants/LinksConstants";
=======
} from "../../base/constants/LinksConstants";
>>>>>>> TF_UI_PRE_SEC:src/app/home/favoriteLinksActions.js

export function fetchFavoriteLinksPending() {
  return {
    type: FETCH_FAVORITE_LINKS_PENDING
  };
}

export function fetchFavoriteLinksSuccess(details) {
  console.log(details);
  return {
    type: FETCH_FAVORITE_LINKS_SUCCESS,
    data: details
  };
}

export function fetchFavoriteLinksError(error) {
  return {
    type: FETCH_FAVORTIE_LINKS_ERROR,
    error: error
  };
}

export const saveFavoriteLinks = payload => {
  return {
    type: SAVE_FAVORITE_LINKS,
    payload: payload
  };
};
