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
    return [0, 1, 2, 3].map(index => {
      if (this.props.currentUser.cocktails[index]) {
        let drinkData = cocktailData.find(data => data.cocktailName === this.props.currentUser.cocktails[index].cocktailName)
        return <button className="recent-drink-display" onClick={ () => this.props.displayDetail(this.props.currentUser.cocktails[index].cocktailName) }>
                <img src={ drinkData.glasswareSource } />
                <div>
                  <p>{ drinkData.cocktailName }</p>
                  <p>Last Consumed: { this.props.currentUser.cocktails[index].pours[0].date }</p>
                  <p>Average Rating: { this.props.currentUser.cocktails[index].rating }</p>  
                </div>
              </button>
      }
    });
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