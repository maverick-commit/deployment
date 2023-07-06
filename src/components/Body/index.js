import React from 'react';
import './styles.css';
import BannerCarousel from '../Carousel';
import BusinessSection from '../SectionBusiness.js';
import EducationSection from '../SectionEduction.js';
import Footer from '../Footer';

const MainBody =()=> {
  return (
    <div>
        <BannerCarousel />
        <BusinessSection />
        <EducationSection />
        <Footer/>
    </div>
  )
}

export default MainBody