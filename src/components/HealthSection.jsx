// src/components/HealthSection.jsx
import React from 'react';

const HealthSection = () => {
    return (
        <div className="bg-[#f5f3ec] py-12 px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                    Choose a healthier, brighter future.
                </h1>
                <p className="text-gray-700 mb-8 text-lg">
                    Easily manage your health from the comfort of home with our reliable and secure services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                    <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg py-4 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl text-purple-600">&#128197;</div>
                        <div>
                            <p className="font-semibold text-gray-800">Available 24 hours a day, 7 days a week.</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg py-4 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl text-purple-600">&#128205;</div>
                        <div>
                            <p className="font-semibold text-gray-800">Available anywhere in Australia</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg py-4 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl text-purple-600">&#9201;</div>
                        <div>
                            <p className="font-semibold text-gray-800">eScript in minutes</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-lg py-4 px-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl text-purple-600">&#128274;</div>
                        <div>
                            <p className="font-semibold text-gray-800">Secure and backed by certified doctors</p>
                        </div>
                    </div>
                </div>
                <button className="mt-8 bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-purple-700 transition duration-300">
                    Speak to a doctor →
                </button>
            </div>
        </div>
    );
};

export default HealthSection;
