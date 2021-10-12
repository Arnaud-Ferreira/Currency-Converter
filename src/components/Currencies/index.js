import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

export default function Currencies({
  currencies,
  changeCurrency,
  inputValue,
  onChangeInputValue,
}) {

  const currencyList = currencies.map((currency) => (
    <Currency
      key={currency.name}
      onClickCurrency={changeCurrency}
      {...currency} 
    />
  ));

  const handleOnChange = (event) => {
    // Modifier la valeur de search du state
    onChangeInputValue(event.target.value);
  };
  
  return (
    <div className="currencies">
      <input
        type="text"
        placeholder="Recherchez une devise"
        className="currencies__input"
        value={inputValue}
        onChange={handleOnChange}
      />
      <ul className="currencies__list">
        {currencyList}
      </ul>
    </div>
  );
}

Currencies.propTypes = {

// We know that the array contains objects and we know the shape of these objects
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired,
  changeCurrency: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
