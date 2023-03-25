import './AboutUs.scss';
import crown from '../../assets/svg/crown.svg';
import volumeIcon from '../../assets/svg/volume.svg';
import networkIcon from '../../assets/svg/network.svg';
import documentIcon from '../../assets/svg/document.svg';
import playbackIcon from '../../assets/svg/playback.svg';
import boyHero from '../../assets/png/boyOnLaptop.png';
import womanHero from '../../assets/png/womanOnLaptop.png';
import AvatarGroups from '../../components/AvatarGroups/AvatarGroups';
import zigzag from '../../assets/svg/green-zigzag.svg';
import raindrops from '../../assets/svg/raindrops.svg';
import purpleCircle from '../../assets/svg/purple-circle.svg';
import dropboxLogo from '../../assets/svg/Dropbox svg.svg';
import zoomLogo from '../../assets/svg/zoomLogo.svg';
import stripeLogo from '../../assets/svg/stripeLogo.svg';
import mondayLogo from '../../assets/svg/monday.com svg.svg';
import slackLogo from '../../assets/svg/slackLogo.svg';
import kidHero from '../../assets/png/kidOnLaptop.png';
import triangle from '../../assets/svg/green-triangle.svg';
import zigzagYellow from '../../assets/svg/yellowZigzag.svg';
import circlePurple from '../../assets/svg/purple-circle-medium.svg';
import frame1 from '../../assets/svg/Frame 131 (1).svg';
import frame2 from '../../assets/svg/Frame 131.svg';
import frame3 from '../../assets/svg/Frame 131 (2).svg';
import frame4 from '../../assets/svg/Frame 131 (3).svg';

const AboutUs = () => {
  return (
    <div className="aboutUs" id="about-us">
      <div className="aboutUs__body1">
        <div className="aboutUs__companies">
          <img src={zoomLogo} alt="zoom logo" className="zoom" />
          <img src={stripeLogo} alt="stripe logo" />
          <img src={mondayLogo} alt="monday.com logo" />
          <img src={slackLogo} alt="slack logo" />
          <img src={dropboxLogo} alt="dropbox logo" />
        </div>
        <div className="aboutUs__body1__section">
          <div className="aboutUs__body1__section__info">
            <img src={crown} alt="crown icon" className="crown" />
            <h1>high quality video, audio & live classes</h1>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <button>view courses</button>
            <div className="aboutUs__body1__section__info__options">
              <span>
                <img src={volumeIcon} alt=" volume icon" /> <p>audio classes</p>
              </span>
              <span>
                <img src={networkIcon} alt="network icon" />
                <p>live classes</p>
              </span>
              <span>
                <img src={documentIcon} alt="document icon" />
                <p>recorded classes</p>
              </span>
              <span>
                <img src={playbackIcon} alt="playback icon" />
                <p>50+ notes</p>
              </span>
            </div>
          </div>

          <div className="aboutUs__body1__section__hero">
            <div className="aboutUs__body1__section__hero__avatar">
              <p>255k+ enrolled students</p>
              <AvatarGroups />
            </div>
            <img src={zigzag} alt="zig zag svg" className="zigzag" />
            <img src={boyHero} alt="boy using laptop" className="boy" />
            <img src={raindrops} alt="rain drops svg" className="raindrops" />
            <img src={womanHero} alt="woman using laptop" className="woman" />
            <img
              src={purpleCircle}
              alt="purple circle svg"
              className="circle"
            />
          </div>
        </div>
      </div>
      <div className="aboutUs__body2">
        <div className="aboutUs__body2__section1">
          <h1>this is why we are best from others</h1>
          <p>
            high-defination video is video of higher resolution and quality than
            standard definition. while there’s no standard meaning for high
            definition, generally any standard video image
          </p>
          <img
            src={kidHero}
            alt="boy looking at a laptop"
            className="kidHero"
          />
          <img
            src={triangle}
            alt="green triangle shape"
            className="green-triangle"
          />
        </div>

        <div className="aboutUs__body2__section2">
          <img
            src={zigzagYellow}
            alt="yellow zigzag shape"
            className="zigzag"
          />
          <div className="aboutUs__body2__section2__infos">
            <div className="aboutUs__body2__section2__info">
              <div className="info-image">
                <img src={frame1} alt="document icon svg" />
              </div>

              <h4>experienced mentors</h4>
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{' '}
              </p>
            </div>
            <div className="aboutUs__body2__section2__info">
              <div className="info-image">
                <img src={frame2} alt="clock icon svg" />
              </div>

              <h4>one-on-one meetings</h4>
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{' '}
              </p>
            </div>
            <div className="aboutUs__body2__section2__info">
              <div className="info-image">
                <img src={frame3} alt="people icon svg" />
              </div>

              <h4>one-on-one meetings</h4>
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{' '}
              </p>
            </div>
            <div className="aboutUs__body2__section2__info">
              <div className="info-image">
                <img src={frame4} alt="money icon svg" />
              </div>

              <h4>affordable prices</h4>
              <p>
                high-defination video is video of higher resolution and quality
                than standard definition. high-defination video is video of
                higher resolution and quality than standard definition.{' '}
              </p>
            </div>
          </div>
          <img
            src={circlePurple}
            alt="purple circle shape"
            className="circlePurple"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
