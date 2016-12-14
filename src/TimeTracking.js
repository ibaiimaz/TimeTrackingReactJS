import React, { Component } from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store';

import App from './app.component.jsx'
import Home from './home.component.jsx'
import Activity from './activity.component.jsx'

//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const NotFound = () => (<h1>404.. This page is not found!</h1>);

class TimeTracking extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/activity/:id" component={Activity}/>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default TimeTracking;
