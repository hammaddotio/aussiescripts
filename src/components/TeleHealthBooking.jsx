import React from 'react';

const steps = [
    {
        number: '01',
        title: `Choose your service and fill in your or the patient's details.`,
        image: 'https://aussiescripts.com.au/_next/static/media/consultation-step-1.2d44debe.jpg'
    },
    {
        number: '02',
        title: 'Add payment details through our secure gateway.',
        image: 'https://aussiescripts.com.au/_next/static/media/consultation-step-3.7c0daaa9.jpg'
    },
    {
        number: '03',
        title: 'Talk to a professional health practitioner within a few minutes.',
        image: 'https://aussiescripts.com.au/_next/static/media/consultation-step-4.1c4b5fb7.jpg'
    },
    {
        number: '04',
        title: 'Once approved, receive scripts via SMS, and letters, referrals, or certificates via email.',
        image: 'https://aussiescripts.com.au//_next/static/media/consultation-step-2.61247162.jpg'
    },
];

const ServiceStep = ({ number, title, image }) => {
    return (
        <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
            <img
                src={image}
                alt={`Step ${number}`}
                className="w-full h-40 object-cover"
            />
            <div className="p-4">
                <h4 className="text-2xl font-bold text-purple-600 mb-2">{number}</h4>
                <p className="text-gray-700">{title}</p>
            </div>
        </div>
    );
};

export default function TeleHealthBooking() {
    return (
        <div className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-3xl font-bold text-center mb-4 text-purple-800">
                    Need To Speak With A Doctor? Instantly Book A Telehealth Appointment.
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Schedule an immediate telehealth consultation with a certified Australian doctor from the comfort of
                    your home, within just 15 minutes. Skip in-person clinic visits when requesting medical certificates,
                    prescriptions, or referrals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {steps.map((step, index) => (
                        <ServiceStep key={index} {...step} />
                    ))}
                </div>

                <div className="text-center mb-12">
                    <button className="bg-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition duration-300">
                        Speak To A Doctor Now
                    </button>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        {/* Text Section */}
                        <div className="md:w-2/3 mb-4 md:mb-0">
                            <p className="text-yellow-500 font-bold text-sm mb-2 uppercase">TELEHEALTH</p>
                            <h2 className="text-2xl font-bold text-blue-800 mb-4">
                                Consult A GP in Just 15 Minutes, Available 24/7
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Experience fast and convenient telehealth consultations with certified
                                online doctors and health practitioners. Enjoy instant online
                                prescriptions, medical certificates, blood test referrals, and more.
                                Schedule your consultation from the comfort of your home in just 15
                                minutes.
                            </p>
                        </div>

                        {/* Image Section */}
                        <div className="md:w-1/3 flex justify-end">
                            <img
                                src="https://aussiescripts.com.au/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftelehealth-doctors.73073340.png&w=256&q=75"
                                alt="Doctors"
                                className="w-44 h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
