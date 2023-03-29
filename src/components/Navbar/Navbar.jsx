import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ scrollTo }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1>TechTime</h1>
      </div>

      <div className={`navbar__links ${showLinks && 'mobile'}`}>
        <div className="navbar__links__text">
          <NavLink
            to="#"
            onClick={() => {
              setShowLinks(false);
              scrollTo('home');
            }}
            className="active-link"
          >
            Home
          </NavLink>
          <NavLink
            to="#"
            onClick={() => {
              setShowLinks(false);
              scrollTo('about-us');
            }}
          >
            About Us
          </NavLink>
          <NavLink
            to="#"
            onClick={() => {
              setShowLinks(false);
              scrollTo('courses');
            }}
          >
            Courses
          </NavLink>
          <NavLink
            to="#"
            onClick={() => {
              setShowLinks(false);
              scrollTo('testimonial');
            }}
          >
            Testimonial
          </NavLink>
          <NavLink
            to="#"
            onClick={() => {
              setShowLinks(false);
              scrollTo('community');
            }}
          >
            Community
          </NavLink>
        </div>

        <div className="navbar__links__button">
          <button type="button">Enroll Now</button>
        </div>
      </div>

      <button className="nav-toggle" onClick={toggleLinks}>
        {showLinks ? <FaTimes /> : <FaBars />}
      </button>

      {/* <div
        className="links-container-mobile"
      >
        <div className="links-mobile" ref={linksRef}>
          <NavLink
            to="#"
            onClick={() => scrollTo('home')}
            className="active-link"
          >
            Home
          </NavLink>
          <NavLink to="#" onClick={() => scrollTo('about-us')}>
            About Us
          </NavLink>
          <NavLink to="#" onClick={() => scrollTo('courses')}>
            Courses
          </NavLink>
          <NavLink to="#" onClick={() => scrollTo('testimonial')}>
            Testimonial
          </NavLink>
          <NavLink to="#" onClick={() => scrollTo('community')}>
            Community
          </NavLink>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
