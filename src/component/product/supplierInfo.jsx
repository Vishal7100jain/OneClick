// SupplierInfo.js
import React from 'react';
import { image2 } from '../../contents/image';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton.jsx'

const SupplierInfo = ({ storeName, reviews, address, openHours }) => {
    return (
        <div className="bg-white p-4 shadow-2xl rounded lg:w-4/5">
            <div className="flex items-center mb-4">
                <img src={image2} alt="Store" className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-lg font-bold">{storeName}</h2>
                    <p className="text-gray-600">{reviews} <i className="fas fa-star text-yellow-500"></i> (13 reviews)</p>
                </div>
            </div>
            <p className="text-gray-600 mb-4">{address}</p>
            <p className="text-gray-600 mb-4">Open Now: <br /> {openHours}</p>
            <div className='xs:flex flex-col'>
                <Link>
                    <CustomButton title="Follow" otherStyle="w-full mb-2"></CustomButton>
                </Link>
                <Link to="/Home/Product/Supplier">
                    <button className="font-bold text-gray-600 py-2 px-4 rounded border-2  shadow-green-600 shadow-sm border-green-600 w-full">About Supplier</button>
                </Link>
            </div>
        </div>
    );
};

export default SupplierInfo;
