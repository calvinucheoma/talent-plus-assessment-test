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

const AboutUs = () => {
  return (
    <div className="aboutUs" id="about-us">
      <div className="aboutUs__companies">
        <img src={zoomLogo} alt="zoom logo" className="zoom" />
        <img src={stripeLogo} alt="stripe logo" />
        <img src={mondayLogo} alt="monday.com logo" />
        <img src={slackLogo} alt="slack logo" />
        <img src={dropboxLogo} alt="dropbox logo" />
      </div>

      <div className="aboutUs__body">
        <div className="aboutUs__body__section1">
          <div className="aboutUs__body__section1__info">
            <img src={crown} alt="crown icon" className="crown" />
            <h1>high quality video, audio & live classes</h1>
            <p>
              high-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <button>view courses</button>
            <div className="aboutUs__body__section1__info__options">
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

          <div className="aboutUs__body__section1__hero">
            <div className="aboutUs__body__section1__hero__avatar">
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

        <div className="aboutUs__body__section2"></div>
      </div>
    </div>
  );
};

export default AboutUs;
