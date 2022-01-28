import React, { Component } from 'react';
import userData from '../../data/userDataSet';
import cocktailData from '../../data/cocktailDataSet';
import Mando from '../../images/mando-helmet.png';
import flute from '../../images/flute.png';
import highball from '../../images/highball.png';
import coupe from '../../images/martini.png';
import rocks from '../../images/rocks.png';

class UserDisplay extends Component {
  constructor() {
    super()
  
  }

  totalCocktailsPoured = () => {
    // console.log(userData[0].userName)
  }

  displayUserDrinkHistory = () => {
    let recentDrinks = [];
    
    userData[0].cocktails.forEach(cocktail => {
      recentDrinks.push(cocktailData.find(data => data.cocktailName === cocktail.cocktailName))
    })

    // return recentDrinks.map(drink => {
    //   return <div>
    //       <p></p>
    //       <p></p>
    //     </div>
    // })


    let bigAssReduce = userData[0].cocktails.reduce((acc, cocktail) => {
      let drinkData = cocktailData.find(data => data.cocktailName === cocktail.cocktailName)
      let recentDrinkDiv = <div>
          {/* <img src={ drinkData.glassware } /> */}
          <img src={ drinkData.glasswareSource } />
          <p>{ drinkData.cocktailName }</p>
          <p>Date Consumed: { cocktail.mostRecent }</p>
        </div>
      acc.push(recentDrinkDiv)
      return acc;
    }, [])

    return bigAssReduce
  }

  render() {
    return <article className="user-display">
        <img src={ Mando } className="user-avatar" />
        <p className="subhead">{ userData[0].userName }</p>
        <p>Cocktails poured: {this.totalCocktailsPoured()}</p>
        <p>Percent complete:</p>
        <p>Recent Drink History:</p>
        { this.displayUserDrinkHistory() }
      </article>
  }
}

export default UserDisplay;