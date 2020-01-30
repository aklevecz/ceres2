import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";

const App = ({ history }) => {
  return (
    <ConnectedRouter
      history={history}
      basename={process.env.REACT_APP_BASE_URL}
    >
      {routes}
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
