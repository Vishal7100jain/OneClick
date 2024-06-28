// ProductList.js
import React from 'react';
import ProductCard from './Product.jsx';
import { shoes } from '../contents/image.js'
import Category from './category.jsx';
import { Link } from 'react-router-dom';

const products = [
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype Shoes',
        price: '$120'
    },
];

const ProductList = () => {
    return (
        <Link to={'/Product'}>
            <Category>
            </Category>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </Link>
    );
};

export default ProductList;
