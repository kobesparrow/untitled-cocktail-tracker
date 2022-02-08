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
      currentUser: {},
      date: ''
    }
  }

  componentDidMount() {
    let shuffledCocktails = cocktailData.sort( () => Math.random() - 0.5);
    let randomizedCocktails = shuffledCocktails.slice(0, 4)
    let date = this.getDate()
    this.setState({ randomizedCocktails, date, cocktailDisplay: 'menu' })
  }

  getDate = () => {
    let today = new Date();
    let year = today.getFullYear()
    let month = today.toLocaleString('default', { month: 'long' });
    let day = today.getDate()

    return `${month} ${day}, ${year}`
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

  backButton = (component, display) => {
    if (component === 'user') {
      this.setState({ userDisplay: display })
    } else {
      this.setState({ cocktailDisplay: display })
    }
    // console.log('test')
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
    let recentPour = {date: `${ this.state.date }`, rating, note: 'this is a cocktail note'};
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
        date: `${this.state.date}`,
        rating: rating,
        note: 'this is a cocktail note'
      }]}

    currentUser.cocktails.unshift(newCocktail)
    this.setState({ currentUser })
  }

  render() {
    let backButton
    
    if (this.state.cocktailDisplay === 'cocktail') {
      backButton = <button className="back-button" onClick={ () => this.backButton('cocktail', 'menu') }>Back</button>
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
        displayDetail={ this.displayDetail } 
        backButton={ this.backButton } />
      </section>
  }
}

export default MainDisplay;