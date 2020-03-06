import { combineReducers } from "redux";
import formData from '../../app/reducers/formReducer';
import favoriteLinks from '../../app/home/actions/favoriteLinksReducer';
import moduleAreaReducer from "../../app/home/actions/moduleLinksReducer";
import formFilterData from '../../app/reducers/filterFormReducer';

const rootReducer = combineReducers({
  moduleAreas:moduleAreaReducer,
  formData,
  formFilterData,
  favoriteLinks
});
export default rootReducer;
