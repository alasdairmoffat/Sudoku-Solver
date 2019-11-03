import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ errorMessage, dismissError }) => (
  <div className="error-message">
    {errorMessage}
    <button type="button" className="btn-close" onClick={dismissError}>
      <div className="cross">
        <div />
        <div />
      </div>
    </button>
  </div>
);

ErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  dismissError: PropTypes.func.isRequired,
};

export default ErrorMessage;
