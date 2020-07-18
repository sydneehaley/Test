import React from 'react';
import Home from './components/home';
import './public/css/bootstrap.css';
import './public/css/main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Recipes from './components/recipes';
import Meals from './components/recipes/meals/meals';
import Mealplans from './components/mealplans';
import Guides from './components/guides';
import Footer from './components/footer';
import Error from './components/Error';
import Breakfast from './components/recipes/meals/breakfast';
import recipeView from './components/recipeView';

function App() {
  const test = `This is a test`;
  console.log(test);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/recipes' component={Recipes} />
          <Route path='/meals' component={Meals} />
          <Route path='/mealplans' component={Mealplans} />
          <Route path='/guides' component={Guides} />
          <Route path='/breakfast' component={Breakfast} />
          <Route path='/meal/:id' component={recipeView} />

          <Route component={Error} />
        </Switch>
        <Footer />
      </BrowserRouter>

      {/* <Home /> */}
    </div>
  );
}

export default App;
