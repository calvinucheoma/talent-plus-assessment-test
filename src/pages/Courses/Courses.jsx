import './Courses.scss';
import birdShape from '../../assets/svg/birdShape.svg';
import { courses } from '../../data/courses';
import { Avatar } from '@mui/material';
import { FiClock } from 'react-icons/fi';
import { VscBook } from 'react-icons/vsc';
import { AiFillStar } from 'react-icons/ai';

const Courses = () => {
  return (
    <div className="courses" id="courses">
      <div className="courses__header">
        <h1>browse our popular courses</h1>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition. while there’s no standard meaning for high
          definition, generally any standard video image
        </p>
        <img src={birdShape} alt="bird shape svg" className="bird-shape" />
      </div>

      <div className="courses__body">
        <div className="courses__body__links">
          <h5 className="active-link">all categories </h5>
          <h5>design</h5>
          <h5>development</h5>
          <h5>marketing</h5>
        </div>

        <div className="courses__body__section">
          {courses.map((course, index) => {
            const {
              img,
              courseName,
              rating,
              numOfStudents,
              title,
              courseLength,
              numOfLessons,
              tutorImage,
              tutorName,
              price,
            } = course;
            return (
              <div className="courses__body__section__course" key={index}>
                <img src={img} alt="course banner img" />
                <div className="course__title__info">
                  <h6>{courseName}</h6>
                  <span>
                    <i>
                      <AiFillStar />
                    </i>
                    <p>{rating}</p> <p>{numOfStudents}</p>
                  </span>
                </div>
                <h2>{title}</h2>
                <div className="course__runtime__info">
                  <span>
                    <i>
                      <FiClock />
                    </i>
                    <p>{courseLength}</p>
                  </span>
                  <span>
                    <i>
                      <VscBook />
                    </i>
                    <p>{numOfLessons}</p>
                  </span>
                </div>
                <div className="course__tutor__info">
                  <span>
                    <Avatar
                      src={tutorImage}
                      alt="image of tutor"
                      className="tutor-avatar"
                    />
                    <p className="tutor-name">{tutorName}</p>
                  </span>
                  <p>{price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="courses__body__button">
          <button>explore all courses</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
