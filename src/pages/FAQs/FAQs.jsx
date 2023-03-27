import './FAQs.scss';
import circle from '../../assets/svg/purple-circle-medium.svg';
import zigzag from '../../assets/svg/yellowZigzag.svg';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from '@mui/material';
import { Add } from '@mui/icons-material';

const FAQs = () => {
  const accordionDetails = [
    {
      id: 1,
      header: 'can i change my plan later?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 2,
      header: 'are the courses lifetime?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 3,
      header: 'do i get certified after taking courses?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 4,
      header: 'how do i reach out to mentors?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 5,
      header: 'do we get job ready after taking courses?',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div className="faqs">
      <div className="faqs__header">
        <h1>frequently asked questions</h1>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition.
          <br /> while there’s no standard meaning for high definition,
          generally any standard video image
        </p>
        <img src={circle} alt="circle shape" className="circle-shape" />
      </div>

      <div className="faqs__body">
        <img src={zigzag} alt="yellow zigzag shape" className="zigzag-yellow" />
        <h5>is there a free trial available?</h5>
        <p>
          high-defination video is video of higher resolution and quality than
          standard definition. high-defination video is video of higher
          resolution and quality than standard definition. hbuild your future
          with our quality education. the best and largest all-in-one online
          tutoring platform in the worldd definition.
        </p>
        <div className="faqs__body__accordion">
          {accordionDetails.map((detail) => {
            const { id, header, content } = detail;
            return (
              <Accordion key={id} sx={{ width: '100%' }} className="accordion">
                <AccordionSummary
                  expandIcon={
                    <IconButton>
                      <Add />
                    </IconButton>
                  }
                >
                  <h6 className="accordion-header">{header}</h6>
                </AccordionSummary>
                <AccordionDetails>
                  <p className="accordion-content">{content}</p>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
