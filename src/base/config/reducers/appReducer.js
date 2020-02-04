import {combineReducers} from 'redux';
import data from './payeeDetailsReducer';
import favoriteLinks from './favoriteLinksReducer';
import moduleLinks from './moduleLinksReducer';


const rootReducer = combineReducers({
data, favoriteLinks, moduleLinks

});
export default rootReducer;