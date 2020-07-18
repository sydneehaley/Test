import React, { Component } from 'react';
import axios from 'axios';

import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';

import NavBar from './navBar';
import salmon from './images/salmon.jpg';
import broccoli from './images/broccoli.jpg';
import avocado from './images/avocado.jpg';
import meats from './images/meats.jpg';
import soups from './images/soups.jpg';
import veggies from './images/veggies.jpg';
import casseroles from './images/casseroles.jpg';
import vanillaicecream from './images/vanillaicecream.jpg';

import Carousel from 'react-bootstrap/Carousel';

const NYTIMES_API_KEY = 'r1stUqQPiCCOJxIG5zSeLP44F6JYmHX1';
const SPOONACULAR_API_KEY = '245c1de7e3dd44bcaad22cb705677483';
const summerRecipesSpotlight = `https://api.spoonacular.com/recipes/extract?url=https://lifemadesweeter.com/no-churn-vanilla-ice-cream/&apiKey=${SPOONACULAR_API_KEY}`;
const summerRecipesSpotlight2 = `https://api.spoonacular.com/recipes/extract?url=https://slimfast.com/recipes/keto-cheesecake-dip-and-fruit/&apiKey=${SPOONACULAR_API_KEY}`;
const summerRecipesSpotlight3 = `https://api.spoonacular.com/recipes/extract?url=https://www.theroastedroot.net/vegan-key-lime-popsicles-paleo-a-keto-option/&apiKey=${SPOONACULAR_API_KEY}`;

const videosUrl = `https://api.spoonacular.com/food/videos/search?diet=keto&apiKey=${SPOONACULAR_API_KEY}&query=keto&number=10`;
const aFavoriteUrl = `https://api.spoonacular.com/recipes/extract?url=http://www.pineappleandcoconut.com/recipes/smoked-salmon-baked-eggs/&apiKey=${SPOONACULAR_API_KEY}`;
const newsUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=keto diet&api-key=${NYTIMES_API_KEY}`;
const RecipesWereEatingArea = `https://api.spoonacular.com/recipes/informationBulk?ids=879067,827,152742,1177007,1184115&apiKey=${SPOONACULAR_API_KEY}`;
const ProductsUrl = `https://api.spoonacular.com/recipes/informationBulk?ids=577421,16342,464724,9416,10742,572249,87974,469230,560829,474396,548173,1043929&apiKey=${SPOONACULAR_API_KEY}`;

class Home extends Component {
  state = {
    summerSpotlight: {},
    summerSpotlight2: {},
    summerSpotlight3: {},
    afavorite: [],
    recipeswereeating: [],
    products: [],
  };

  componentDidMount() {
    axios.get(summerRecipesSpotlight).then((res) => {
      const recipe = res;
      console.log(recipe);

      this.setState({ summerSpotlight: recipe.data });
      console.log(this.state.summerSpotlight);
    });

    axios.get(summerRecipesSpotlight2).then((res2) => {
      const recipe2 = res2;
      console.log(recipe2);

      this.setState({ summerSpotlight2: recipe2.data });
      console.log(this.state.summerSpotlight2);
    });

    axios.get(summerRecipesSpotlight3).then((res3) => {
      const recipe3 = res3;
      console.log(recipe3);

      this.setState({ summerSpotlight3: recipe3.data });
      console.log(this.state.summerSpotlight3);
    });

    axios.get(aFavoriteUrl).then((res4) => {
      const afavorite = res4;
      console.log(afavorite);

      this.setState({ afavorite: afavorite.data });
      console.log(this.state.afavorite);
    });
    axios.get(RecipesWereEatingArea).then((res5) => {
      const recipeswereeating = res5;
      console.log(recipeswereeating);

      this.setState({ recipeswereeating: recipeswereeating.data });
      console.log(this.state.recipeswereeating);
    });
    axios.get(ProductsUrl).then((res6) => {
      const products = res6;
      console.log(products);

      this.setState({ products: products.data });
      console.log(this.state.products);
    });
  }

  // test = () => {
  //   console.log('Testing');
  // };

  render() {
    return (
      <div>
        <Carousel className='home__intro'>
          <Carousel.Item className='home__intro--slide1'></Carousel.Item>

          <Carousel.Item className='home__intro--slide2'></Carousel.Item>

          <Carousel.Item className='home__intro--slide3'></Carousel.Item>
        </Carousel>
        {/* <div className='home__jumbotron--search'>
          <h1>Search over +500 Keto Recipes</h1>
          <Form className='home__jumbotron--search--form' inline>
            <FormControl
              type='text'
              placeholder='Search for recipes'
              className='mr-sm-2'
              size='lg'
            />
            <Button variant='success' size='lg'>
              Find A Recipe
            </Button>
          </Form>
        </div> */}
        <DietCatagories />
        <OurFavoritesSection afavorite={this.state.afavorite} />
        <div className='home__spotlight--container'>
          {/* <b>Spotlight</b> <br /> */}
          <h1>Spotlight</h1>
          <img src={vanillaicecream} />
          <div className='home__spotlight--container-hr'></div>
          <div className='home__spotlight--main'>
            <SummerRecipes summerSpotlight={this.state.summerSpotlight} />
            <div className='home__spotlight--etc--title'>
              <b>Recipes</b>
              <div className='home__spotlight--etc'>
                <SummerRecipesC2
                  summerSpotlight2={this.state.summerSpotlight2}
                />
                <SummerRecipesC3
                  summerSpotlight3={this.state.summerSpotlight3}
                />
              </div>
            </div>
          </div>
        </div>
        <MealPlanSection />
        <WhatWereEating recipeswereeating={this.state.recipeswereeating} />
        {/* <VideoSection videos={this.state.videos} /> */}
        <SubscribeSection />
        <div className='home__products--container'>
          <h1>More High Fat & Low Carb Recipes</h1>
          <ProductsSection products={this.state.products} />
          <ProductsSection2 products={this.state.products} />
          <ProductsSection3 products={this.state.products} />
        </div>
      </div>
    );
  }
}

const DietCatagories = () => {
  return (
    <div className='home__dietcatagories'>
      <h1>Curated Recipe Collections</h1>

      <div className='home__dietcatagories--catagories'>
        <div className='home__dietcatagories--catagories--catagory'>
          <img src={meats} alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg' />

          <h2>Meats</h2>
        </div>

        <div className='home__dietcatagories--catagories--catagory'>
          <img src={soups} alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg' />

          <h2>Soups</h2>
        </div>
        <div className='home__dietcatagories--catagories--catagory'>
          <img
            src={casseroles}
            alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg'
          />

          <h2>Casseroles</h2>
        </div>
        <div className='home__dietcatagories--catagories--catagory'>
          <img
            src={veggies}
            alt='alexandra-andersson-OmRMR2yPuS4-unsplash.jpg'
          />

          <h2>Salads</h2>
        </div>
      </div>
    </div>
  );
};

const SummerRecipes = ({ summerSpotlight }) => {
  const image = summerSpotlight.image;
  const title = summerSpotlight.title;
  console.log(image);
  return (
    <div>
      <div className='home__spotlight--spotlight--info'>
        <span>Guides</span>
        <h1>A guide to summer treats perfect for your keto diet</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas,
          ex non ornare varius, velit massa cursus quam, nec ultrices lectus mi
          sit amet nisi. Suspendisse potenti. Quisque vitae tincidunt libero,
          varius venenatis lacus.{' '}
        </p>
        <span>
          <button>Learn More</button>
        </span>
      </div>
    </div>
  );
};

const SummerRecipesC2 = ({ summerSpotlight2 }) => {
  const image = summerSpotlight2.image;
  const title = summerSpotlight2.title;
  console.log(image);
  return (
    <div>
      <div className='home__spotlight--etc--recipe'>
        {' '}
        <img src={image} />
        <div className='home__spotlight--etc--recipe--info'>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

const SummerRecipesC3 = ({ summerSpotlight3 }) => {
  const image = summerSpotlight3.image;
  const title = summerSpotlight3.title;
  console.log(image);
  return (
    <div>
      <div className='home__spotlight--etc--recipe'>
        {' '}
        <img src={image} />
        <div className='home__spotlight--etc--recipe--info'>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

// const VideoSection = ({ news }) => {
//   const videoArray = videos.slice(2, 6);
//   console.log(videoArray);
//   return (
//     <div className='home__videos--container'>
//       <h1> Videos</h1>
//       <div className='home__videos--container--videos'>
//         {videoArray.map((video) => {
//           return (
//             <div className='home__videos--container--video'>
//               <img src={video.thumbnail} />
//               <h2>{video.shortTitle}</h2>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

const MealPlanSection = () => {
  return (
    <div className='home__mealplan'>
      <div className='home__mealplan--container'>
        <div className='home__mealplan--splashimg'>.</div>
        <div className='home__mealplan--info'>
          <h1>Generate A Mealplan</h1>
          <p>
            An easy way to maintain your keto diet. The Mealplan generator
            prepares 3 meals a day.{' '}
          </p>
          <span>
            <Button variant='dark'>Learn more</Button>
          </span>
        </div>
      </div>
    </div>
  );
};

const OurFavoritesSection = ({ afavorite }) => {
  const image = afavorite.image;
  const title = afavorite.title;
  console.log(image);
  return (
    <div className='home__favorites--container'>
      <h1>Keto Staples</h1>
      <div className='home__favorites--spotlight'>
        {/* <span>
          <h1>Eggs!</h1>
        </span> */}.
      </div>
      <div className='home__favorites--main'>
        <div className='home__favorites--main--story'>
          <img src={salmon} />
        </div>
        <div className='home__favorites--main--story'>
          <img src={broccoli} />
        </div>
        <div className='home__favorites--main--story'>
          <img src={avocado} />
        </div>
      </div>
    </div>
  );
};

const WhatWereEating = ({ recipeswereeating }) => {
  return (
    <div className='home__recipeswereeating--container'>
      <h1>What We're Eating</h1>
      <p>June 2020</p>
      <div className='home__recipeswereeating--main'>
        {recipeswereeating.map((recipe) => {
          return (
            <div className='home__recipeswereeating--recipe'>
              <Image src={recipe.image} />
              <div className='home__recipeswereeating--recipe--info'>
                <h2>{recipe.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SubscribeSection = () => {
  return (
    <div className='home__subscribe--container'>
      <div className='home__subscribe--main'>
        <div className='home__subscribe--info'>
          <h1>
            Get our latest keto recipes, tips, and tools right in your inbox
          </h1>
        </div>
        <div className='home__subscribe--form'>
          <form>
            <input
              type='password'
              id='inputPassword6'
              aria-describedby='passwordHelpInline'
            />
            <button variant='dark'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = ({ products }) => {
  const ProductsArray = products.slice(0, 4);
  return (
    <div className='home__products--main'>
      {ProductsArray.map((product) => {
        return (
          <div className='home__products--product'>
            <Image src={product.image} />
            <div className='home__products--product--info'>
              <h2>{product.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ProductsSection2 = ({ products }) => {
  const ProductsArray = products.slice(4, 8);
  return (
    <div className='home__products--main'>
      {ProductsArray.map((product) => {
        return (
          <div className='home__products--product'>
            <Image src={product.image} />
            <div className='home__products--product--info'>
              <h2>{product.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ProductsSection3 = ({ products }) => {
  const ProductsArray = products.slice(8, 12);
  return (
    <div className='home__products--main'>
      {ProductsArray.map((product) => {
        return (
          <div className='home__products--product'>
            <Image src={product.image} />
            <div className='home__products--product--info'>
              <h2>{product.title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// const Footer = () => {
//   const TwitterButton = <FontAwesomeIcon icon={faTwitterSquare} size='2x' />;
//   const InstagramButton = (
//     <FontAwesomeIcon icon={faInstagramSquare} size='2x' />
//   );
//   const FacebookButton = <FontAwesomeIcon icon={faFacebookSquare} size='2x' />;
//   const YoutubeButton = <FontAwesomeIcon icon={faYoutubeSquare} size='2x' />;
//   const RssButton = <FontAwesomeIcon icon={faRssSquare} size='2x' />;
//   return (
//     <div className='footer'>
//       <div className='footer--container'>
//         <div className='footer__logo'>logo here</div>
//         <div className='footer__sitemap'>
//           {/* <h1>Site Map</h1> */}
//           <div className='footer__sitemap--container'>
//             <div className='footer__sitemap--container--column'>
//               <ul>
//                 <li>Recipes</li>
//                 <li>Keto Staples</li>
//                 <li>Editor's Spotlight</li>
//                 <li>Mealplans</li>
//                 <li>Mealplans</li>
//               </ul>
//             </div>

//             <div className='footer__sitemap--container--column'>
//               <ul>
//                 <li>Recipes</li>
//                 <li>Keto Staples</li>
//                 <li>Editor's Spotlight</li>
//                 <li>Mealplans</li>
//                 <li>Mealplans</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className='footer__socialmedia'>
//           {InstagramButton}
//           {YoutubeButton}
//           {TwitterButton}
//           {FacebookButton}
//           {RssButton}
//         </div>
//       </div>
//     </div>
//   );
// };

export default Home;
