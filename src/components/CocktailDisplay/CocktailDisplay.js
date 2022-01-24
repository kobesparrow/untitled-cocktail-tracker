import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import Cocktail from '../Cocktail/Cocktail';
import Bottle from '../../images/bottle.png';


class CocktailDisplay extends Component {
  constructor() {
    super()

    this.state = {
      currentDisplay: 'loading'
    }
  }

  displayIngredients = () => {
    //this if statement and extra variable will be removed when normal data flow resumes
    //return the mapped array directly

    let ingredientDisplay

    if (this.props.cocktail.ingredients) {
      ingredientDisplay = this.props.cocktail.ingredients.map(ingredient => {
        return <div className="">
                <img src={ Bottle } />
                <p>{ ingredient.ingredientName }</p>
              </div>
      })
    }

    return ingredientDisplay
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
                  cocktail={ this.props.cocktail } />
        // return <CocktailDisplay 
        //           cocktail = { this.state.detail } />
      default:
        return <p>there was an error</p>
    }
  }
  
  testFunc = () => {
    console.log('testFunc', this.props.cocktail)
  }

  render() {
    return <article className="cocktail-display">
      { this.cocktailDisplay(this.props.currentDisplay) }
      { this.testFunc() }
        {/* <div className="cocktail-display--left-column">
          <p>This is the picture of the glass</p>
          <p>This is the description</p>
          <div className="horizontal-cocktail-ingredients">{ this.displayIngredients() }</div>
        </div>
        <div className="cocktail-display--right-column">
          <p className="header">{ this.props.cocktail.cocktailName }</p>
          <p>This is the rating</p>
          <p>This is the date last poured for the user</p>
          <p>This is the total number drank</p>
          <p>These are tasting notes</p>
          <button>Mix</button>
        </div> */}
      </article> 
  } 
}

export default CocktailDisplay;