import React from "react";
import PropTypes from 'prop-types';

import './ProgressBar.scss';

const ProgressBar = ({
  isVisible,
  percent,
}) => {
  const visibleClass = isVisible ? 'visible' : '';
  
  return (
    <div
      className={`progress-bar-container ${visibleClass}`}
    >
      <div
        className="progress-bar"
        style={{
          width: `${percent}%`,
        }}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  isVisible: PropTypes.bool,
  percent: PropTypes.number,
};

ProgressBar.defaultProps = {
  isVisible: false,
  percent: 0,
};

export default ProgressBar;