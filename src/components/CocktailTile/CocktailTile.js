import React from 'react';
import Flute from '../../images/flute.png';
import Highball from '../../images/highball.png';
import Martini from '../../images/martini.png';
import Rocks from '../../images/rocks.png';
import Shaker from '../../images/shaker.png'


const CocktailTile = ({cocktail: {cocktailName, glassware}, displayDetail}) => {

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


 
  return <article className="cocktail-tile">
      <img src={ returnGlassware(glassware) } />
      <p>{ cocktailName }</p>
      <button onClick={ () => displayDetail(cocktailName) }>Test this</button>
    </article>
}

export default CocktailTile;