import Navbar from '../../components/Navbar/Navbar';
import './Home.scss';
import circleSmall from '../../assets/svg/green-circle-small.svg';
import zigzag from '../../assets/svg/blue-zigzag.svg';
import { FiArrowUpRight } from 'react-icons/fi';

import hero from '../../assets/png/HERO IMAGEE.png';
import bulb from '../../assets/png/bulb.png';
import vscode from '../../assets/png/Visual Studio Code - jpeg.png';
import wordpress from '../../assets/jpg/WordPress.com svg.jpg';
import figma from '../../assets/jpg/Figma svg.jpg';
import spiral from '../../assets/png/spiral.png';
import orangeDot from '../../assets/png/orange-dot.png';
import circleMedium from '../../assets/svg/green-circle-medium.svg';
import triangle from '../../assets/svg/triangle-medium.svg';
import AvatarGroup from '../../components/AvatarGroups/AvatarGroups';

const Home = ({ scrollTo }) => {
  return (
    <div className="home" id="home">
      <Navbar scrollTo={scrollTo} />

      <div className="home__body">
        <div className="home__body__info">
          <img
            src={circleSmall}
            alt="green small circle"
            className="small-circle"
          />

          <img src={orangeDot} alt="orange circle dot" className="orange-dot" />

          <div className="home__body__info__text">
            <h1>Grow your skills to advance your career path</h1>
            <p>
              build your future with our quality education. the best and largest
              all-in-one online tutoring platform in the world
            </p>
          </div>

          <img src={zigzag} alt="blue zig-zag shape" className="zigzag" />

          <div className="home__body__info__buttons">
            <button className="button1">
              Get Started Now <FiArrowUpRight />
            </button>
            <button className="button2">Enroll now </button>
          </div>

          <div className="home__body__info__avatars">
            <div className="home__body__info__avatars__images">
              {/* <Avatar src={girl1} alt="woman" />
              <Avatar src={boy1} alt="man" />
              <Avatar src={girl2} alt="woman" />
              <Avatar src={boy2} alt="boy" />
              <Avatar src={girl3} alt="woman" /> */}
              <AvatarGroup />
            </div>
            <div className="home__body__info__avatars__text">
              <p>255k+</p>
              <p className="text">Previews</p>
            </div>
          </div>
        </div>

        <div className="home__body__hero">
          <img src={hero} alt="girl hero img" className="hero" />

          <img src={bulb} alt="bulb img" className="bulb" />

          <img src={vscode} alt="vs code logo" className="vscode" />

          <img src={figma} alt="figma logo" className="figma" />

          <img src={wordpress} alt="wordpress logo" className="wordpress" />

          <img src={spiral} alt="spiral shape" className="spiral" />

          <img src={orangeDot} alt="orange circle dot" className="dot" />

          <img
            src={circleMedium}
            alt="medium green circle shape"
            className="circle"
          />

          <img src={triangle} alt="triangle shape" className="triangle" />
        </div>
      </div>
    </div>
  );
};

export default Home;
