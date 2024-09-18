import React from 'react';

export default function HeroComponent() {
    return (
        <section className="bg-purple-100 py-20 relative">
            <div className="container mx-auto w-4/5"> {/* Container width set to 80% and centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Text Section */}
                    <div>
                        <h1 className="text-4xl font-bold text-purple-800 mb-6">
                            Accessible & Reliable Healthcare for Australians.
                        </h1>
                        <p className="text-lg text-purple-700 mb-8">
                            Experience fast, reliable, and professional telehealth consultations, prescriptions, and medical advice at your convenience. Our team of certified online doctors is here for you anytime.
                        </p>
                        <button className="bg-purple-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300">
                            Speak to a doctor
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex justify-center">
                        {/* Purple Circle Background */}
                        <div className="absolute w-[110%] h-[110%] bg-purple-700 rounded-full -top-[5%] -left-[5%] z-0"></div>
                        <img
                            src="https://aussiescripts.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoctor-telehealth-aussie-scripts-consultation.de6f483b.png&w=640&q=75?height=400&width=400"
                            alt="Healthcare professional with patient"
                            className="relative z-10 rounded-lg max-w-full w-[450px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
