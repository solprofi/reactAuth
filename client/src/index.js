import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import rootReducer from './reducers';

ReactDOM.render(
  <Provider store={createStore(rootReducer, {})}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/signUp' component={SignUp} />
      </App>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));