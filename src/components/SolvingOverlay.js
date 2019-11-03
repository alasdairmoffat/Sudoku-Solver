import React from 'react';
import PropTypes from 'prop-types';

const SolvingOverlay = ({ cancel }) => (
  <div className="overlay">
    <div className="lds-grid">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>

    <button type="button" className="btn-cancel" onClick={cancel}>
        Cancel
    </button>
  </div>
);

SolvingOverlay.propTypes = {
  cancel: PropTypes.func.isRequired,
};

export default SolvingOverlay;
