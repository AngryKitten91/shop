import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import NavBar from 'components/NavBar'
import Contact from 'components/Contact'
import Products from 'components/Products'


import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" component={NavBar} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/products/:productId?" component={Products} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
