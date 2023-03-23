import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting />
        <Hello />
      </header>
    </div>
  );
}

//capital letter
// must return something
function Greeting() {
  return <h1>react tutorial.</h1>;
}

// create element
function Hello() {
  return React.createElement(
    "div",
    {},
    React.createElement("h6", {}, "hello world!")
  );
}

export default App;
