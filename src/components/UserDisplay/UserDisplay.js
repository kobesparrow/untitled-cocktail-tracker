import React, { Component } from 'react';
import User from '../User/User';
import userData from '../../data/userDataSet';
import cocktailData from '../../data/cocktailDataSet';


class UserDisplay extends Component {
  constructor() {
    super()
  
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
        return <User 
                currentUser={ this.props.currentUser } />
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