import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        { question: 'What is Aussie Scripts?', answer: 'Aussie Scripts is...' },
        { question: 'How much does it cost?', answer: 'The cost of services...' },
        { question: 'How do I get a prescription online?', answer: 'To get a prescription...' },
        { question: 'What services does Aussie Scripts offer?', answer: 'Aussie Scripts offers...' },
        { question: 'How does Aussie Scripts work?', answer: 'Aussie Scripts works by...' },
        { question: 'Is Aussie Scripts covered by insurance?', answer: 'Insurance coverage depends...' },
        { question: 'Are the healthcare professionals at Aussie Scripts licensed?', answer: 'Yes, all professionals...' },
        { question: 'Can I use Aussie Scripts for emergency medical situations?', answer: 'No, for emergencies...' },
    ];

    return (
        <section className="bg-neutral-50 py-12">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border p-2 border-gray-300 mb-2">
                            <button
                                className="w-full py-4 flex justify-between items-center text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg text-gray-900">{faq.question}</span>
                                <span className="text-2xl text-gray-700">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                {openIndex === index && (
                                    <div className="pb-4 text-gray-700">
                                        <p className="text-sm">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
