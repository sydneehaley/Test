import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

const meal_breakfast_url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=245c1de7e3dd44bcaad22cb705677483&diet=keto&type=breakfast&number=100&maxCarbs=10&maxSugar=6`;

const NextPageButton = <FontAwesomeIcon icon={faChevronRight} size='1x' />;

class Recipes extends Component {
  state = {
    meal_catagories: {
      breakfast: [],
      brunch: [],
      lunch: [],
      snacks: [],
      appetizers: [],
      drinks: [],
      dinner: [],
      dessert: [],
    },
    dish_catagories: {
      eggs: [],
      cheese: [],
      butter: [],
      oliveoil: [],
      sweeteners: [],
      avocados: [],
    },
    diet_catagories: {
      under20carbs: [],
      under500calories: [],
    },
    world_cuisine_catagories: {
      american: [],
      chinese: [],
      mexican: [],
      indian: [],
    },
    holiday_catagories: {
      christmas: [],
      newyear: [],
      valentines_day: [],
      memorial_day: [],
      july4th: [],
      birthdays: [],
      wedding: [],
    },
    baking_catagories: {
      cookies: [],
      cakes: [],
      pies: [],
      bars: [],
    },
    meats_catagories: {
      fish: [],
      chicken: [],
      beef: [],
      pork: [],
    },
    eggs_dairy: {
      eggs: [],
      milks_creams: [],
      cheese: [],
    },
    fats_oils_catagories: {
      butter: [],
      olive_oil: [],
      coconut_oil: [],
      mct_oil: [],
    },
    nuts_seeds_catagories: {
      nuts: [],
      nut_butters: [],
      seeds: [],
      coconut: [],
    },
    fruits_catagories: {
      berries: [],
      avocado: [],
      tomatoes: [],
      olives: [],
    },
    veggies_catagories: {
      greens: [],
      asparagus: [],
      broccoli: [],
      cabbage: [],
      zucchini: [],
      cucumber: [],
      cauliflower: [],
    },
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
        <MealsLandingPageNav />
        <Meals_Catagories />
      </div>
    );
  }
}

const MealsLandingPageNav = () => {
  return (
    <div className='landpage_navigation'>
      <Link to='/Recipes'>Recipes</Link>
      {NextPageButton}
      <span>Meals</span>
    </div>
  );
};

const Meals_Catagories = () => {
  return (
    <div className='meals__meallist'>
      <h1>Meals Collection</h1>
      <div className='meals__meallist-container'>
        <div className='meals__meallist--breakfast'>
          <div className='meals__meallist--breakfast--img'></div>
          <div className='meals__meallist--breakfast--info'>
            {' '}
            <Link to='/breakfast'>Breakfast</Link>
          </div>
        </div>

        <div className='meals__meallist--brunch'>
          <div className='meals__meallist--brunch--img'></div>
          <div className='meals__meallist--brunch--info'>Brunch</div>
        </div>

        <div className='meals__meallist--lunch'>
          <div className='meals__meallist--lunch--img'></div>
          <div className='meals__meallist--lunch--info'>Lunch</div>
        </div>

        <div className='meals__meallist--snacks'>
          <div className='meals__meallist--snacks--img'></div>
          <div className='meals__meallist--snacks--info'>Snacks</div>
        </div>

        <div className='meals__meallist--appetizers'>
          <div className='meals__meallist--appetizers--img'></div>
          <div className='meals__meallist--appetizers--info'>Appetizers</div>
        </div>

        <div className='meals__meallist--drinks'>
          <div className='meals__meallist--drinks--img'></div>
          <div className='meals__meallist--drinks--info'>Drinks</div>
        </div>

        <div className='meals__meallist--dinner'>
          <div className='meals__meallist--dinner--img'></div>
          <div className='meals__meallist--dinner--info'>Dinner</div>
        </div>

        <div className='meals__meallist--desserts'>
          <div className='meals__meallist--desserts--img'></div>
          <div className='meals__meallist--desserts--info'>Desserts</div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
