import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppProviders from './providers';
import App from './containers/app/app.js';

ReactDOM.render(
  <Router>
    <Switch>
      <AppProviders>
        <App />
      </AppProviders>
    </Switch>
  </Router>,
  document.getElementById('root')
);
