// ProductImages.js
import React from 'react';

const ProductImages = ({ mainImage, thumbnails }) => {
    return <>
        <div className="lg:w-2/5 ">
            <img src={mainImage} alt="Product" className="w-full h-auto mb-4 shadow-2xl rounded-xl" />
            <div className="flex space-x-4">
                {thumbnails.map((thumb, index) => (
                    <img key={index} src={mainImage} alt="Product thumbnail" className="w-1/5 h-auto cursor-pointer shadow-xl" />
                ))}
            </div>
        </div>
    </>
};

export default ProductImages;
