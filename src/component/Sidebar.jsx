// Sidebar.js
import { Button, TextField } from '@mui/material';
import React from 'react';

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

const Sidebar = () => {
    return (
        <aside className="w-64 bg-white p-4 rounded-md shadow-[rgba(0,0,0,0.2)_5px_5px_4px_0px] h-full">
            <div className='flex'>
                <h2 className="font-bold text-lg mb-4">
                    Related categories
                </h2>
                <Button className='h-8' variant="contained">
                    show
                </Button>
            </div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                        <a href="/" className="text-gray-600">{category}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
