import MainLayout from "../layout/MainLayout"
import ServicesSection from './../components/Services';
import TeleHealthOnDemand from './../components/TeleHealthOnDemand';


const Home = () => {
    return (
        <MainLayout>
            <ServicesSection />
            <TeleHealthOnDemand />
        </MainLayout>
    )
}

export default Home
