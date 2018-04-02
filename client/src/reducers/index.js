import HomeReducer from "./HomeReducer";
import UnMountReducer from "./UnMountReducer";
import { combineReducers } from "redux";

export default combineReducers({
  HomeReducer,
  UnMountReducer
});
