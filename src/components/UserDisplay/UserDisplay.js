import React, { Component } from 'react';

class UserDisplay extends Component {
  constructor() {
    super()
  
  }

  render() {
    return <article className="user-display">
        <p>This is the user name</p>
        <p></p>
        <p></p>
        <p>Recent Drink History:</p>
      </article>
  }
}

export default UserDisplay;