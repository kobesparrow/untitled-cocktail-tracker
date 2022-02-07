import React, { Component } from 'react';
import Bottle from '../../images/bottle.png';
import Star from '../../images/star.png';



class Cocktail extends Component {
  constructor() {
    super()

    this.state = {
      display: 'main'
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
 
  // leftColumnDisplay = () => {
  //   switch (this.state.display) {
  //     case 'main':
  //       return <div className="horizontal-cocktail-ingredients">
  //             {/* { this.horizontalDisplayIngredients() } */}
  //           </div>
  //     case 'mix':
  //       return null
  //     default:
  //       break;
  //   };


  rightColumnDisplay = () => {
    switch (this.state.display) {
      case 'loading':
        return <div>loading</div>
      case 'main':
        return <div>
            { this.verticalDisplayIngredients() }
            { this.displayInstructions() }
            <button onClick={ () => this.displayHelper('mix') }>Mix</button>
          </div>
      case 'mix':
        return <div className="vertical-cocktail-ingredients">
            <p>Rate your cocktail:</p>
            <div>
              <img src={ Star } className="rating-star" id="1" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="2" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="3" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="4" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="5" onClick={ this.props.rateCocktail } />
            </div>
            <div className="horizontal-cocktail-ingredients">
              { this.horizontalDisplayIngredients() }
            </div>
            { this.displayInstructions() }
          </div>   
      default:
        return <div>an error occurred</div>
    };
  }
 
  render() {
    
    return <article className="cocktail"> 
              <div className="cocktail-display--left-column">   
              <img src={ this.props.cocktail.glasswareSource } />
              <p>This is the description</p>
              {/* { this.leftColumnDisplay() } */}
            </div>
            <div className="cocktail-display--right-column">
              <p className="header">{ this.props.cocktail.cocktailName }</p>
              { this.rightColumnDisplay() }
            </div>
          </article>
  }
}

export default Cocktail;
