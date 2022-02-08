import React, { Component } from 'react';
import cocktailData from '../../data/cocktailDataSet';

class User extends Component {
  constructor() {
    super()
  }


  percentComplete = () => {
    let percentage = ((this.props.currentUser.cocktails.length / 77) * 100).toFixed(1);
    return percentage.toString() + `%`
  }

  displayUserDrinkHistory = () => {
    //will eventually need to update this to only show five most recent
    //still need to push data, into userObject - this will only display the five most recent
    ///[1, 2, 3, 4].map(functionality here to display, will only do the display four timest)
    let bigAssReduce = this.props.currentUser.cocktails.reduce((acc, cocktail) => {
      let drinkData = cocktailData.find(data => data.cocktailName === cocktail.cocktailName)
      let recentDrinkDiv = <button className="recent-drink-display" onClick={ () => this.props.displayDetail(cocktail.cocktailName) }>
          <img src={ drinkData.glasswareSource } />
          <div>
            <p>{ drinkData.cocktailName }</p>
            <p>Last Consumed: { cocktail.pours[0].date }</p>
            <p>Average Rating: { cocktail.rating }</p>  
          </div>
        </button>
      acc.push(recentDrinkDiv)
      return acc;
    }, [])

    return bigAssReduce
  }

  render() {
    return <article className="user-display">
        <button onClick={ () => this.props.backButton('user', 'login') }>Change User</button>
        <img src={ this.props.currentUser.avatar } className="user-avatar" />
        <p className="subhead">{ this.props.currentUser.userName }</p>
        <button>My Liquor Cabinet</button>
        <p>Cocktails poured: { this.props.currentUser.cocktails.length }</p>
        <p>Percent complete: { this.percentComplete() } </p>
        <p>Recent Drink History</p>
        <div>{ this.displayUserDrinkHistory() }</div>
      </article>
  }
}

export default User;