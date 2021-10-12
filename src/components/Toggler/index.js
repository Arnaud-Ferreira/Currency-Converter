import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Toggler({ onClickButton }) {
  const handleOnClick = () => {
    onClickButton();
  }
  return (
    <button
      className="button" 
      type="button" 
      onClick={handleOnClick}
      >
        Masquez la liste
      </button>
  );
}

Toggler.propTypes = {
  onClickButton: PropTypes.func.isRequired,
};
