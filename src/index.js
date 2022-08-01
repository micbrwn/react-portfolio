import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css';
// import { StrictMode } from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

// ReactDOM.render(<App />, document.getElementById('root'));
