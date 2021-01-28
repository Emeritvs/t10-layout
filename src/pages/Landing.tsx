import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import More from '../components/More/More';
import Portifolio from '../components/Portifolio/Portifolio';
import Services from '../components/Services/Services';
import '../assets/css/landing.css';

function Landing() {
  return (
    <div className="h-full">
      <Header />

      <div className="my-10 grid">
        <More />
        <About />
        <Services />
        <Portifolio />
        <Contact />
      </div>
    </div>
  );
}

export default Landing;