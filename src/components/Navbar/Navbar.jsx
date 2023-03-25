import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ scrollTo }) => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1>TechTime</h1>
      </div>

      <div className="navbar__links">
        <div className="navbar__links__text">
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

        <div className="navbar__links__button">
          <button type="button">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
