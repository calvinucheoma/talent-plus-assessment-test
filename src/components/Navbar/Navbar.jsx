import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <h1>TechTime</h1>
      </div>

      <div className="navbar__links">
        <div className="navbar__links__text">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/testimonial">Testimonial</NavLink>
          <NavLink to="/community">Community</NavLink>
        </div>

        <div className="navbar__links__button">
          <button type="button">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
