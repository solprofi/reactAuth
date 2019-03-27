import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/signUp' component={SignUp} />
    </App>
  </BrowserRouter>, document.getElementById('root'));