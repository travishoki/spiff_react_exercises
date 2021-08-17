import React from "react";
import PropTypes from 'prop-types';

import './ProgressBar.scss';

import { getIsVisibleClass } from './utils';

const ProgressBar = ({
  isVisible,
  percent,
}) => {
  const visibleClass = getIsVisibleClass(isVisible);
  
  return (
    <div
      className={`progress-bar-container ${visibleClass}`}
    >
      <div
        className="progress-bar"
        style={{
          width: `${percent}%`, // This "width" will visually show the progress percentage
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