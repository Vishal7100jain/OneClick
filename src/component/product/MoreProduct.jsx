import React from 'react'
import ProductCard from '../Product'

const MoreProduct = ({ products }) => {
    return (
        <div className='lg:m-5 mt-10'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-2xl'>More from this seller</h2>
                <div className='flex gap-5'>
                    <button className='shadow-2xl rounded-full w-12 h-12 bg-slate-300'>{"<"}</button>
                    <button className='shadow-2xl rounded-full w-12 h-12 bg-slate-300'>{">"}</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

export default MoreProduct