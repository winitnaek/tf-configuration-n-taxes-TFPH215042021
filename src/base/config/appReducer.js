import { combineReducers } from "redux";
import gridData from '../../app/home/actions/gridDataReducer';
import formData from '../../app/home/actions/formReducer';
import moduleAreaReducer from "../../app/home/actions/moduleLinksReducer";


const rootReducer = combineReducers({
  moduleAreas:moduleAreaReducer,
  gridData,
  formData
});
export default rootReducer;
