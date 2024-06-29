// ProductList.js
import React from 'react';
import ProductCard from './Product.jsx';
import { arrow2, shoes } from '../contents/image.js'
import Category from './category.jsx';
import { Link } from 'react-router-dom';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const products = [
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
    {
        image: shoes,
        title: 'Round toe leather loafer shoe (Black)',
        description: 'Prototype',
        price: '$120'
    },
];

const ProductList = () => {
    return <div>
        <Category>
        </Category>
        <div className='flex justify-between'>
            <div className='relative px-4'>
                <h1 className='font-bold'>All Shoes</h1>
                <img src={arrow2} alt="" className='absolute bottom-3 w-20 -rotate-6 right-4' />
            </div>
            <button className='rounded-full w-12 h-12  shadow-green-500 shadow-2xl'>
                <FilterAltOutlinedIcon></FilterAltOutlinedIcon>
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    </div>
};

export default ProductList;
