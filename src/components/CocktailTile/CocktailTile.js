import React from 'react';

const CocktailTile = (props) => {

  const testFunc = () => {
    console.log(props.cocktail.cocktailName)
  }

  return <article className="cocktail-tile">
      <p>This is a Cocktail Tiles</p>
      { testFunc() }
      <p>{ props.cocktail.cocktailName }</p>
    </article>
}

export default CocktailTile;