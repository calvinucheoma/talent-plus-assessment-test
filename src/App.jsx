import './App.scss';
// import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, AboutUs, Courses, Testimonial, Community } from './pages';
import FAQs from './pages/FAQs/FAQs';
import Footer from './pages/Footer/Footer';

function App() {
  function scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  // const [windowSize, setWindowSize] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  /* Add these lines of code inside any component of your react app
        <p>Window width: {windowSize.width}</p>
        <p>Window height: {windowSize.height}</p>
         //Use windowSize.width and windowSize.height for media queries */

  return (
    <div className="app">
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router> */}
      <Router>
        <Home scrollTo={scrollTo} />
        <AboutUs />
        <Courses />
        <Testimonial />
        <Community />
        <FAQs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
