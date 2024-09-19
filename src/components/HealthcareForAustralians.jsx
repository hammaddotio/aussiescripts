import React from 'react';

function HealthcareForAustralians() {
    return (
        <div className="bg-[#f7f7f3] flex justify-center items-center min-h-screen p-6">
            <div className="w-full max-w-screen-lg mx-auto text-center" style={{ marginLeft: '10%', marginRight: '10%' }}>
                <h1 className="text-4xl font-bold mb-8">Healthcare For All Australians</h1>
                <p className="text-lg mb-8">
                    Experience convenient healthcare with our registered telehealth doctors, serving all suburbs across NSW, QLD, VIC, SA, WA, ACT, TAS, and NT. We cover every state and territory in Australia daily, including weekends and public holidays.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded shadow-md">
                        <div className="mb-4 flex justify-center items-center">
                            <img loading='lazy'
                                className='h-20'
                                src="https://syd1.digitaloceanspaces.com/aussie.scripts.bucket/asserts/public/safe-and-convinient.gif"
                                alt="Convenient Prescription"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">1. Convenient Prescription</h2>
                        <p>
                            Our online service is ideal for those with busy schedules, limited mobility, or living in remote areas. Enjoy the convenience and safety of getting your prescriptions from the comfort of your home.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md">
                        <div className="mb-4 flex justify-center items-center">
                            <img loading='lazy'
                                className='h-20'
                                src="https://syd1.digitaloceanspaces.com/aussie.scripts.bucket/asserts/public/quick-access.gif"
                                alt="Fast and Reliable"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">2. Fast and Reliable</h2>
                        <p>
                            Our telehealth doctors are available 24/7, 365 days a year, including public holidays. We understand the urgency of your health needs, which is why we respond within 15 minutes, ensuring you receive prompt care.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md">
                        <div className="mb-4 flex justify-center items-center">
                            <img loading='lazy'
                                className='h-20'
                                src="https://syd1.digitaloceanspaces.com/aussie.scripts.bucket/asserts/public/you-are-in-control.gif"
                                alt="You're in Control"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">3. You're in Control</h2>
                        <p>
                            Take charge of your healthcare on your own terms. Choose to consult with a doctor immediately or schedule an appointment at your convenience. Easily access and manage your appointments and documents through your personalized patient dashboard.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded shadow-md">
                        <div className="mb-4 flex justify-center items-center">
                            <img loading='lazy'
                                className='h-20'
                                src="https://syd1.digitaloceanspaces.com/aussie.scripts.bucket/asserts/public/secure-and-trusted-care.gif"
                                alt="Secure and Trusted Care"
                            />
                        </div>
                        <h2 className="text-xl font-semibold mb-2">4. Secure and Trusted Care</h2>
                        <p>
                            Rest assured, you're in the hands of certified professionals. Our platform is backed by fully registered and insured Australian doctors. Additionally, you'll have access to a wide range of medications, including prescriptions for common health needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HealthcareForAustralians;
