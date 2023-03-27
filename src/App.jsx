// import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, AboutUs, Courses, Testimonial, Community } from './pages';
import FAQs from './pages/FAQs/FAQs';
import Footer from './pages/Footer/Footer';

function App() {
  function scrollTo(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

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
