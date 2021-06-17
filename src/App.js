import "./App.css";
import Routes from "./routes/Routes";
import React from "react";
import { createStore } from "redux";
import { rootReducer } from "./redux/reducers/loginReducers";

export const store = createStore(rootReducer);
function App() {
  return (
    <div className="container">
      <Routes />
    </div>
  );
}

export default App;
