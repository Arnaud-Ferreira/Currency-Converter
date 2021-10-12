import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default function Header({ baseAmount, onChangeBaseAmount }){
  const handleOnChange = (event) => {
    onChangeBaseAmount(event.target.value);
  };

  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">
        <input
          type="number"
          className="header__input"
          value={baseAmount}
          min={0}
          onChange={handleOnChange}
        />
         Euro
      </p>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  onChangeBaseAmount: PropTypes.func.isRequired,
}
