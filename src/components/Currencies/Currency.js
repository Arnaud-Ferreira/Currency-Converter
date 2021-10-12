import React from 'react';
import PropTypes from 'prop-types';

export default function Currency({ name }) {
  return (
    <li className="currency">{name}</li>
  );
}

Currency.propTypes = {
  name: PropTypes.string.isRequired,
};
