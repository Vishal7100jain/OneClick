// SupplierInfo.js
import React from 'react';
import { image2 } from '../../contents/image';

const SupplierInfo = ({ storeName, reviews, address, openHours }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded w-3/5">
            <div className="flex items-center mb-4">
                <img src={image2} alt="Store" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-lg font-bold">{storeName}</h2>
                    <p className="text-gray-600">{reviews} <i className="fas fa-star text-yellow-500"></i> (13 reviews)</p>
                </div>
            </div>
            <p className="text-gray-600 mb-4">{address}</p>
            <p className="text-gray-600 mb-4">Open Now: {openHours}</p>
            <button className="bg-green-600 text-white py-2 px-4 rounded mb-2">Follow</button>
            <button className="bg-gray-200 text-gray-600 py-2 px-4 rounded">About Supplier</button>
        </div>
    );
};

export default SupplierInfo;
