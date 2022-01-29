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
      cocktailDisplay: 'loading'
    }
  }

  componentDidMount() {
    let shuffledCocktails = cocktailData.sort( () => Math.random() - 0.5);
    let randomizedCocktails = shuffledCocktails.slice(0, 4)
    this.setState({ randomizedCocktails, cocktailDisplay: 'menu' })
  }

  displayDetail = (cocktailName) => {
    //can be made dynamic later to also show liquor detail
    let cocktail = cocktailData.find(cocktail => cocktail.cocktailName === cocktailName)
    this.setState({ cocktailDisplay: 'cocktail', cocktail })
  }

  // userDisplay = () => {
  //   switch (this.state.userDisplay) {
  //     case 'loading':
  //       return <div>loading</div>
  //     case 'user':
  //       return <UserDisplay />
  //     default:
  //       return <div>there was an error</div>
  //   }
  // }

  render() {
    return <section className="main-display">
      <CocktailDisplay 
        currentDisplay={ this.state.cocktailDisplay } 
        randomizedCocktails={ this.state.randomizedCocktails }
        cocktail={ this.state.cocktail }
        displayDetail={ this.displayDetail } />
      <UserDisplay />
      </section>
  }
}

export default MainDisplay;