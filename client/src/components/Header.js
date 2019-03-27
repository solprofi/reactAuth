import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Redux Auth </Link>
        <Link to='/signIn'>Sign In</Link>
        <Link to='/signOut'>Sign Out</Link>
        <Link to='/signUp'>Sign Up</Link>
        <Link to='/feature'>Feature</Link>
      </div>
    );
  }
}
