import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     
      <div className='hero-overlay'>
        <h1 className='hero-title'>WELCOME TO UNIVERSAL LOGISTICS SERVICES (PVT.) LTD</h1>
        <p className='hero-subtitle'>UPS AUTHORISED SERVICE CONTRACTOR</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
