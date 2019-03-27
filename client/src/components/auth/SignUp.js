import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
        </fieldset>
      </form>
    );
  }
}
