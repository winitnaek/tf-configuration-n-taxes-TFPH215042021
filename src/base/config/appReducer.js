import { combineReducers } from "redux";
import data from "../../app/home/payeeDetailsReducer";
import favoriteLinks from "../../app/home/favoriteLinksReducer";
import gridData from '../../app/home/gridDataReducer'
import moduleAreaReducer from "../../app/home/moduleLinksReducer";
import links from "../../app/home/linksReducer";

const rootReducer = combineReducers({
  moduleAreas:moduleAreaReducer,
  gridData
});
export default rootReducer;
