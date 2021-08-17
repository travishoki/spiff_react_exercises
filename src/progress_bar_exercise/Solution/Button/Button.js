import React from "react";
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
  disabled,
  onClick,
  text,
  type,
}) => (
  <button 
    className={`button ${type}`}
    disabled={disabled}
    onClick={() => {
      if (!disabled) onClick();
    }}
  >
    {text}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  type: 'primary',
};

export default Button;