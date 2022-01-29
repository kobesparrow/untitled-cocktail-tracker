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
    let percentage = ((this.props.currentUser.cocktails.length / 77) * 100).toFixed(1);
    return percentage.toString() + `%`
  }

  // testFunc = (data) => {
  //   console.log('test', data)
  // }

  displayUserDrinkHistory = () => {
    let bigAssReduce = this.props.currentUser.cocktails.reduce((acc, cocktail) => {
      let drinkData = cocktailData.find(data => data.cocktailName === cocktail.cocktailName)
      let recentDrinkDiv = <button className="recent-drink-display" onClick={ () => this.props.displayDetail(cocktail.cocktailName) }>
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
 
  userDisplay = (toDisplay) => {
    switch (toDisplay) {
      case 'loading':
        return <div>Loading</div>
      case 'login':
        return <div className="user-login">
            <button id="Din Djarin" onClick={ (event) => this.props.displayUser(event.target.id) }>Mando</button>
            <button id="Grogu" onClick={ (event) => this.props.displayUser(event.target.id) }>Baby Yoda</button>
          </div>
      case 'user':
        return <article className="user-display">
            <img src={ Mando } className="user-avatar" />
            <p className="subhead">{ this.props.currentUser.userName }</p>
            <p>Cocktails poured: { this.props.currentUser.cocktails.length }</p>
            <p>Percent complete: { this.percentComplete() } </p>
            <p>Recent Drink History</p>
            <div>{ this.displayUserDrinkHistory() }</div>
          </article>
      default:
        return <p>there was an error</p>
    }
  }


  render() {
    return <section className="user-section">
        { this.userDisplay(this.props.currentDisplay) }
      </section>
  }
}

export default UserDisplay;