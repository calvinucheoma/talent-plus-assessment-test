import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, Courses, Testimonial, Community } from './pages';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
