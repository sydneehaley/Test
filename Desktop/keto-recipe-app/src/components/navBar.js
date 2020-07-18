import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const searchButton = <FontAwesomeIcon icon={faSearch} />;

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand='lg' className='navbar'>
          <Navbar.Brand href='#home'>Ketogenic</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/recipes'>Recipes</NavLink>
              <NavLink to='/mealplans'>Mealplans</NavLink>
              <NavLink to='/guides'>Guides</NavLink>
              {/* <Nav.Link href='#link'>Grocery Lists</Nav.Link>
              <Nav.Link href='#link'>My Recipes</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          <div className='navbar__form'>
            <form>
              <input
                type='text'
                placeholder='Search for recipes'
                className='mr-sm-2'
                size='lg'
              />
              <button>{searchButton}</button>
            </form>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
