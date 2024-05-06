import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import GridLines from "react-gridlines";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <GridLines
      className="bg-slate-100"
      lineColor="#fcfcfc"
      cellWidth={50}
      strokeWidth={2}
      cellWidth2={50}
    >
        <App />
        </GridLines>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
