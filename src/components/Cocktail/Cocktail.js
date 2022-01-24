import React, { Component } from 'react';

class Cocktail extends Component {
  constructor() {
    super()
  }

  testFunc = () => {
    console.log('cocktail component test: ', this.props.cocktail)
  }
 
  render() {
    return <article>         
              <div className="left-column">
              <p>This is the picture of the glass</p>
              <p>This is the description</p>
              {/* <div className="small-cocktail-ingredients">{ this.displayIngredients() }</div> */}
            </div>
            <div className="right-column">
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
