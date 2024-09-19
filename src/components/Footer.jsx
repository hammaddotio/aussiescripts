// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-neutral-50 py-10">
            <div className="container mx-auto px-6 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-gray-700">

                    {/* Logo and Description */}
                    <div>
                        <img loading='lazy' src="path-to-your-logo" alt="Aussie Scripts Logo" className="mb-4" />
                        <p className="text-sm">
                            Aussie Scripts is a proudly Australian-owned company that stands as one of the largest and most reputable in the country. Offering a range of online services such as accessing prescriptions for common medications, consulting with doctors, obtaining medical certificates, and requesting blood tests, Aussie Scripts is dedicated to providing top-quality care to all.
                        </p>
                        <p className="text-sm mt-4">
                            For urgent medical help & in case of emergency, call <span className="text-purple-700 font-semibold">000</span>.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Contact</h3>
                        <p className="text-sm">
                            <strong>Address</strong><br />
                            Suite No. 1672<br />
                            17 Gould Road<br />
                            Herston 4006 QLD AU
                        </p>
                        <p className="text-sm mt-4">
                            <strong>Phone</strong><br />
                            07 3491 7189
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-purple-700">Home</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">About Us</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Contact Us</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Health Articles</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Frequently Asked Questions</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-purple-700">Telehealth Consultation</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Online Prescriptions</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Weight Loss Treatments</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Medical Certificates</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Blood Tests</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Referrals</a></li>
                            <li><a href="#" className="text-sm hover:text-purple-700">Nicotine Vaping</a></li>
                        </ul>
                    </div>
                </div>

                {/* Certifications */}


                {/* Acknowledgement & Social Links */}
                <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <div className="my-8 flex justify-center">
                        <img loading='lazy' src="https://aussiescripts.com.au/_next/image?url=https%3A%2F%2Fstatic.legitscript.com%2Fseals%2F30479379.png&w=256&q=75" alt="Certification" className="h-16" />
                    </div>

                    <div className="flex flex-col-reverse space-x-4 mt-4 md:mt-0">
                        <p className="text-center md:text-left max-w-4xl md:mr-4">
                            Aussie Scripts and its board of directors acknowledge the Traditional Owners of Country throughout Australia and their continuing connection to lands, waters, and communities. We pay our respects to Aboriginal and Torres Strait Islander cultures and Elders past and present.
                        </p>

                        <div className='flex items-end justify-end gap-4 my-2'>
                            <a href="#"><img loading='lazy' src="https://aussiescripts.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findigenous-flag-one.abc4f41c.png&w=64&q=75" alt="Indigenous Flag" className="h-8" /></a>
                            <a href="#"><img loading='lazy' src="https://aussiescripts.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findigenous-flag-two.3f2c3ba0.png&w=64&q=75" alt="Torres Strait Flag" className="h-8" /></a>
                        </div>
                    </div>
                </div>
                <hr />

                {/* Footer Bottom Links */}
                <div className="mt-6 text-center text-xs text-gray-500">
                    © 2024 Aussie Scripts &middot; <a href="#" className="hover:text-purple-700">Terms and Conditions</a> &middot; <a href="#" className="hover:text-purple-700">Privacy Policy</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
