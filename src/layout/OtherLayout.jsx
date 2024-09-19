import { useLocation } from 'react-router-dom';
import HealthcareForAustralians from '../components/HealthcareForAustralians';
import TeleHealthBooking from '../components/TeleHealthBooking';
import HealthSection from '../components/HealthSection';
import Footer from '../components/Footer';
import HeroComponent from '../components/HeroSection';
import { constants } from '../utils/configure';
import Navbar from '../components/Navbar';
import InfoSection from '../components/InfoSection';
import BloodTestReferral from './../components/RequestCardSection';
import RequestCardSection from './../components/RequestCardSection';

const routes = ['/medical-certificates', '/pathology', '/referrals'];

const MainLayout = ({ children }) => {
    const path = useLocation().pathname;

    const heroSection = constants[path]?.heroSection || { heading: '', description: '', image: '' };
    const infoSection = constants[path]?.infoSection || { heading: '', description: '', cards: [] };
    const requestCardsSection = constants[path]?.requestCardsSection;

    console.log(requestCardsSection);

    return (
        <div>
            <Navbar />

            <HeroComponent
                heading={heroSection.heading}
                description={heroSection.description}
                image={heroSection.image}
            />

            {children}

            {routes.includes(path) && (
                <RequestCardSection
                    heading={requestCardsSection.heading}
                    description={requestCardsSection.description}
                    cards={requestCardsSection.cards}
                />
            )}

            <BloodTestReferral />

            <InfoSection
                sectionHeading={infoSection.heading}
                sectionDescription={infoSection.description}
                cards={infoSection.cards}
            />

            <HealthcareForAustralians />
            <TeleHealthBooking />
            <HealthSection />
            <Footer />
        </div>
    );
};

export default MainLayout;
