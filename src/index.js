import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore, { history } from "./configureStore";
import { fetchData } from "./actions/view";

const store = configureStore();
store.dispatch(fetchData());
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById("root")
  );
};

render();
