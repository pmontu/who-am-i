import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { usePageViews } from "./hooks";
import PageNotFound from "./PageNotFound";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Capture from "./Capture";
import Emotion from "./Emotion";
import "./App.css";

function App(props) {
  usePageViews();

  return (
    <div style={classes.root}>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/face-capture">
          <Capture />
        </Route>
        <Route path="/result">
          <Emotion />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

const classes = {
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
  },
};

export default () => (
  <Router basename="/who-am-i">
    <App />
  </Router>
);
