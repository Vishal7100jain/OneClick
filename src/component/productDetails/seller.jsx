// SellerInfo.js
import React from 'react';
import { image2 } from '../../contents/image';
import CustomButton from '../CustomButton';

const SellerInfo = ({ storeName, phoneNumber, email, name, state, pincode, category, subcategory, incubationCenter, city }) => {
    const details = [
        phoneNumber, email, name, state, pincode, category, subcategory, incubationCenter, city
    ]
    return (
        <div className="bg-white p-4 shadow-md rounded-lg w-full lg:w-1/3">
            <div className="flex flex-col items-center mb-4">
                <img src={image2} alt="Store" className="h-40 w-full rounded-md mb-4" />
                <CustomButton title="Follow" otherStyle="w-full"></CustomButton>
            </div>
            <h2 className="text-lg font-bold mb-2">{storeName}</h2>
            <ul className="text-gray-600 space-y-2">
                {details.map((item) => {
                    return <li key={item} className='flex justify-between'><strong>{item.toUpperCase()} :</strong> {item}</li>
                })}
            </ul>
            <button className="border-green-600 border-2 text-black shadow-green-600 shadow-sm py-2 px-4 rounded mt-4 w-full">INQUIRY NOW</button>
        </div>
    );
};

export default SellerInfo;
