import React from 'react';
import About from '../../About';
import Contact from '../../Contact';
import HeroSection from '../../HeroSection';
import Services from '../../Services';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Contact />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
