import React, { Component } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";

import "./App.css";

import NavBar from "./components/navbar";
import LandingPage from "./components/landing-page";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <LandingPage />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
