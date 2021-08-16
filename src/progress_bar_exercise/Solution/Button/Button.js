import React from "react";
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
  disabled,
  onClick,
  text,
}) => (
  <button 
    className="button"
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
};

Button.defaultProps = {
  disabled: false,
};

export default Button;