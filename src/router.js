import React, { Component }  from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router, Route } from "react-router-dom";
import ExplorePage from "./pages/ExplorePage";
import DashboardPage from "./pages/DashboardPage";

class DashboardRouter extends Component {
  render() {
    return (
      <Router>
      <App>
        <Route key="index" exact path="/" component={DashboardPage} />
        <Route key="explore" path="/explore" component={ExplorePage} />
      </App>
    </Router>
    );
  }
}
export default DashboardRouter;

serviceWorker.unregister();
