import React, { Component } from 'react';
import CocktailDisplay from '../CocktailDisplay/CocktailDisplay';
// import Menu from '../Menu/Menu';
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
      currentUser: {}
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
    //set user Cocktail here in state and pass down to display/cocktail, etc.
    this.setState({ cocktailDisplay: 'cocktail', cocktail })
  }

  displayUser = (userName) => {
    let currentUser = userData.find(user => user.userName === userName)
    this.setState({ userDisplay: 'user', currentUser })
  } 

  backButton = () => {
    this.setState({ cocktailDisplay: 'menu' })
  }

  rateCocktail = (event) => {
    let rating = parseInt(event.target.id)

    if (this.state.currentUser.cocktails.some(cocktail => cocktail.cocktailName === this.state.cocktail.cocktailName)) {
      this.addToExistingUserCocktail(rating)
    } else {
      this.addCocktailToUser(rating)
    }
  }

  addToExistingUserCocktail = (rating) => {
    let currentUser = this.state.currentUser;
    let recentPour = {date: 'February 6, 2021', rating, note: 'this is a cocktail note'};
    let cocktailIndex = this.state.currentUser.cocktails.findIndex(cocktail => cocktail.cocktailName === this.state.cocktail.cocktailName);
    currentUser.cocktails[cocktailIndex].pours.unshift(recentPour);
    
    let updatedAverageRating = currentUser.cocktails[cocktailIndex].pours.reduce((acc, pour) => {
      return acc + pour.rating;
    }, 0) / currentUser.cocktails[cocktailIndex].pours.length
    currentUser.cocktails[cocktailIndex].rating = updatedAverageRating;
    
    currentUser.cocktails.unshift(currentUser.cocktails.splice(cocktailIndex, 1)[0])

    this.setState({ currentUser })
  }

  addCocktailToUser = (rating) => {
    let currentUser = this.state.currentUser;
    let newCocktail = { cocktailName: this.state.cocktail.cocktailName,
      rating: rating,
      notes: ['notes on cocktail'],
      pours: [{
        date: 'October 31, 2021',
        rating: rating,
        note: 'this is a cocktail note'
      }]}

    currentUser.cocktails.unshift(newCocktail)
    this.setState({ currentUser })
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
        rateCocktail={ this.rateCocktail } />
      <UserDisplay
        currentUser={ this.state.currentUser } 
        currentDisplay={ this.state.userDisplay }
        displayUser={ this.displayUser }
        displayDetail={ this.displayDetail } />
      </section>
  }
}

export default MainDisplay;