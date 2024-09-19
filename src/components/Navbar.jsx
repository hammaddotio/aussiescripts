import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    {/* <img src="/logo.svg" alt="AussieScripts" className="h-8 w-auto" /> */}
                    <Link to={'/'}>
                        <span className="ml-2 text-xl font-bold text-purple-700">AussieScripts</span>
                    </Link>
                </div>

                {/* Middle: Nav Links */}
                <div className="hidden md:flex space-x-8 items-center">
                    <div className="relative group">
                        <button
                            className="text-gray-700 hover:text-purple-700 font-medium focus:outline-none flex items-center space-x-2"
                        >
                            <span>Telehealth Services</span>
                            {/* Icon that changes based on dropdown hover state */}
                            {/* <ChevronDownIcon className="w-5 h-5 group-hover:hidden" />
                            <ChevronUpIcon className="w-5 h-5 hidden group-hover:inline" /> */}
                        </button>

                        {/* Dropdown Content - now opens on hover */}
                        <div className="absolute z-20 bg-white shadow-lg p-6 rounded-lg mt-2 w-[65rem] opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 border border-gray-200">
                            <div className="grid grid-cols-4 gap-x-10">
                                <div className="flex flex-col space-y-6 col-span-2">
                                    <Link to={'/telehealth-consultations'} className="flex items-start space-x-4 hover:text-purple-700">
                                        <span role="img" aria-label="Consultations" className="text-2xl">📞</span>
                                        <div>
                                            <span className="font-semibold">Telehealth Consultations</span>
                                            <p className="text-gray-500 text-sm">Consult with a doctor registered in Australia.</p>
                                        </div>
                                    </Link>
                                    <Link to={'/medical-certificates'} className="flex items-start space-x-4 hover:text-purple-700">
                                        <span role="img" aria-label="Medical Certificates" className="text-2xl">📄</span>
                                        <div>
                                            <span className="font-semibold">Medical Certificates</span>
                                            <p className="text-gray-500 text-sm">Request medical certificates for work or school.</p>
                                        </div>
                                    </Link>
                                    <Link to={'/pathology'} className="flex items-start space-x-4 hover:text-purple-700">
                                        <span role="img" aria-label="Blood Tests" className="text-2xl">🩸</span>
                                        <div>
                                            <span className="font-semibold">Blood Tests</span>
                                            <p className="text-gray-500 text-sm">Request pathology testing for health check-ups.</p>
                                        </div>
                                    </Link>
                                    <Link to={'/nicotine-vaping'} className="flex items-start space-x-4 hover:text-purple-700">
                                        <span role="img" aria-label="Nicotine Vaping" className="text-2xl">💨</span>
                                        <div>
                                            <span className="font-semibold">Nicotine Vaping</span>
                                            <p className="text-gray-500 text-sm">Get a nicotine vaping prescription tailored for you.</p>
                                        </div>
                                    </Link>
                                </div>

                                <div className="flex flex-col space-y-6">
                                    <Link to={'/prescriptions'} className="flex items-start space-x-4 hover:text-purple-700">
                                        <span role="img" aria-label="Prescriptions" className="text-2xl">💊</span>
                                        <div>
                                            <span className="font-semibold">Online Prescriptions</span>
                                            <p className="text-gray-500 text-sm">Get new or repeat prescriptions and eScripts.</p>
                                        </div>
                                    </Link>
                                    <Link to={'/weight-loss'} className="flex items-start space-x-4 hover:text-purple-700">
                                        <span role="img" aria-label="Weight Loss" className="text-2xl">⚖️</span>
                                        <div>
                                            <span className="font-semibold">Weight Loss Treatments</span>
                                            <p className="text-gray-500 text-sm">Treatments for weight loss and healthy strategies.</p>
                                        </div>
                                    </Link>
                                    <Link to={'/referrals'} className="flex items-start space-x-4 hover:text-purple-700">
                                        <span role="img" aria-label="Specialist Referrals" className="text-2xl">👨‍⚕️</span>
                                        <div>
                                            <span className="font-semibold">Specialist Referrals</span>
                                            <p className="text-gray-500 text-sm">Get expert help with health diagnosis or treatment.</p>
                                        </div>
                                    </Link>
                                </div>

                                {/* Right-side Content */}
                                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                    <h3 className="font-semibold text-gray-700 mb-2">Trusted 24/7 telehealth appointments</h3>
                                    <p className="text-gray-500 text-sm">
                                        Access Australian-registered practitioners whenever you need them, wherever you are.
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 19.879l-1.414-1.414 16-16 1.414 1.414-16 16z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 8V4a1 1 0 00-1-1h-3.586a1 1 0 00-.707.293l-9.414 9.414a1 1 0 000 1.414L10 20.586a1 1 0 001.414 0l9.414-9.414a1 1 0 00.293-.707V9a1 1 0 00-1-1h-4z" />
                                        </svg>
                                        <p className="ml-2 text-gray-500 text-sm">Available 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Other Nav Links */}
                    <Link to={'/prescriptions'} className="text-gray-700 hover:text-purple-700 font-medium">
                        Online Prescription
                    </Link>
                    <Link to={'/medical-certificates'} className="text-gray-700 hover:text-purple-700 font-medium">
                        Medical Certificate
                    </Link>
                    <Link to={'/weight-loss'} className="text-gray-700 hover:text-purple-700 font-medium">
                        Weight Loss
                    </Link>
                    <Link to={'/nicotine-vaping'} className="text-gray-700 hover:text-purple-700 font-medium">
                        Nicotine Vaping
                    </Link>
                </div>

                {/* Call to Action and Mobile Toggle */}
                <div className="flex items-center space-x-4">
                    <button className="hidden sm:block bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 sm:text-lg transition">
                        Speak To A Doctor
                    </button>
                    <button onClick={toggleMobileMenu} className="text-gray-700 md:hidden focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow-md">
                    <Link to={'/'} className="block text-gray-700 hover:text-purple-700 font-medium">
                        Telehealth Services
                    </Link>
                    <Link to={'/'} className="block text-gray-700 hover:text-purple-700 font-medium">
                        Online Prescription
                    </Link>
                    <Link to={'/'} className="block text-gray-700 hover:text-purple-700 font-medium">
                        Medical Certificate
                    </Link>
                    <Link to={'/'} className="block text-gray-700 hover:text-purple-700 font-medium">
                        Weight Loss
                    </Link>
                    <Link to={'/'} className="block text-gray-700 hover:text-purple-700 font-medium">
                        Nicotine Vaping
                    </Link>
                    <button className="w-full bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition">
                        Speak To A Doctor
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
