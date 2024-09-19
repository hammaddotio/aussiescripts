import { useLocation } from 'react-router-dom';
import HealthcareForAustralians from './../components/HealthcareForAustralians';
import TeleHealthBooking from './../components/TeleHealthBooking';
import HealthSection from './../components/HealthSection';
import Footer from './../components/Footer';
import HeroComponent from './../components/HeroSection';

import { constants } from '../utils/configure';
import Navbar from './../components/Navbar';

const MainLayout = ({ children }) => {
    const heroSection = constants[useLocation().pathname].heroSection

    return (
        <div>
            <Navbar />
            <HeroComponent heading={heroSection.heading} description={heroSection.description} image={heroSection.image} />
            <>
                {children}
            </>
            <HealthcareForAustralians />
            <TeleHealthBooking />
            <HealthSection />
            {/* <Faq /> */}
            <Footer />
        </div>
    )
}

export default MainLayout
