import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faRssSquare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const TwitterButton = <FontAwesomeIcon icon={faTwitterSquare} size='2x' />;
  const InstagramButton = (
    <FontAwesomeIcon icon={faInstagramSquare} size='2x' />
  );
  const FacebookButton = <FontAwesomeIcon icon={faFacebookSquare} size='2x' />;
  const YoutubeButton = <FontAwesomeIcon icon={faYoutubeSquare} size='2x' />;
  const RssButton = <FontAwesomeIcon icon={faRssSquare} size='2x' />;
  return (
    <div className='footer'>
      <div className='footer--container'>
        <div className='footer__logo'>logo here</div>
        <div className='footer__sitemap'>
          {/* <h1>Site Map</h1> */}
          <div className='footer__sitemap--container'>
            <div className='footer__sitemap--container--column'>
              <ul>
                <li>Recipes</li>
                <li>Keto Staples</li>
                <li>Editor's Spotlight</li>
                <li>Mealplans</li>
                <li>Mealplans</li>
              </ul>
            </div>

            <div className='footer__sitemap--container--column'>
              <ul>
                <li>Recipes</li>
                <li>Keto Staples</li>
                <li>Editor's Spotlight</li>
                <li>Mealplans</li>
                <li>Mealplans</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer__socialmedia'>
          {InstagramButton}
          {YoutubeButton}
          {TwitterButton}
          {FacebookButton}
          {RssButton}
        </div>
      </div>
    </div>
  );
};

export default Footer;
