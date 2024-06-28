import React from 'react';
import { arrow2, profile10 } from '../contents/image';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Category() {
    const categories = ['Agriculture', 'Real estate', 'Doctors', 'Beauty&spa']

    return (
        <div className="flex flex-wrap-reverse justify-center gap-5 p-5">
            <div className="lg:w-3/5 xs:w-full shadow-xl p-2 rounded-xl">
                <div className="flex justify-between items-center text-lg mb-4">
                    <span className='relative'>
                        All Category
                        <img src={arrow2} className='absolute bottom-0 right-0 h-2 w-24 z-0' alt="" />
                    </span>
                    <span className="text-gray-600 cursor-pointer text-sm">View all</span>
                </div>
                <div className="grid lg:grid-cols-4 xs:grid-cols-2 lg:gap-6 text-gray-800">
                    {categories.map((category, index) => (
                        <div key={index} className="category-item text-black">
                            {category}
                        </div>
                    ))}
                    {categories.map((category, index) => (
                        <div key={index} className="category-item text-black">
                            {category}
                        </div>
                    ))}
                    {categories.map((category, index) => (
                        <div key={index} className="category-item text-black">
                            {category}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex items-center mb-2 shadow-2xl p-4 rounded-lg">
                    <img
                        src={profile10}
                        alt="Maria"
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <span className="block">Maria</span>
                        <span className="text-gray-600 text-sm">98 Deals</span>
                    </div>
                    <div>
                        <MoreVertIcon></MoreVertIcon>
                    </div>
                </div>
                <button className="bg-green-500 text-white p-2 w-36 rounded">
                    Post your requirement
                </button>
            </div>
        </div>
    );
}

export default Category;
