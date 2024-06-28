// Sidebar.js
import { Search, TextFields } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { profile1, profile2, profile3, profile4, profile5, profile6, profile7, profile8, profile9 } from '../contents/image';

const categories = [
    'Agriculture',
    'Apparel',
    'Automobile & Two wheelers',
    'Baby care',
    'Beauty & Personal care',
    'Book',
    'Chemicals',
    'Construction & real estate',
    'Electrical equipment & supplies',
    'Electronics',
    'Energy'
];

const imageArray = [profile1, profile2, profile4, profile7, profile6, profile8, profile5, profile9, profile3, profile1, profile1]

const Sidebar = () => {
    return (
        <aside className="xs:hidden lg:block w-80 bg-white p-4 rounded-md shadow-[rgba(0,0,0,0.2)_5px_5px_4px_0px] h-full">
            <div className='flex items-center mb-5'>
                <h2 className="font-bold text-md mr-2">
                    Related categories
                </h2>
                <Button className='h-8' variant="contained">
                    show
                </Button>
            </div>
            <TextField id="outlined-basic" placeholder='Search' className='rounded-lg p-0' variant="outlined" />
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="my-4 flex relative items-center">
                        <img src={imageArray[index]} className='absolute -left-2 opacity-30 w-10 h-10 rounded-full' alt="" />
                        <img src={imageArray[index]} className='w-10 h-10 rounded-full' alt="" />
                        <a href="/" className="text-black p-2">{category}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
