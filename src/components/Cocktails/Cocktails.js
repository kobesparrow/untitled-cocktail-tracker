import React, { Component } from 'react';
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

  render() {


    return <section className="cocktail-display">
      <Menu  randomCocktails ={ this.state.randomizedCocktails }/>
      </section>
  }
}

export default Cocktails;