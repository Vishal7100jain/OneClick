// ProductInfo.js
import React from 'react';

const ProductInfo = ({ title, details, price, discount, description, specifications }) => {
    return (
        <div className="w-3/5">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <div className="flex items-center mb-4">
                <button className="text-red-600 mr-4"><i className="far fa-heart"></i> Add to my wishlist</button>
            </div>
            <div className="flex mb-4">
                {details.map((detail, index) => (
                    <span key={index} className="text-gray-600 mr-4">{detail}</span>
                ))}
            </div>
            <div className="text-2xl text-green-600 mb-4">
                ₹ {price} <span className="line-through text-gray-600 ml-2">₹ {discount}</span>
            </div>
            <button className="bg-green-600 text-white py-2 px-4 rounded mb-4">Inquiry Now</button>
            <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic tempore eius deserunt doloribus similique tempora ea sunt libero repellendus? Nisi tempore excepturi ad maxime ipsum nihil saepe pariatur consequatur quod.
                    Commodi aspernatur quibusdam perspiciatis perferendis consectetur doloremque recusandae, maiores ea illo quisquam ullam veritatis totam sint repellat eaque. Delectus, quis rerum cumque magnam optio facilis nam porro fugit iure autem.
                    Sint odio eius, possimus quibusdam perferendis, corporis alias incidunt enim, illum tempore itaque doloremque natus consequuntur illo ad aliquam quos maxime magnam ipsum neque est. Praesentium harum tenetur culpa nobis.
                    Ee numquam harum, sed adipisci rerum ducimus exercitationem? Tenetur ab quia cupiditate ipsam doloribus asperiores illum, repudiandae facilis fugit blanditiis eaque!</p>
            </div>
        </div>
    );
};

export default ProductInfo;
