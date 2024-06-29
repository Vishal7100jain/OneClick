// AboutUs.js
import React from 'react';

const AboutUs = ({ description }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded w-full">
            <h2 className="text-xl font-bold mb-2">About Us:</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default AboutUs;
