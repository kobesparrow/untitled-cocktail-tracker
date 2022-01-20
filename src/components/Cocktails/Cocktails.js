import React, { Component } from 'react';
import CocktailTile from '../CocktailTile/CocktailTile';
import Menu from '../Menu/Menu';
import cocktailData from '../../practiceDataSet';

class Cocktails extends Component {
  constructor() {
    super()


    this.state = {
      randomizedCocktails: [],
      toDisplay: ''
    }
  }

  componentDidMount() {
    let shuffledCocktails = cocktailData.sort( () => Math.random() - 0.5);
    let randomizedCocktails = shuffledCocktails.slice(0, 4)
    this.setState({ randomizedCocktails })
  }

  displayRandomCocktails() {
    return this.state.randomizedCocktails.map(cocktail => {
      console.log('map test', cocktail)
      return <CocktailTile cocktail={ cocktail } />
    })
  }


  render() {


    return <section className="cocktail-display">
      <Menu />
      { this.displayRandomCocktails() }
      </section>
  }
}

export default Cocktails;