import React from "react";
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({
    onClick,
    text,
}) => (
  <button 
    className="button"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;