import {combineReducers} from 'redux';
import data from './payeeDetailsReducer';
import favoriteLinks from './favoriteLinksReducer'


const rootReducer = combineReducers({
data, favoriteLinks

});
export default rootReducer;