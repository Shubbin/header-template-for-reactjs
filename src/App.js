import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import SocialButton from './Components/SocialButton';
import About from './Components/About';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Homepage from './Components/Homepage';
import Weddings from './gallery/Weddings';
import Events from './gallery/Events';
import Portraits from './gallery/Portraits';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Route for your HomePage */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/portraits" element={<Portraits />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/events" element={<Events />} />
        </Routes>

       
      </div>
    </Router>
  );
}

export default App;
