import React, { Component } from 'react';
import Bottle from '../../images/bottle.png';
import CocktailGlass from '../../images/martini.png'


class Cocktail extends Component {
  constructor() {
    super()
  }

  testFunc = () => {
    console.log('cocktail component test: ', this.props.cocktail)
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
 
  render() {
    return <article className="cocktail">         
              <div className="cocktail-display--left-column">
              <img src={ CocktailGlass } />
              <p>This is the description</p>
              <div className="horizontal-cocktail-ingredients">{ this.displayIngredients() }</div>
            </div>
            <div className="cocktail-display--right-column">
              <p>{ this.props.cocktail.cocktailName }</p>
              { this.testFunc() }
              <p>This is the rating</p>
              <p>This is the date last poured for the user</p>
              <p>This is the total number drank</p>
              <p>These are tasting notes</p>
              <button>Mix</button>
            </div>
          </article>
  }
}

export default Cocktail;
