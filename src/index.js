import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import './App.css';
import DashboardRouter from './router'
import Table from './static/table'
ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={DashboardRouter} />
            <Route exact path="/static"  component={Table}/>
            <Route path="*" render={() => (
            <Redirect to="/"/> )}/>
          </Switch>
        </div>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );