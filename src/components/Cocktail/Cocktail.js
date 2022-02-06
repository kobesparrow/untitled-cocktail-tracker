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

  // componentDidMount = () => {
  //   //set to load average user if no currentUser available
  //   let userCocktail = this.props.currentUser.cocktails.find(cocktail => cocktail.cocktailName === cocktail.cocktailName)
  //   this.setState({ userCocktail })
  // }

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
              {/* { this.horizontalDisplayIngredients() } */}
            </div>
      case 'mix':
        return null
      default:
        break;
    };
  }

  // starRatingDisplay = () => {
  //   let stars = [];

  // }

  testFunction = () => {
    console.log('here', this.props.userCocktail)
  }

  rightColumnDisplay = () => {
    switch (this.state.display) {
      case 'loading':
        return <div>loading</div>
      case 'main':
        return <div>
            {/* <p>Rating: { this.props.userCocktail.rating }</p> */}
            {/* <p>Last poured: { this.props.userCocktail.mostRecent }</p> */}
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
            { this.verticalDisplayIngredients() }
            { this.displayInstructions() }
          </div>
      case 'pour':
        return <div>
            <p>Rate your cocktail:</p>
            <div>
              <img src={ Star } className="rating-star" id="1" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="2" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="3" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="4" onClick={ this.props.rateCocktail } />
              <img src={ Star } className="rating-star" id="5" onClick={ this.props.rateCocktail } />
            </div>
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
              <p>Total Drank: { this.testFunction() }</p>
              <p>These are tasting notes</p>
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
