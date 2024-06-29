// AwardsCertificates.js
import React from 'react';

const AwardsCertificates = ({ title, items }) => {
    return <>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <img src={item.image} alt={item.name} className="w-full h-32 object-cover mb-4" />
                    <p className="text-gray-600">{item.name}</p>
                </div>
            ))}
        </div>
    </>
};

export default AwardsCertificates;
