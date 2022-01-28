import React from 'react';

const CocktailTile = ({cocktail: {cocktailName, glasswareSource}, displayDetail}) => {

  return <article className="cocktail-tile">
      <img src={ glasswareSource } />
      <p>{ cocktailName }</p>
      <button onClick={ () => displayDetail(cocktailName) }>Test this</button>
    </article>
}

export default CocktailTile;