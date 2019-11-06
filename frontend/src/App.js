import React from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import "./App.css";
import FetchButton from "./components/FetchButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <FetchButton />
      </header>
    </div>
  );
}

export default App;
