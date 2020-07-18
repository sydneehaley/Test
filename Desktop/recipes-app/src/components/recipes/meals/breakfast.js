import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const meal_breakfast_url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=245c1de7e3dd44bcaad22cb705677483&diet=keto&type=breakfast&number=50&maxCarbs=10&maxSugar=6&instructionsRequired=true&addRecipeInformation=true&fillIngredients=true`;
const NextPageButton = <FontAwesomeIcon icon={faChevronRight} size='1x' />;

class Breakfast extends Component {
  state = {
    breakfast: [],
  };

  componentDidMount() {
    axios.get(meal_breakfast_url).then((res) => {
      const breakfastres = res;
      console.log(breakfastres);

      this.setState({ breakfast: breakfastres.data.results });
      console.log(this.state.breakfast);
    });
  }

  render() {
    return (
      <div>
        <BreakfastLandingPageNav />
        <BreakfastResults breakfast={this.state.breakfast} />
      </div>
    );
  }
}

const BreakfastLandingPageNav = () => {
  return (
    <div className='landpage_navigation'>
      <Link to='/Recipes'>Recipes</Link>
      {NextPageButton}
      <span>Breakfast</span>
    </div>
  );
};

const BreakfastResults = ({ breakfast }) => {
  const title = breakfast.slice(0, 1);
  const breakfastArray1 = breakfast.slice(0, 5);
  const breakfastArray2 = breakfast.slice(5, 10);
  const breakfastArray3 = breakfast.slice(10, 15);
  const breakfastArray4 = breakfast.slice(15, 20);
  const breakfastArray5 = breakfast.slice(20, 25);
  const breakfastArray6 = breakfast.slice(25, 30);
  const breakfastArray7 = breakfast.slice(30, 35);
  const breakfastArray8 = breakfast.slice(35, 40);
  console.log(breakfastArray1);
  return (
    <div className='landingpage_catagory'>
      {title.map((meal) => {
        return <h1>Breakfast Recipes</h1>;
      })}
      <div className='landingpage_catagory--list'>
        {breakfastArray1.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>

      <div className='landingpage_catagory--list'>
        {breakfastArray2.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>

      <div className='landingpage_catagory--list'>
        {breakfastArray3.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>

      <div className='landingpage_catagory--list'>
        {breakfastArray4.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>

      <div className='landingpage_catagory--list'>
        {breakfastArray5.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>

      <div className='landingpage_catagory--list'>
        {breakfastArray6.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>

      <div className='landingpage_catagory--list'>
        {breakfastArray7.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>

      <div className='landingpage_catagory--list'>
        {breakfastArray8.map((meal) => {
          return (
            <div className='landingpage_recipe--container'>
              <div className='landingpage_recipe--img'>
                <img src={meal.image} />
              </div>
              <div className='landingpage_recipe--info'>
                {' '}
                <h5>{meal.title}</h5>
                <Link
                  to={{
                    pathname: `/meal/${meal.id}`,
                    state: { meal },
                  }}>
                  <button>View</button>
                </Link>
              </div>
              {/* <img src={meal.image} /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breakfast;
