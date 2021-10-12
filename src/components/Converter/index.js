import React from 'react';

import './style.scss';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

export default function Converter() {
  return (
    <div className="converter">
      <Header />
      <Currencies />
      <Amount />
    </div>
  );
}
