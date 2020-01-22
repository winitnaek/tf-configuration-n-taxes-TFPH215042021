import {combineReducers} from 'redux';
import payeeDetails from './payeeDetailsReducer';

const rootReducer = combineReducers({
payeeDetails,
});
export default rootReducer;