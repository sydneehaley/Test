import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const meal_breakfast_url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=245c1de7e3dd44bcaad22cb705677483&diet=keto&type=breakfast&number=100&maxCarbs=10&maxSugar=6`;

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

      this.setState({ breakfast: breakfastres });
      console.log(this.state.breakfast);
    });
  }

  render() {
    return (
      <div>
        <MealTypeRecipes />
      </div>
    );
  }
}

const MealTypeRecipes = () => {
  return (
    <div className='recipes__meallist'>
      <h1>Recipe Collection</h1>
      <div className='recipes__meallist-container'>
        <div className='recipes__meallist--list'>
          <h3>
            <Link to='/breakfast'>Breakfast</Link>
          </h3>
          {/* <ul>
            <li>Breakfast</li>
            <li>Brunch</li>
            <li>Lunch</li>
            <li>Snacks</li>
            <li>Appetizers</li>
            <li>Drinks</li>
            <li>Dinner</li>
            <li>Dessert</li>
          </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Snacks</h3>
          {/* <ul>
            <li>Soups, Stews, Chili</li>
            <li>Casseroles</li>
            <li>Salads</li>
            <li>Pizzas</li>
            <li>Sandwiches</li>
            <li>Dips, Sauces, Dressings</li>
            <li>Marinades</li>
            <li>Seasonings</li>
          </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Full Meals</h3>
          {/* <ul>
            <li>Under 20 Carbs</li>
            <li>Under 500 Calories</li>
          </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Soups, Stews, Chili</h3>
          {/* <ul>
            <li>American</li>
            <li>Asian</li>
            <li>Mexican</li>
            <li>Indian</li>
          </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Casseroles</h3>
          {/* <ul>
            <li>Christmas</li>
            <li>New Year</li>
            <li>Valentine's Day</li>
            <li>Memorial Day</li>
            <li>4th of July</li>
            <li>Birthdays</li>
            <li>Wedding/Bridal</li>
          </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Pizzas</h3>
          {/* <ul>
            <li>Cookies</li>
            <li>Cakes</li>
            <li>Pies</li>
            <li>Bars</li>
            <li>4th of July</li>
          </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Salads</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Sauces & Dips</h3>
          {/* <ul>
          <li>Eggs</li>
          <li>Milks and Creams</li>
          <li>Cheeses</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Under 500 Calories</h3>
          {/* <ul>
          <li>Butter</li>
          <li>Olive Oil</li>
          <li>Coconut Oil</li>
          <li>MCT Oil</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Baking</h3>
          {/* <ul>
          <li>Nuts</li>
          <li>Nut-Butters</li>
          <li>Seeds</li>
          <li>Coconut</li>
        </ul> */}
        </div>
        <div className='recipes__meallist--list'>
          <h3>Desserts</h3>
          {/* <ul>
          <li>Berries</li>
          <li>Avocado</li>
          <li>Tomatoes</li>
          <li>Olives</li>
        </ul> */}
        </div>
        <div className='recipes__meallist--list'>
          <h3>Smoothies & Drinks</h3>
          {/* <ul>
          <li>Greens</li>
          <li>Asparagus</li>
          <li>Broccoli</li>
          <li>Cabbage</li>
          <li>Zucchini</li>
          <li>Cucumber</li>
          <li>Cauliflower</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Meats & Fish</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Eggs</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Dairy</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Oils</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Veggies</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Fruits</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Nuts</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>

        <div className='recipes__meallist--list'>
          <h3>Seeds</h3>
          {/* <ul>
          <li>Fish</li>
          <li>Chicken/Poultry</li>
          <li>Beef</li>
          <li>Pork</li>
        </ul> */}
        </div>
      </div>
    </div>
  );
};

const IngredientsRecipes = () => {
  return <div className='recipes__meallist-container'></div>;
};

const SearchRecipesSection = () => {
  return (
    <div className='recipes__search col-lg-12'>
      <div className='recipes__search--container col-lg-12'>
        <h1>I would like to cook:</h1>
        <div className='recipes__search--form'>
          <Form inline>
            <Form.Control
              type='text'
              className='mr-lg-1'
              id='inputPassword6'
              aria-describedby='search'
              size='lg'
            />
            <Button variant='dark' size='lg'>
              Search
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
