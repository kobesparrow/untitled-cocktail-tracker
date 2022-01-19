import React from 'react';
import Flute from '../../images/flute.png';
import Highball from '../../images/highball.png'
import Martini from '../../images/martini.png'
import Rocks from '../../images/rocks.png'
import Shaker from '../../images/shaker.png'


const CocktailTile = ({cocktail, cocktail: {cocktailName, glassware}}) => {

  const testFunc = () => {
    console.log(glassware)
  }

  const returnGlassware = (glassware) => {
    switch (glassware) {
      case 'coupe':
        return Martini     
      case 'rocks':
        return Rocks    
      case 'highball':
        return Highball     
      case 'flute':
        return Flute     
      default:
        break;
    }
    return glassware
  }
 
  return <article onClick={ testFunc } className="cocktail-tile">
      <img src={ returnGlassware(glassware) } />
      {/* { testFunc() } */}
      <p>{ cocktailName }</p>
      {/* <button onClick={ testFunc }>Test Button</button> */}
    </article>
}

export default CocktailTile;