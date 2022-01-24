import React, { Component } from 'react';
import CocktailDisplay from '../CocktailDisplay/CocktailDisplay';
import Menu from '../Menu/Menu';
import UserDisplay from '../UserDisplay/UserDisplay';
import cocktailData from '../../data/cocktailDataSet';

class MainDisplay extends Component {
  constructor() {
    super()


    this.state = {
      randomizedCocktails: [],
      cocktail: {},
      cocktailDisplay: 'loading',
      userDisplay: 'user'
    }
  }

  componentDidMount() {
    let shuffledCocktails = cocktailData.sort( () => Math.random() - 0.5);
    let randomizedCocktails = shuffledCocktails.slice(0, 4)
    this.setState({ randomizedCocktails, cocktailDisplay: 'menu' })
    // this.displayDetail('Tequila Sunrise')
    // let theCocktail = cocktailData[0];
    // this.setState({ randomizedCocktails, detail: theCocktail})
    // this.setState({ detail: theCocktail})
  }

  displayDetail = (cocktailName) => {
    let cocktail = this.state.randomizedCocktails.find(cocktail => cocktail.cocktailName === cocktailName)
    this.setState({ cocktailDisplay: 'cocktail', cocktail })
  }

  // cocktailDisplay = () => {
  //   switch (this.state.cocktailDisplay) {
  //     case 'loading':
  //       return <div>Loading</div>
  //     case 'menu':
  //       return <Menu 
  //                 randomCocktails ={ this.state.randomizedCocktails }
  //                 displayDetail = { this.displayDetail } />
  //     case 'cocktail detail':
  //       return <CocktailDisplay 
  //                 cocktail = { this.state.detail } />
  //     default:
  //       return <p>there was an error</p>
  //   }
  // }

  userDisplay = () => {
    switch (this.state.userDisplay) {
      case 'loading':
        return <div>loading</div>
      case 'user':
        return <UserDisplay />
      default:
        return <div>there was an error</div>
    }
  }

  render() {

    return <section className="main-display">
      <CocktailDisplay 
        currentDisplay={ this.state.cocktailDisplay } 
        randomizedCocktails={ this.state.randomizedCocktails }
        cocktail={ this.state.cocktail }
        displayDetail={ this.displayDetail } />
      { this.userDisplay() }
      </section>
  }
}

export default MainDisplay;