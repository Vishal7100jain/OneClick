// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <Link to="/Home/Product">
            <div className="border p-4 rounded-lg relative shadow hover:shadow-xl cursor-pointer hover:scale-105 transition">
                <button className='text-red-700 absolute right-5'>
                    <i className="far fa-heart"></i>
                </button>
                <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className='text-third'>Rainbow shoes & enterprise</p>
                <div className='flex justify-between items-center mb-2'>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-800">{product.price}</p>
                </div>
                <hr />
                <div className='p-1'>
                    <div className='flex justify-between'>
                        <p className='text-gray-600'>Category</p>
                        <p className='text-gray-600'>Subcategory</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Shoes</p>
                        <p>Shoes</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
