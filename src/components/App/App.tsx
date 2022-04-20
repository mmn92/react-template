import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../../Routes";

function App() {
  return (
    <div className="App">
      <h1>Hello there</h1>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
