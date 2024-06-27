// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded shadow hover:shadow-xl cursor-pointer hover:scale-105 transition">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-gray-800 font-bold">{product.price}</p>
        </div>
    );
};

export default ProductCard;
