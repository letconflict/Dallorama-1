import React from 'react';
import HeroSection from '../components/HomePage/HeroSection';
import ContentSection from '../components/HomePage/ContentSection';
import Cta from '../components/HomePage/CTA';

const HomePage = () => (
  <div>
    <HeroSection/>
    <div>
        <ContentSection/>
    </div>
    <div>
        <Cta/>
    </div>
  </div>
  
);

export default HomePage;