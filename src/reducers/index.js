import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import counterReducer from "./counter";
import viewReducer from "./view";

const rootReducer = history =>
  combineReducers({
    count: counterReducer,
    view: viewReducer,
    router: connectRouter(history)
  });

export default rootReducer;
