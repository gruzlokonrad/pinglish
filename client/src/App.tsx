import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/Footer';
import Contact from './components/pages/Contact/Contact';
import SignUp from './components/pages/SignUp/SignUp';



function App() {
  return (
    <div className="App ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-up" element={ <SignUp /> } />
          <Route path="contact" element={ <Contact /> } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
