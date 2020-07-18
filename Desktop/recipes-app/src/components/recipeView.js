import React from 'react';
import { Link } from 'react-router-dom';

const recipeView = (props) => {
  //   const { title, image, bitly_url } = props.location.state.meal;

  console.log(props);
  console.log(props.location.state.meal);

  const { title, image } = props.location.state.meal;
  console.log(image);

  return (
    <div>
      <img src={image} alt={title} />
      <p>Spoonacular</p>

      <button>
        <Link to='/breakfast'>Back to Breakfast Recipes</Link>
      </button>
    </div>
  );
};

export default recipeView;
