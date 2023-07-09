import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.scss';

const Pages = ['home', 'about', 'menu', 'awards', 'contact']

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar">

      <div className="navbar__logo">
        <img src={images.gericht} alt="app__logo" />
      </div>

      <ul className="navbar__links">
        {Pages.map(page => (
          <li key={page + 'list1'} className="p__opensans"><a href={`#${page}`}>{page}</a></li>
        ))}
      </ul>

      <div className="navbar__login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>

      <div className="navbar__smallscreen">

        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar__smallscreen_overlay flex__center slide-bottom">

            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />

            <ul className="navbar__smallscreen_links">
              {Pages.map(page => (
                <li key={page + 'list2'}><a href={`#${page}`} onClick={() => setToggleMenu(false)}>{page}</a></li>
              ))}
            </ul>
          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;
