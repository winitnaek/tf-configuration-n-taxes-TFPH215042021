import { combineReducers } from "redux";
import data from "../../app/home/payeeDetailsReducer";
import favoriteLinks from "../../app/home/favoriteLinksReducer";
import moduleAreaReducer from "../../app/home/moduleLinksReducer";
import links from "../../app/home/linksReducer";

const rootReducer = combineReducers({
  moduleAreas:moduleAreaReducer
});
export default rootReducer;
