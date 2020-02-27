
import  {SET_FORM_DATA, CLOSE_FORM} from '../../../base/constants/ActionTypes'//       base/constants/ActionTypes';
import StateManager from "react-select";

const initialState = {  data: {},  isOpen: false, };

function formReducer(state = initialState, action) {
  console.log(action.type);
  console.log(action.data)
  switch (action.type) {
    case SET_FORM_DATA:
      return {data: action.data, isOpen: true}
      break;
    case CLOSE_FORM:
      return initialState;
      break;
    default:
      return state;
      break;
  }
}

export default formReducer;
