import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {
  componentDidMount = () => {
    this.props.signOut();
  }

  render() {
    return (
      <div>
        bye boiii
      </div>
    );
  }
}

export default connect(null, actions)(SignOut);