// ProductPage.js
import React from 'react';
import SellerInfo from './seller.jsx';
import AboutUs from './about.jsx';
import Header from '../Header.jsx'
import Footer from '../footer.jsx';
import MoreProduct from '../product/MoreProduct.jsx';
import { shoes, trophy } from '../../contents/image.js';
import Reviews from '../Reviews.jsx';
import AwardsCertificates from './AwardsCertificates.jsx';
import { useLocation } from 'react-router-dom';

const ProductPage = () => {
    const seller = {
        storeImage: 'path-to-store-image.png',
        storeName: 'Tab Sport',
        phoneNumber: '+91-123456789',
        email: 'rahul@gmail.com',
        name: 'Rahul Sharma',
        address: 'Bhatt Sector, Gandhinagar',
        state: 'Gujarat',
        pincode: '382007',
        category: 'Shoes',
        subcategory: 'Shoes',
        incubationCenter: 'Ahmedabad',
        city: 'Ahmedabad'
    };

    const aboutUs = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const moreFromSeller = [
        {
            image: shoes,
            name: 'Round toe leather loafer shoe (Black)',
            description: 'Rainbow shoes & enterprise',
            price: '1800'
        },
        {
            image: shoes,
            name: 'Round toe leather loafer shoe (Black)',
            description: 'Rainbow shoes & enterprise',
            price: '1800'
        },
        {
            image: shoes,
            name: 'Round toe leather loafer shoe (Black)',
            description: 'Rainbow shoes & enterprise',
            price: '1800'
        }
    ];

    const awards = [
        { image: trophy, name: 'Bharat Ratna-1st degree of honour.' },
        { image: trophy, name: 'Bharat Ratna-1st degree of honour.' },
        { image: trophy, name: 'Bharat Ratna-1st degree of honour.' }
    ];

    const certificates = [
        { image: trophy, name: 'Bharat Ratna-1st degree of honour.' },
        { image: trophy, name: 'Bharat Ratna-1st degree of honour.' },
        { image: trophy, name: 'Bharat Ratna-1st degree of honour.' }
    ];
    const location = useLocation()

    return <>
        <Header></Header>
        <div className="container w-full p-6 bg-gray-100">
            <div className='pl-5'>
                {location.pathname.split("/")[1]} {"<"}
                {location.pathname.split("/")[2]} {"<"}
                <span className='text-black font-bold'>
                    {location.pathname.split("/")[3]}
                </span>
            </div>
            <div className="flex xs:flex-wrap lg:m-5">
                <SellerInfo {...seller} />
                <div className='lg:w-2/3 pl-3'>
                    <AboutUs description={aboutUs} />
                    <MoreProduct products={moreFromSeller}></MoreProduct>
                </div>
                <div className="bg-white p-4 shadow-md rounded w-full mt-4">
                    <AwardsCertificates title="Awards" items={awards} />
                    <AwardsCertificates title="Certificate" items={certificates} />
                </div>
                <Reviews></Reviews>
            </div>
        </div>
        <Footer></Footer>
    </>

};

export default ProductPage;
