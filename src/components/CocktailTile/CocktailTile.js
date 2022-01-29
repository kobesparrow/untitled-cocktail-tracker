import React from 'react';

const CocktailTile = ({cocktail: {cocktailName, glasswareSource}, displayDetail}) => {

  return <button className="cocktail-tile" onClick={ () => displayDetail(cocktailName) }>
      <img src={ glasswareSource } />
      <p>{ cocktailName }</p>
    </button>
}

export default CocktailTile;