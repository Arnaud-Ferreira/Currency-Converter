import React from 'react';
import PropTypes from 'prop-types';

export default function Currency({ name, onClickCurrency }) {
  // Je prépare mon handler, qui sera éxécuter à chaque click sur le li
  const handleOnClick = () => {
    // On envoie en argument à cette fonction le name, qui ira jusqu'à la fonction "setCurrency"
    onClickCurrency(name);
  };

  return (
    <li
       className="currency"
       onClick={handleOnClick}
    >
      {name}
    </li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  onClickCurrency: PropTypes.func.isRequired,
};
