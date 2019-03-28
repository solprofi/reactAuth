import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

class SignUp extends Component {
  onSubmit = formProps => {
    this.props.signUp(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <Field
            id='email'
            name='email'
            type='text'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <Field
            id='password'
            name='password'
            type='password'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <button type='submit'>Sign Up</button>
      </form>
    );
  }
}

export default compose(
  connect(null, actions), reduxForm({ form: 'signUp' })
)(SignUp);

