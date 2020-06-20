import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import viewReducer from "./view";

const rootReducer = (history) =>
  combineReducers({
    view: viewReducer,
    router: connectRouter(history),
  });

export default rootReducer;
