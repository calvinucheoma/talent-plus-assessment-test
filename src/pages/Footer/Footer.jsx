import './Footer.scss';
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsInstagram,
  BsDiscord,
} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__socials">
        <h2>techTime</h2>
        <p>
          reach out to us on any of our social
          <br /> media networks
        </p>
        <div className="footer__socials__network">
          <i>
            <BsFacebook />
          </i>
          <i>
            <BsTwitter />
          </i>
          <i>
            <BsYoutube />
          </i>
          <i>
            <BsInstagram />
          </i>
          <i>
            <BsDiscord />
          </i>
        </div>
      </div>

      <div className="footer__nav">
        <h3>useful links</h3>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>our courses</li>
          <li>testimonials</li>
          <li>our community</li>
        </ul>
      </div>

      <div className="footer__community">
        <h3>community</h3>
        <ul>
          <li>help centers</li>
          <li>partners</li>
          <li>suggestion</li>
          <li>blog</li>
          <li>newsletter</li>
        </ul>
      </div>

      <div className="footer__subscription">
        <h3>Subscribe Us</h3>
        <div className="footer__subscription__input">
          <input type="email" placeholder="e.g nft123@gmail.com" />
          <button>send message</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
