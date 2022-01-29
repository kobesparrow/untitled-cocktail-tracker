import React, { Component } from 'react';
import Bottle from '../../images/bottle.png';
import CocktailGlass from '../../images/martini.png'


class Cocktail extends Component {
  constructor() {
    super()

    this.state = {
      display: 'main',
    }
  }

  displayHelper = (display) => {
    this.setState({ display })
  }

  horizontalDisplayIngredients = () => {
    return this.props.cocktail.ingredients.map(ingredient => {
      return <div className="">
              <img src={ Bottle } />
              <p>{ ingredient.ingredientName }</p>
            </div>
    });
  }

  verticalDisplayIngredients = () => {
    return this.props.cocktail.ingredients.map(ingredient => {
      return <div className="vertical-ingredient-tile">
                <img src={ Bottle } />
                <div>
                  <p className="sub-subhead">{ ingredient.ingredientName }</p>
                  <p>{ ingredient.amount }</p>
                </div>
              </div>
    });
  }

  displayInstructions = () => {
    return this.props.cocktail.instructions.map(instruction => {
      return <p>• { instruction }</p>
    })
  }
 
  leftColumnDisplay = () => {
    switch (this.state.display) {
      case 'main':
        return <div className="horizontal-cocktail-ingredients">
              { this.horizontalDisplayIngredients() }
            </div>
      case 'mix':
        return null
      default:
        break;
    };
  }

  rightColumnDisplay = () => {
    switch (this.state.display) {
      case 'loading':
        return <div>loading</div>
      case 'main':
        return <div>
            <p>This is the rating</p>
            <p>This is the date last poured for the user</p>
            <p>This is the total number drank</p>
            <p>These are tasting notes</p>
            <p>Buttons giving options for alternative mixes</p>
            <button onClick={ () => this.displayHelper('mix') }>Mix</button>
          </div>
      case 'mix':
        return <div className="vertical-cocktail-ingredients">
            { this.verticalDisplayIngredients() }
            { this.displayInstructions() }
            <button>Pour</button>
          </div>
      default:
        break;
    };
  }
 
  render() {
    
    return <article className="cocktail">         
              <div className="cocktail-display--left-column">
              <img src={ this.props.cocktail.glasswareSource } />
              <p>This is the description</p>
              { this.leftColumnDisplay() }
            </div>
            <div className="cocktail-display--right-column">
              <p className="header">{ this.props.cocktail.cocktailName }</p>
              { this.rightColumnDisplay() }
            </div>
          </article>
  }
}

export default Cocktail;
