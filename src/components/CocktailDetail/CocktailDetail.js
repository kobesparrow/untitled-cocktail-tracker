import React, { Component } from 'react';

class CocktailDetail extends Component {
  constructor() {
    super()
  }

  displayIngredients = () => {
    //this if statement and extra variable will be removed when normal data flow resumes
    //return the mapped array directly

    let ingredientDisplay

    if (this.props.cocktail.ingredients) {
      ingredientDisplay = this.props.cocktail.ingredients.map(ingredient => {
        return <div>{ ingredient.ingredientName }</div>
      })
    }

    return ingredientDisplay
  }

  render() {
    return <article className="cocktail-detail">
        <div className="left-column">
          <p>This is the picture of the glass</p>
          <p>This is the description</p>
          <div>{ this.displayIngredients() }</div>
        </div>
        <div className="right-column">
          <p>{ this.props.cocktail.cocktailName }</p>
          <p>This is the rating</p>
          <p>This is the date last poured for the user</p>
          <p>This is the total number drank</p>
          <p>These are tasting notes</p>
          <button>Mix</button>
        </div>
      </article> 
  } 
}

export default CocktailDetail;