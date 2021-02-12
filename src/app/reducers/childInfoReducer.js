import { SET_CHILD_INFO } from "../../base/constants/ActionTypes";
import initialState from "../../base/config/initialState";
function childInfoReducer(state = initialState.childInfo, action) {
  switch (action.type) {
    case SET_CHILD_INFO:
      return action.data;
      break;
    default:
      return state;
      break;
  }
}
export default childInfoReducer;