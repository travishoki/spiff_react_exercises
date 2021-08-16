import React from "react";
import PropTypes from 'prop-types';

import './ProgressBar.scss';

const ProgressBar = ({
  percent,
}) => (
  <div className="progress-bar-container">
    <div
      className="progress-bar"
      style={{
        width: `${percent}%`,
      }}
    />
  </div>
);

ProgressBar.propTypes = {
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  percent: 0,
};

export default ProgressBar;