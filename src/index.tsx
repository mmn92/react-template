import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./styles/Generic/reset.scss";
import "./styles/Base/base.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
