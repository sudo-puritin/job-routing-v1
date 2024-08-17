import React from "react";

import "./App.css";

import LoginContextProvider from "./Context/Login.Context";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <LoginContextProvider>
      <HomePage />
    </LoginContextProvider>
  );
}

export default App;
