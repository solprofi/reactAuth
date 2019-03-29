import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks = () => {
    if (this.props.isAuthenticated) {
      return (
        <Fragment>
          <Link to='/signOut'>Sign Out</Link>
          <Link to='/feature'>Feature</Link>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Link to='/signIn'>Sign In</Link>
          <Link to='/signUp'>Sign Up</Link>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to='/'>Redux Auth </Link>
        {this.renderLinks()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Header);