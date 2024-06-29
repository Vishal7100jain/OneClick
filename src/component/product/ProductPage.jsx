// ProductDetail.js
import React from 'react';
import ProductImages from './productImage.jsx';
import ProductInfo from './ProductInfo.jsx';
import SupplierInfo from './supplierInfo.jsx';
import { shoes } from '../../contents/image.js';
import Header from '../Header.jsx'
import Footer from '../footer.jsx';
import Reviews from '../Reviews.jsx';
import MoreProduct from './MoreProduct.jsx';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
    const product = {
        mainImage: shoes,
        thumbnails: ['path-to-image.png', 'path-to-image.png', 'path-to-image.png', 'path-to-image.png'],
        title: 'Round toe leather loafer shoe (Black)',
        details: [
            'Occasion: Sports',
            'Color: Red',
            'Size: 12',
            'Type: Running Shoes, Women\'s Shoes'
        ],
        price: 58.30,
        discount: 65.12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        specifications: [
            { label: 'Product Model', value: 'Escaper Mesh' },
            { label: 'Manufacture details', value: '48/8, Bathouse, malaseari Bhat-gandhinagar' },
            { label: 'Product weight', value: '0.7190kg, 719gm' },
            { label: 'Brand', value: 'Puma' },
            { label: 'Size', value: '11' },
            { label: 'Type', value: 'Running shoes, women\'s shoes' },
            { label: 'Color', value: 'Navy' }
        ],
        supplier: {
            storeImage: 'path-to-store-image.png',
            storeName: 'Tab Sport',
            reviews: '4.8',
            address: '21B/8, Near Mala sheri Mumbai, Maharastra - 259632',
            openHours: 'Mon - Sun :- 10:30 am - 9:30 pm'
        }
    };


    const products = [
        {
            image: shoes,
            title: 'Round toe leather loafer shoe (Black)',
            description: 'Prototype ',
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
        }
    ]

    const location = useLocation()
    return <>
        <Header />
        <div className="lg:container w-full lg:p-6 p-4 bg-white shadow-md rounded-lg my-14">
            <div className='pl-5'>
                {location.pathname.split("/")[1]} {"<"} {location.pathname.split("/")[2]} {"<"} <span className='text-black font-bold'>
                    Round toe leather loafer shoe (Black)
                </span>
            </div>
            <div className="lg:flex lg:space-x-6">
                <ProductImages mainImage={product.mainImage} thumbnails={product.thumbnails} />
                <ProductInfo
                    title={product.title}
                    details={product.details}
                    price={product.price}
                    discount={product.discount}
                    description={product.description}
                    specifications={product.specifications}
                />
            </div >
            <div className="mt-6">
                <div className="flex flex-wrap ">
                    <div className="lg:w-2/5 w-full mb-6 lg:mb-0">
                        <SupplierInfo
                            storeImage={product.supplier.storeImage}
                            storeName={product.supplier.storeName}
                            reviews={product.supplier.reviews}
                            address={product.supplier.address}
                            openHours={product.supplier.openHours}
                        />
                    </div>
                    <div className='shadow-2xl lg:w-auto xs:w-full rounded-xl p-4'>
                        <h2 className="text-xl font-bold mb-2">Specification</h2>
                        <ul className="text-gray-600 space-y-2">
                            {product.specifications.map((spec, index) => (
                                <div className='flex justify-between' key={index}>
                                    <li><strong>{spec.label}:</strong></li>
                                    <li>{spec.value}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <MoreProduct products={products}></MoreProduct>
            <Reviews></Reviews>
        </div >
        <Footer />
    </>
};

export default ProductDetail;
