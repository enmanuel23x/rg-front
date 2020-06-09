import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import './App.css';
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="*" render={() => (
            <Redirect to="/home"/> )}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;