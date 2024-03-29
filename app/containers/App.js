// @flow
import * as React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
}