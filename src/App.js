import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Topbar from "./components/Topbar"
import Home from "./containers/pages/Home"
import DetailPost from "./containers/pages/DetailPost"
import DetailUser from "./containers/pages/DetailUser"
import DetailPhoto from "./containers/pages/DetailPhoto"

export default class App extends Component {
  render() {
    return (
      <Router>

        <Topbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={DetailPost} />
          <Route exact path="/user/:id" component={DetailUser} />
          <Route exact path="/photo/:id" component={DetailPhoto} />
        </Switch>
      </Router>
    )
  }
}

