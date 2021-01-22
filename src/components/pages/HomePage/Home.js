import React from 'react';
import About from '../../About';
import Contact from '../../Contact';
import HeroSection from '../../HeroSection';
import Services from '../../Services';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Contact />
      <Services />
    </>
  );
}

export default Home;
