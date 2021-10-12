import React from 'react';

import './style.scss';

export default function Header(){
  return (
    <header className="header">
      <h1 className="header__title">Converter</h1>
      <p className="header__base-amount">1 Euro</p>
    </header>
  );
}
