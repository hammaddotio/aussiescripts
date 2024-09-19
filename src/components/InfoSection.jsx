import React from 'react';

const InfoSection = ({
    sectionHeading,
    sectionDescription,
    cards
}) => {
    return (
        <section className="bg-gray-100 p-8 py-20 rounded-lg shadow-lg flex items-center justify-center min-h-screen">
            <div className="w-full max-w-screen-xl text-center">
                <div className='py-10'>
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        {sectionHeading}
                    </h2>
                    <p className="text-lg text-gray-700 mb-8">
                        {sectionDescription}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 container mx-auto">
                    {cards?.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {card.heading}
                            </h3>
                            <p className="text-base text-gray-700 mb-4">
                                {card.description}
                            </p>
                            <img src={card.image} alt={card.heading} className="w-full h-auto rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
