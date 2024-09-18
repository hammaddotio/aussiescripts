// src/TeleHealthOnDemand.jsx
import React from 'react';

function TeleHealthOnDemand() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f7f7f3] p-6">
            <div className="relative w-full max-w-screen-lg mx-auto" style={{ marginLeft: '10%', marginRight: '10%' }}>
                <div className="relative bg-cover bg-center rounded-lg overflow-hidden"
                    style={{
                        backgroundImage: `url('https://aussiescripts.com/_next/static/media/medical-certificates-service-min.c3e10ec8.png')`,
                        height: '400px'
                    }}>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
                        <div className="text-center text-white">
                            <h1 className="text-3xl font-bold mb-4">Telehealth on-demand</h1>
                            <p className="text-lg">
                                We offer a secure and convenient way to consult with a doctor from home or on the go
                                via your smart device. Connect via phone call anytime, 24/7, including public holidays,
                                because health concerns don't follow a schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeleHealthOnDemand;
