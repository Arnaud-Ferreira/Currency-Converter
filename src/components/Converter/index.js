import React from 'react';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import Toggler from 'src/components/Toggler';

// Data import
import currenciesData from 'src/data/currencies';

import './style.scss';

export default class Converter extends React.Component {
  // Grâce au plugin de babel-class on peut déclarer des propriétés de class. Le state se déclare donc comme ceci
  state = {
    isOpen: true,
    baseAmount: 10,
    currency: 'Australian Dollar',
    search: '',
  }

  // Fonction qui permet de masquer et déplier la liste (en charge de changer la valeur "open" du state)
  setOpen = () => {
    const { isOpen } = this.state

    // setState permet de modifier le state
    this.setState({
      isOpen: !isOpen,
    });
  }

  // Fonction en charge de modifier la valeur "currency" du state
  setCurrency = (value) => {
    // setState permet de modifier le state mais est asynchrone on doit donc passer par une callback pour récuperer le bon state
    this.setState({
      // On reçoit une valeur de onClickCurrency dans les paramètres, qu'on donne à currency
      currency: value,
    });
  }

  // Fonction en charge de modifier la valeur "search" du state
  setSearch = (value) => {
    // On reçoit l'event target de l'input dans le "onChange" de currencies
    this.setState({
      search: value,
    })
  }

  // Fonction en charge de modifier la valeur "baseAmount" du state
  setBaseAmount = (value) => {
    this.setState({
      baseAmount: parseFloat(value, 10),
    });
  }

  makeConversion = () => {
    const { baseAmount, currency } = this.state;

    // On va chercher dans le tableau d'objet "currenciesData" => L'objet qui aura la propriété "name" égale à "currency" du state
    const foundCurrency = currenciesData.find((money) => {
      // On compare le nom de la currencyData avec la currency du state
      return money.name === currency;
    });
    // On a accès à l'objet entier de currenciesData (le name et le RATE)
    // On multiplie donc la valeur de la monnaie avec le taux de change de celle-ci pour avoir la valeur finale 
    // Enfin, on vient multiplier par 100 le résultat, on arrondie grâce à Math.round et on divise le tout par 100 
    return Math.round((foundCurrency.rate * baseAmount) * 100) / 100;
  }

  getFilteredCurrencies = () => {
    const { search } = this.state;

    // Si la recherche est vide, on renvoie toute la liste des devises
    if (search.length === 0) {
      return currenciesData;
    }

    const filteredCurrencies = currenciesData.filter(({ name }) => {
      // La méthode includes détermine si une string est contenue dans une autre et renvoie true ou false selon le cas
      // Je passe tout en minuscule pour ne pas être sensible à la casse
      const loweredName = name.toLowerCase();
      const loweredSearch = search.toLowerCase();

      return loweredName.includes(loweredSearch); 
    });

    return filteredCurrencies;
  }

  render() {
    const { 
      isOpen,
       baseAmount,
       currency,
       search,
    } = this.state;

    // J'éxécute la conversion et je stocke le résultat
    const value = this.makeConversion(); 

    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="converter">
       <Header
          baseAmount={baseAmount}
          onChangeBaseAmount={this.setBaseAmount}
       />
       {/* On envoie la fonction qui changera le state, à notre composant toggler (au click) */}
       <Toggler onClickButton={this.setOpen} />

       {/*Affichage conditionnel */}
       {isOpen && (
        <Currencies
          // J'envoie le tableau filtrer
          currencies={filteredCurrencies}
          changeCurrency={this.setCurrency}
          // Valeur du state
          inputValue={search}
          // Méthode qui va permettre de changer la valeur du state
          onChangeInputValue={this.setSearch}
        />
       )}
       <Amount value={value} currency={currency} />
     </div>
    );
  }
}
