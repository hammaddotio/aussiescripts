import React from 'react'
import HeroSection from './components/HeroSection'
import TeleHealthBooking from './components/TeleHealthBooking';
import ServicesSection from './components/Services';
import HealthSection from './components/HealthSection';
import Footer from './components/Footer';
import FAQ from './components/FaQ';
import HealthcareForAustralians from './components/HealthcareForAustralians';
import TeleHealthOnDemand from './components/TeleHealthOnDemand';

const App = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <TeleHealthOnDemand />
      <HealthcareForAustralians />
      <TeleHealthBooking />
      <FAQ />
      <HealthSection />
      <Footer />
    </div>
  )
}

export default App
