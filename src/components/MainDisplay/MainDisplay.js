import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import CocktailDisplay from '../CocktailDisplay/CocktailDisplay';
import cocktailData from '../../data/practiceDataSet';

class MainDisplay extends Component {
  constructor() {
    super()


    this.state = {
      randomizedCocktails: [],
      detail: {},
      currentDisplay: 'cocktail detail'
    }
  }

  componentDidMount() {
    let shuffledCocktails = cocktailData.sort( () => Math.random() - 0.5);
    let randomizedCocktails = shuffledCocktails.slice(0, 4)
    // this.setState({ randomizedCocktails, currentDisplay: 'menu' })
    // this.displayDetail('Tequila Sunrise')
    let theCocktail = cocktailData[0];
    this.setState({ randomizedCocktails, detail: theCocktail})
  }

  displayDetail = (cocktailName) => {
    // cocktailName = 'Tequila Sunrise'
    let detail = this.state.randomizedCocktails.find(cocktail => cocktail.cocktailName === cocktailName)
    this.setState({ currentDisplay: 'cocktail detail', detail })

  }

  onDisplay = () => {
    switch (this.state.currentDisplay) {
      case 'loading':
        return <div>Loading</div>
      case 'menu':
        return <Menu 
                  randomCocktails ={ this.state.randomizedCocktails }
                  displayDetail = { this.displayDetail } />
      case 'cocktail detail':
        return <CocktailDisplay 
                  cocktail = { this.state.detail } />
      default:
        return <p>there was an error</p>
    }
  }

  render() {

    return <section className="main-display">
      { this.onDisplay() }
      </section>
  }
}

export default MainDisplay;