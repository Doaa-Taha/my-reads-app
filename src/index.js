import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/App.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(

    <BrowserRouter> 
      <App />
    </BrowserRouter> 
  ,
  document.getElementById("root")
);
