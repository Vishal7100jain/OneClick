// Footer.js
import React from 'react';
import FooterLinkSection from './footerLink.jsx';

const Footer = () => {
    const links = ["About Us", "Contact Us", "Customer Care", "Free listing", "Media"];
    const ocExpertLinks = ["Doctors", "Contact Us", "Customer Care", "Free listing", "Media"];

    return (
        <footer className="bg-white p-8 shadow-md mt-4">
            <div className="container mx-auto flex justify-between">
                <div>
                    <div className=" font-bold text-xl mb-4">
                        <span className='text-primary'>
                            One
                        </span>
                        <span className='text-blue-600' >
                            Click
                        </span>
                    </div>
                </div>

                <div className="flex space-x-12">
                    <div className='flex'>
                        <FooterLinkSection title="Links" links={links} />
                        <FooterLinkSection title="OC Expert" links={ocExpertLinks} />
                        <FooterLinkSection title="OC Expert" links={ocExpertLinks} />
                        <FooterLinkSection title="OC Expert" links={ocExpertLinks} />
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">Connect us on</h4>
                        <ul className="flex space-x-4 mb-4">
                            <li><a href="/" className="text-gray-600 hover:text-green-600"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/" className="text-gray-600 hover:text-green-600"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="/" className="text-gray-600 hover:text-green-600"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="/" className="text-gray-600 hover:text-green-600"><i className="fab fa-twitter"></i></a></li>
                        </ul>
                        <div>
                            <a href="/" className="inline-block mb-2">
                                <img src="path-to-google-playstore-image.png" alt="Google Playstore" className="w-32" />
                            </a>
                            <a href="/" className="inline-block">
                                <img src="path-to-app-store-image.png" alt="App Store" className="w-32" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='gird justify-center'>
                <div className="text-gray-600 mb-4 text-center">
                    <p>Travel & Tourism | Beauty | Job | Education | Food | Home & Decor | Fitness | Health | Real Estate | Banking | Finance | Shopping | Fitness | Health | Real Estate</p>
                </div>
                <div className="text-gray-600 text-center">
                    <p>copyright @2008-2013. All right reserved Privacy | Help | FAQs</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
