import React from 'react';

const services = [
    {
        title: "Doctor Consultations",
        description: "Experience Seamless Telehealth Consultations with Trusted Australian Doctors from anywhere in Australia between 6 am and midnight.",
        price: "35.00",
        image: "https://aussiescripts.com.au/_next/static/media/telehealth-service-min.e17a8fd7.png"
    },
    {
        title: "Online Prescriptions",
        description: "Get Australian scripts fast with expert help and receive your eScript via SMS. Consult a doctor for new or repeat prescriptions, delivered to pharmacies nationwide.",
        price: "17.00",
        image: "https://aussiescripts.com.au/_next/static/media/prescriptions-service-banner-min.979085dc.png"
    },
    {
        title: "Medical Certificates",
        description: "Obtain a hassle-free medical certificate for work, university, or caregivers right from the comfort of your home.",
        price: "15.00",
        image: "https://aussiescripts.com.au/_next/static/media/medical-certificates-service-min.c3e10ec8.png"
    }
];


const ServiceCard = ({ title, description, price, image }) => {
    return (
        <div className="flex flex-col justify-between rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-white">
            {/* Image Section */}
            <img loading='lazy'
                src={image}
                alt={title}
                className="h-48 w-full object-cover rounded-t-lg"
            />

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>

                {/* Price Section */}
                <div className="flex items-center text-sm mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                        At ${price}
                    </span>
                </div>

                {/* Button Section */}
                <div className="flex flex-col space-y-2">
                    <button className="bg-purple-600 text-white py-4 px-4 rounded-lg hover:bg-purple-700 transition duration-300 w-full">
                        Request consultation
                    </button>
                    <button className="bg-blue-100 text-blue-600 py-4 px-4 rounded-lg hover:bg-blue-200 transition duration-300 w-full flex justify-center items-center">
                        Learn More <span className="ml-2">↗</span>
                    </button>
                </div>
            </div>
        </div>
    );
};





export default function ServicesSection() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="w-4/5 mx-auto px-4"> {/* Set width to 80% and center */}
                <h2 className="text-center text-3xl font-bold mb-6">
                    Conveniently Manage Your Health Online
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    Access online prescriptions, telehealth consultations, blood test requests, and medical certificates
                    from Australian-registered doctors. Our services are available 6 am to midnight every day, ensuring
                    your health is in capable hands.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
