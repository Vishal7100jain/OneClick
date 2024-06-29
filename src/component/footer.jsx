// Footer.js
import React from 'react';
import FooterLinkSection from './footerLink.jsx';
import { appStore, arrow2, google } from '../contents/image.js';
import { Link } from 'react-router-dom';

const Footer = () => {
    const links = ["About Us", "Contact Us", "Customer Care", "Free listing", "Media"];
    const ocExpertLinks = ["Doctors", "Contact Us", "Customer Care", "Free listing", "Media"];

    return (
        <footer className="bg-white p-8 shadow-md mt-4">
            <div className="container mx-auto flex lg:justify-between flex-wrap xs:justify-center mb-10">
                <div className='w-1/3 flex justify-center items-center'>
                    <div className=" font-bold text-xl mb-4">
                        <span className='text-primary'>
                            One
                        </span>
                        <span className='text-blue-600 relative' >
                            Click
                            <img src={arrow2} className='absolute bottom-0 right-0 w-80' />
                        </span>
                    </div>
                </div>
                <div className='flex'>
                    <FooterLinkSection title="Links" links={links} />
                    <FooterLinkSection title="OC Expert" links={ocExpertLinks} />
                    <FooterLinkSection title="OC Expert" links={ocExpertLinks} />
                    <FooterLinkSection title="OC Expert" links={ocExpertLinks} />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className="font-bold mb-2">Connect us on</h4>
                    <ul className="flex space-x-4 mb-4">
                        <li><a href="/" className="text-gray-600 hover:bg-green-600 hover:text-white shadow-2xl bg-slate-200 p-2 rounded-full"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="/" className="text-gray-600 hover:bg-green-600 hover:text-white shadow-2xl bg-slate-200 p-2 rounded-full"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="/" className="text-gray-600 hover:bg-green-600 hover:text-white shadow-2xl bg-slate-200 p-2 rounded-full"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="/" className="text-gray-600 hover:bg-green-600 hover:text-white shadow-2xl bg-slate-200 p-2 rounded-full"><i className="fab fa-twitter"></i></a></li>
                    </ul>
                    <div className='flex flex-col'>
                        <Link to="/" className="inline-block mb-2">
                            <img src={google} alt="Google Playstore" className="w-48" />
                        </Link>
                        <Link to="/" className="inline-block">
                            <img src={appStore} alt="App Store" className="w-48" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='gird justify-center '>
                <div className="text-gray-600 mb-4 text-center">
                    <p>Travel & Tourism | Beauty | Job | Education | Food | Home & Decor | Fitness | Health | Real Estate | Banking | Finance | Shopping | Fitness | Health | Real Estate</p>
                </div>
                <div className="text-gray-600 text-center">
                    <p>copyright @2008-2013. All right reserved Privacy | Help | FAQs</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
