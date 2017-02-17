import React from 'react';
import ReactDOM from 'react-dom';
import { App, Home, List } from './containers';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import './Animation.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="list" component={List} />
    </Route>
  </Router>
  ,document.getElementById('root')
);
