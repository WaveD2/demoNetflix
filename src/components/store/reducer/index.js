import { combineReducers } from "redux";
import reducerMovie from "./reducerMovie";

const rootReducer = combineReducers({
  infoMovie: reducerMovie,
});

export default rootReducer;
