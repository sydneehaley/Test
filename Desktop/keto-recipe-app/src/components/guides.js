import React, { Component } from 'react';
import axios from 'axios';

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
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';

import meats_recipes from './images/meats_recipes.jpg';
import salmon from './images/salmon.jpg';
import broccoli from './images/broccoli.jpg';
import avocado from './images/avocado.jpg';
import meats from './images/meats.jpg';
import soups from './images/soups.jpg';
import veggies from './images/veggies.jpg';
import casseroles from './images/casseroles.jpg';

const PreviousButton = <FontAwesomeIcon icon={faChevronLeft} size='2x' />;
const NextButton = <FontAwesomeIcon icon={faChevronRight} size='2x' />;

class Recipes extends Component {
  state = {
    meal_catagories: { meats: [], soups: [], casseroles: [], salads: [] },
    by_ingredient: {
      eggs: [],
      cheese: [],
      butter: [],
      oliveoil: [],
      sweeteners: [],
      avocados: [],
    },
  };

  // slider = () => {
  //   const carousel = document.querySelector("[data-target='carousel']");
  //   const card = carousel.querySelector("[data-target='card']");
  //   const leftButton = document.querySelector("[data-action='slideLeft']");
  //   const rightButton = document.querySelector("[data-action='slideRight']");

  //   // Prepare to limit the direction in which the carousel can slide,
  //   // and to control how much the carousel advances by each time.
  //   // In order to slide the carousel so that only three cards are perfectly visible each time,
  //   // you need to know the carousel width, and the margin placed on a given card in the carousel
  //   const carouselWidth = carousel.offsetWidth;
  //   const cardStyle = card.currentStyle || window.getComputedStyle(card);
  //   const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

  //   // Count the number of total cards you have
  //   const cardCount = carousel.querySelectorAll("[data-target='card']").length;

  //   // Define an offset property to dynamically update by clicking the button controls
  //   // as well as a maxX property so the carousel knows when to stop at the upper limit
  //   let offset = 0;
  //   const maxX = -(
  //     (cardCount / 3) * carouselWidth +
  //     cardMarginRight * (cardCount / 3) -
  //     carouselWidth -
  //     cardMarginRight
  //   );

  //   // Add the click events
  //   leftButton.addEventListener('click', function () {
  //     if (offset !== 0) {
  //       offset += carouselWidth + cardMarginRight;
  //       carousel.style.transform = `translateX(${offset}px)`;
  //     }
  //   });

  //   rightButton.addEventListener('click', function () {
  //     if (offset !== maxX) {
  //       offset -= carouselWidth + cardMarginRight;
  //       carousel.style.transform = `translateX(${offset}px)`;
  //     }
  //   });
  // };

  // componentDidMount() {
  //   return this.slider();
  // }

  render() {
    const renderSlides = () =>
      [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <div className='card1__background'>
          <h3>Slide {num}</h3>
        </div>
      ));
    return (
      <div>
        {/* <div className='recipes__mainheader'>
          <div className='recipes__mainheader--overlay'>
            <h1>Recipes</h1>
          </div>
        </div> */}

        <div className='recipes__mealcatagory'>
          <h4>Recommended Collections</h4>
        </div>

        <div className='wrapper '>
          <Slider
            dots={true}
            slidesToShow={2}
            slidesToScroll={2}
            autoplay={true}
            autoplaySpeed={3000}>
            {renderSlides()}
          </Slider>
        </div>
        {/* <div class='wrapper'>
          <div class='carousel' data-target='carousel'>
            <div class='card' data-target='card'>
              <div className='card1__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card2__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card3__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card4__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card5__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card6__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card7__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card8__background'></div>
              Meats
            </div>
            <div class='card' data-target='card'>
              <div className='card9__background'></div>
              Meats
            </div>
          </div>
        </div>
        <div class='button-wrapper'>
          <button data-action='slideLeft'>{PreviousButton}</button>
          <button data-action='slideRight'>{NextButton}</button>
        </div> */}
        {/* <MealTypeRecipes />
        <IngredientsRecipes /> */}
        <Spotlight />
      </div>
    );
  }
}

const Spotlight = () => {
  return (
    <div className='recipes__spotlight'>
      <h4>Spotlight</h4>

      <div className='recipes__spotlight--container'>
        <div className='recipes__spotlight--container--main'></div>
        <div className='recipes__spotlight--container--main--info--container'>
          <div className='recipes__spotlight--container--main--info'>
            <h2>Summer Treats</h2>
            <p>
              Summer is all about fun! We're highlighting our favorite summer
              treats. Keto approved, of course.
            </p>
          </div>
        </div>
      </div>
      {/* <h4>Explore More Summer Treats Recipes</h4> */}
      <div className='recipes__spotlight--container--recipes'>
        <div className='recipes__spotlight--container--recipes-recipe'>
          <img src={meats} alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg' />

          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Keto Vanilla, Chocolate, Strawberry Ice Cream</h2>
          </div>
        </div>

        <div className='recipes__spotlight--container--recipes-recipe'>
          <img src={soups} alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg' />
          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Keto Cheesecake Dip and Fruit</h2>
          </div>
        </div>

        <div className='recipes__spotlight--container--recipes-recipe'>
          <img
            src={casseroles}
            alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg'
          />
          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Keto Cheesecake Dip and Fruit</h2>
          </div>
        </div>

        <div className='recipes__spotlight--container--recipes-recipe'>
          <img
            src={veggies}
            alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg'
          />
          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Vegan Key Lime Popsicles (Paleo + a Keto Option)</h2>
          </div>
        </div>
      </div>
      <div className='recipes__spotlight--container--recipes'>
        <div className='recipes__spotlight--container--recipes-recipe'>
          <img src={meats} alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg' />

          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Keto Vanilla, Chocolate, Strawberry Ice Cream</h2>
          </div>
        </div>

        <div className='recipes__spotlight--container--recipes-recipe'>
          <img src={soups} alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg' />
          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Keto Cheesecake Dip and Fruit</h2>
          </div>
        </div>

        <div className='recipes__spotlight--container--recipes-recipe'>
          <img
            src={casseroles}
            alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg'
          />
          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Keto Cheesecake Dip and Fruit</h2>
          </div>
        </div>

        <div className='recipes__spotlight--container--recipes-recipe'>
          <img
            src={veggies}
            alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg'
          />
          <div className='recipes__spotlight--container--recipes-recipe-info'>
            <span>Epicurious</span>
            <h2>Vegan Key Lime Popsicles (Paleo + a Keto Option)</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
