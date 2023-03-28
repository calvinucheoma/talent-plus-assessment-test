import { useState } from 'react';
import { Avatar } from '@mui/material';
import { testimonials } from '../../data/testimonials';
import './Testimonial.scss';
import blueDot from '../../assets/svg/blueslider.svg';
import lightBlueDot from '../../assets/svg/lightblueslider.svg';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { testimonial, userAvatar, username, job } = testimonials[activeIndex];

  const checkNumber = (number) => {
    if (number > testimonials.length - 1) {
      return 0;
    }
    if (number < 0) {
      return testimonials.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setActiveIndex((activeIndex) => {
      let newActiveIndex = activeIndex + 1;
      return checkNumber(newActiveIndex);
    });
  };

  const prevPerson = () => {
    setActiveIndex((activeIndex) => {
      let newActiveIndex = activeIndex - 1;
      return checkNumber(newActiveIndex);
    });
  };

  return (
    <div className="testimonial" id="testimonial">
      <div className="testimonial__header">
        <h1>what our clients are saying</h1>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
      </div>

      {/* <div className="testimonial__body">
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
      </div> */}

      <div className="testimonial__body">
        <div className="testimonial__body__details">
          <p>{testimonial}</p>
          <span className="userDetails">
            <Avatar src={userAvatar} alt={username} className="userAvatar" />
            <span className="userInfo">
              <h6>{username}</h6>
              <p>{job}</p>
            </span>
          </span>
        </div>
      </div>

      <div className="testimonial__slider">
        {testimonials.map((_, index) => (
          <img
            key={index}
            src={activeIndex === index ? blueDot : lightBlueDot}
            onClick={() => setActiveIndex(index)}
          />
        ))}
        {/* <img src={lightBlueDot} alt="dot slider" />
        <img src={blueDot} alt="dot slider" />
        <img src={lightBlueDot} alt="dot slider" />
        <img src={lightBlueDot} alt="dot slider" /> */}
      </div>
    </div>
  );
};

export default Testimonial;
