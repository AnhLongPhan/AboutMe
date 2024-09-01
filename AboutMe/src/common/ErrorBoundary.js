/*global showErrorModal, SYSTEM_ERROR */
import React from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error(error, info);
    showErrorModal(SYSTEM_ERROR);
  }

  render() {
    if (this.state.hasError) {
      return <input type="hidden" />;
    }

    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.object.isRequired
};
