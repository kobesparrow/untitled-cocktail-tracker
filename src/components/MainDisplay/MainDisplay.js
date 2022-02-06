import React, { Component } from 'react';
import CocktailDisplay from '../CocktailDisplay/CocktailDisplay';
import Menu from '../Menu/Menu';
import UserDisplay from '../UserDisplay/UserDisplay';
import cocktailData from '../../data/cocktailDataSet';
import userData from '../../data/userDataSet';

class MainDisplay extends Component {
  constructor() {
    super()

    this.state = {
      randomizedCocktails: [],
      cocktailDisplay: 'loading',
      cocktail: {},
      userDisplay: 'login',
      currentUser: {},
      userCocktail: {}
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
    let userCocktail = this.state.currentUser.cocktails.find(cocktail => cocktail.cocktailName === cocktailName)
    //set user Cocktail here in state and pass down to display/cocktail, etc.
    this.setState({ cocktailDisplay: 'cocktail', cocktail, userCocktail })
  }

  displayUser = (userName) => {
    let currentUser = userData.find(user => user.userName === userName)
    this.setState({ userDisplay: 'user', currentUser })
  } 

  backButton = () => {
    this.setState({ cocktailDisplay: 'menu' })
    console.log('test back')
  }

  render() {
    let backButton
    
    if (this.state.cocktailDisplay === 'cocktail') {
      backButton = <button className="back-button" onClick={ this.backButton }>Back</button>
    }

    return <section className="main-display">
      { backButton }
      <CocktailDisplay 
        currentDisplay={ this.state.cocktailDisplay } 
        randomizedCocktails={ this.state.randomizedCocktails }
        cocktail={ this.state.cocktail }
        currentUser={ this.state.currentUser }
        displayDetail={ this.displayDetail } 
        userCocktail={ this.state.userCocktail } />
      <UserDisplay
        currentUser={ this.state.currentUser } 
        currentDisplay={ this.state.userDisplay }
        displayUser={ this.displayUser }
        displayDetail={ this.displayDetail } 
        userCocktail={ this.state.userCocktail } />
      </section>
  }
}

export default MainDisplay;