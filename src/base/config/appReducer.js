import { combineReducers } from "redux";
import data from "../../app/home/payeeDetailsReducer";
import favoriteLinks from "../../app/home/favoriteLinksReducer";
import gridData from '../../app/home/gridDataReducer';
import editData from '../../app/home/editDataReducer';
import moduleAreaReducer from "../../app/home/moduleLinksReducer";
import links from "../../app/home/linksReducer";


const rootReducer = combineReducers({
  moduleAreas:moduleAreaReducer,
  gridData,
  editData
});
export default rootReducer;
