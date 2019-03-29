import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Welcome from './components/Welcome';
import SignUp from './components/auth/SignUp';
import rootReducer from './reducers';
import Feature from './components/Feature';
import SignOut from './components/auth/SignOut';
import SignIn from './components/auth/SignIn';

const store = createStore(
  rootReducer,
  { auth: { authenticated: localStorage.getItem('token') } },
  applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/signUp' component={SignUp} />
        <Route exact path='/signOut' component={SignOut} />
        <Route exact path='/feature' component={Feature} />
        <Route exact path='/signIn' component={SignIn} />
      </App>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));