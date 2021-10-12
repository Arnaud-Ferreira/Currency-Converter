import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';

// Data import
import currenciesData from 'src/data/currencies';

import './style.scss';

export default function Converter() {
  return (
    <div className="converter">
      <Header baseAmount={14} />
      <Currencies currencies={currenciesData}/>
      <Amount value={1.09} currency="United States Dollar" />
    </div>
  );
}
