import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

import "./App.css";

import NavBar from "./components/navbar";
import LandingPage from "./components/landing-page";
import Projects from "./components/projects";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <LandingPage />
        <Projects />
      </div>
    );
  }
}

export default App;
