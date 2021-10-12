import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './style.scss';

export default function Currencies({ currencies }) {

  // const currencyList = currencies.map((currency) => {
  //   return <Currency key={currency.name} {...currency} />;
  // });
  const currencyList = currencies.map((currency) => <Currency key={currency.name} {...currency} />);
  
  return (
    <div className="currencies">
      <p className="currencies__title">Currencies</p>
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
};
