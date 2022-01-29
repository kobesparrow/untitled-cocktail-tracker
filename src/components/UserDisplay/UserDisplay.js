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

  percentComplete = () => {
    let percentage = ((userData[0].cocktails.length / 77) * 100).toFixed(1);
    return percentage.toString() + `%`
    // console.log('testNum', testNum)
    // console.log('result', result)
  }

  testFunc = (data) => {
    console.log('test', data)
  }

  displayUserDrinkHistory = () => {
    let bigAssReduce = userData[0].cocktails.reduce((acc, cocktail) => {
      let drinkData = cocktailData.find(data => data.cocktailName === cocktail.cocktailName)
      let recentDrinkDiv = <button className="recent-drink-display" onClick={ () => this.props.displayDetail(cocktail.cocktailName) }>
          {/* <img src={ drinkData.glassware } /> */}
          <img src={ drinkData.glasswareSource } />
          <div>
            <p>{ drinkData.cocktailName }</p>
            <p>Last Consumed: { cocktail.mostRecent }</p>  
          </div>
        </button>
      acc.push(recentDrinkDiv)
      return acc;
    }, [])

    return bigAssReduce
  }

  render() {
    return <article className="user-display">
        <img src={ Mando } className="user-avatar" />
        <p className="subhead">{ userData[0].userName }</p>
        <p>Cocktails poured: { userData[0].cocktails.length }</p>
        <p>Percent complete: { this.percentComplete() } </p>
        <p>Recent Drink History</p>
        <div>{ this.displayUserDrinkHistory() }</div>
      </article>
  }
}

export default UserDisplay;