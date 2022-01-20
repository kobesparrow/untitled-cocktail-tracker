import React, { Component } from "react";
import CocktailTile from '../CocktailTile/CocktailTile';


class Menu extends Component {
  construtor() {

  }

  displayRandomCocktails() {
    return this.props.randomCocktails.map(cocktail => {
      return <CocktailTile 
                cocktail={ cocktail }
                displayDetail={ this.props.displayDetail } />
    })
  }

  render() {
    return <section className="menu-display">
        { this.displayRandomCocktails() }
      </section>
  }
}

export default Menu;