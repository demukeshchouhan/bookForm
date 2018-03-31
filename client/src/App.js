import React, { Component } from "react";
import "./App.css";
import Home from "./components/pages/home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
