import React, { Component } from 'react';
import Mando from '../../images/mando-helmet.png';

class UserDisplay extends Component {
  constructor() {
    super()
  
  }

  render() {
    return <article className="user-display">
        <img src={ Mando } className="user-avatar" />
        <p className="subhead">This is the user name</p>
        <p>Cocktails poured:</p>
        <p>Percent complete:</p>
        <p>Recent Drink History:</p>
      </article>
  }
}

export default UserDisplay;