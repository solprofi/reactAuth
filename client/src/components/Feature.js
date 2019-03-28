import React, { Component } from 'react';
import withAuth from './hoc/requireAuth';

class Feature extends Component {
  render() {
    return (
      <div>
        Feature boiii
      </div>
    );
  }
}

export default withAuth(Feature);