import React from 'react';

const CocktailDetail = ({ cocktail }) => {

  const testFunc = () => {
    console.log('test', cocktail)
  }



  return <article className="cocktail-detail">
      <div className="left-column">
        <p>This is the picture of the glass</p>
        <p>This is the description</p>
        <div>These are the ingredients</div>
      </div>
      <div className="right-column">
        <p>{ cocktail.cocktailName }</p>
        <p>This is the rating</p>
        <p>This is the date last poured for the user</p>
        <p>This is the total number drank</p>
        <p>These are tasting notes</p>
      </div>
    </article> 
}

export default CocktailDetail;