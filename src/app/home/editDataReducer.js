import { SET_EDIT_DATA } from "./editDataActions";
import StateManager from "react-select";

const initialState = {
  data: {customPaymentCode: " ",
        customPaymentName: " ",
        paymentType: "Custom Earnings",
        taxability: "Non-Taxable",
        eeMax: "",
        aggStatus: "",},
  isOpen: false
      };

function editDataReducer(state = initialState, action) {
  console.log(action.type);
  console.log(action.data)
  switch (action.type) {
    case 'SET_EDIT_DATA':
      return {data: action.data, isOpen: true}
      break;
    case 'CLEAR_DATA':
      return state;
      break;
    default:
      return state;
      break;
  }
}

export default editDataReducer;
