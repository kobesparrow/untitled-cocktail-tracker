import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import cocktailData from '../../practiceDataSet';

class MainDisplay extends Component {
  constructor() {
    super()


    this.state = {
      randomizedCocktails: [],
      toDisplay: 'loading'
    }
  }

  componentDidMount() {
    let shuffledCocktails = cocktailData.sort( () => Math.random() - 0.5);
    let randomizedCocktails = shuffledCocktails.slice(0, 4)
    this.setState({ randomizedCocktails, toDisplay: 'menu' })
  }

  onDisplay = () => {
    switch (this.state.toDisplay) {
      case 'loading':
        return <div>Loading</div>
      case 'menu':
        return <Menu randomCocktails ={ this.state.randomizedCocktails }/>
      default:
        break;
    }
  }

  render() {

    return <section className="cocktail-display">
      { this.onDisplay() }
      </section>
  }
}

export default MainDisplay;