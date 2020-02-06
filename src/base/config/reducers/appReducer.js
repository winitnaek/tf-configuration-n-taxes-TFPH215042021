import { combineReducers } from "redux";
import data from "./payeeDetailsReducer";
import favoriteLinks from "./favoriteLinksReducer";
import moduleLinks from "./moduleLinksReducer";
import links from "./detailsReducer";

const rootReducer = combineReducers({
  data,
  favoriteLinks,
  moduleLinks,
  links
});
export default rootReducer;
