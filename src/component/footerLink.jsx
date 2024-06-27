// FooterLinkSection.js
import React from 'react';

const FooterLinkSection = ({ title, links }) => {
    return (
        <div>
            <h4 className="font-bold mb-2">{title}</h4>
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index} className="mb-2">
                            <a href="/" className="text-gray-600 hover:text-green-600">{link}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FooterLinkSection;
