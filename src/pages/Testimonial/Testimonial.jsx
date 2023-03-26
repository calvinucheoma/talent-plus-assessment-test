import { Avatar } from '@mui/material';
import { testimonials } from '../../data/testimonials';
import './Testimonial.scss';
import blueDot from '../../assets/svg/blueslider.svg';
import lightBlueDot from '../../assets/svg/lightblueslider.svg';

const Testimonial = () => {
  return (
    <div className="testimonial" id="testimonial">
      <div className="testimonial__header">
        <h1>what our clients are saying</h1>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition.
          <br /> while there’s no standard meaning for high definition,
          generally any standard video image
        </p>
      </div>

      <div className="testimonial__body">
        {testimonials.map((studentTestimonial) => {
          const { id, testimonial, userAvatar, username, job } =
            studentTestimonial;
          return (
            <div className="testimonial__body__details" key={id}>
              <p>{testimonial}</p>
              <span className="userDetails">
                <Avatar
                  src={userAvatar}
                  alt={username}
                  className="userAvatar"
                />
                <span className="userInfo">
                  <h6>{username}</h6>
                  <p>{job}</p>
                </span>
              </span>
            </div>
          );
        })}
      </div>

      <div className="testimonial__slider">
        <img src={lightBlueDot} alt="dot slider" />
        <img src={blueDot} alt="dot slider" />
        <img src={lightBlueDot} alt="dot slider" />
        <img src={lightBlueDot} alt="dot slider" />
      </div>
    </div>
  );
};

export default Testimonial;
