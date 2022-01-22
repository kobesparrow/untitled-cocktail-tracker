import React, { Component } from 'react';
import userData from '../../data/userDataSet';
import Mando from '../../images/mando-helmet.png';

class UserDisplay extends Component {
  constructor() {
    super()
  
  }

  totalCocktailsPoured = () => {
    console.log(userData[0].userName)
  }



  render() {
    return <article className="user-display">
        <img src={ Mando } className="user-avatar" />
        <p className="subhead">{ userData[0].userName }</p>
        <p>Cocktails poured: {this.totalCocktailsPoured()}</p>
        <p>Percent complete:</p>
        <p>Recent Drink History:</p>
      </article>
  }
}

export default UserDisplay;