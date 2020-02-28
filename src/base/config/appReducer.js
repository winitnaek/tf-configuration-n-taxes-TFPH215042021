import { combineReducers } from "redux";
import formData from '../../app/home/actions/formReducer';
import favoriteLinks from '../../app/home/actions/favoriteLinksReducer';
import moduleAreaReducer from "../../app/home/actions/moduleLinksReducer";


const rootReducer = combineReducers({
  moduleAreas:moduleAreaReducer,
  formData,
  favoriteLinks
});
export default rootReducer;
