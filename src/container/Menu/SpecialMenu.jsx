import React from 'react';

import { SubHeading, MenuItemPage } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.scss';

const SpecialMenu = () => (

  <div className="specialMenu flex__center section__padding" id="menu">

    <div className="specialMenu__title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="specialMenu__menu">

      <div className="specialMenu__menu_wine  flex__center">
        <p className="specialMenu__menu_heading">Wine & Beer</p>
        <div className="specialMenu__menu_items">
          {data.wines.map((wine, index) => (
            <MenuItemPage key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="specialMenu__menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="specialMenu__menu_cocktails  flex__center">
        <p className="specialMenu__menu_heading">Cocktails</p>
        <div className="specialMenu__menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItemPage key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;
