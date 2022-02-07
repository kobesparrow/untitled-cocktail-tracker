import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Cocktail from '../Cocktail/Cocktail';


class CocktailDisplay extends Component {
  constructor() {
    super()

    this.state = {
    }
  }



  cocktailDisplay = (toDisplay) => {
    switch (toDisplay) {
      case 'loading':
        return <div>Loading</div>
      case 'menu':
        return <Menu 
                  randomCocktails ={ this.props.randomizedCocktails }
                  displayDetail = { this.props.displayDetail } />
      case 'cocktail':
        return <Cocktail 
                  cocktail={ this.props.cocktail } 
                  currentUser={ this.props.currentUser } 
                  rateCocktail={ this.props.rateCocktail } />
      default:
        return <p>there was an error</p>
    }
  }

  render() {
    return <article className="cocktail-display">
      { this.cocktailDisplay(this.props.currentDisplay) }
      </article> 
  } 
}

export default CocktailDisplay;