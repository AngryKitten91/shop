import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "components/NavBar";
import Contact from "components/Contact";
import Products from "components/Products";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Route path="/" component={NavBar} />
      <div className="app">
      
        <Route path="/contact" component={Contact} />
        <Route path="/products/:productId?" component={Products} />
        <Route exact path="/" component={Products} />
      </div>
      
      </div>
      </Router>
    );
  }
}

export default App;
