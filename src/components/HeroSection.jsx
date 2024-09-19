import { list } from 'postcss';
import React from 'react';


export default function HeroComponent({ heading, description, image }) {

    return (
        <section className="bg-purple-100 py-20 relative">
            <div className="container mx-auto w-4/5"> {/* Container width set to 80% and centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Text Section */}
                    <div>
                        <h1 className="text-4xl font-bold text-purple-800 mb-6">
                            {heading}
                        </h1>
                        <div className='text-start'>
                            {
                                description.text ? (
                                    <div className='mb-8'>
                                        <p className="text-lg mb-2">
                                            {description.text}
                                        </p>
                                        <ul>
                                            {
                                                description.list.map(list => (
                                                    <li className='list-disc'>{list}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ) :
                                    (
                                        <p className="text-lg mb-8">
                                            {description}
                                        </p>
                                    )
                            }
                        </div>
                        <button className="bg-purple-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-purple-700 hover:shadow-xl transition duration-300">
                            Speak to a doctor
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="relative flex justify-center">
                        {/* Purple Circle Background */}
                        <div className="absolute w-[110%] h-[110%]  rounded-full -top-[5%] -left-[5%] z-0"></div>
                        <img loading='lazy'
                            src={image}
                            alt="Healthcare professional with patient"
                            className="relative z-10 rounded-lg max-w-full w-[450px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
