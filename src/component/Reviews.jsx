import React from 'react';
import 'tailwindcss/tailwind.css';
import { image2, image3 } from '../contents/image';

const reviews = [
    {
        id: 1,
        name: 'Sama Seth',
        date: '2 days ago',
        title: 'Easy The most comfortable Shoes',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        rating: 4.9,
        image: image3
    },
    {
        id: 2,
        name: 'Sama Seth',
        date: '2 days ago',
        title: 'Easy The most comfortable Shoes',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        rating: 4.9,
        image: image3
    },
    {
        id: 3,
        name: 'Sama Seth',
        date: '2 days ago',
        title: 'Easy The most comfortable Shoes',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        rating: 4.9,
        image: image3
    }
];

const Review = ({ name, date, title, content, rating, image }) => (
    <div className="flex flex-col md:flex-row justify-between items-start py-4 border-b border-gray-200">
        <div className="flex items-center w-full md:w-1/5">
            <img src={image} alt={`${name}`} className="rounded-full w-12 h-12 mr-4" />
            <div>
                <h4 className="font-bold">{name}</h4>
                <p className="text-gray-500">{date}</p>
            </div>
        </div>
        <div className="flex-1 mt-4 md:mt-0 md:ml-4 w-full md:w-3/5">
            <h4 className="font-bold">{title}</h4>
            <p className="text-gray-700">{content}</p>
        </div>
        <div className="ml-4 mt-4 md:mt-0 text-right">
            <p className="text-yellow-500">{rating} ★★★★★</p>
        </div>
    </div>
);

const Reviews = () => (
    <div className="m-4 md:m-10 p-4">
        <div className='flex justify-between items-center'>
            <h2 className="text-xl md:text-2xl font-bold mb-4">User reviews on this Supplier</h2>
            <h5 className='text-lg md:text-xl font-bold text-gray-500'>View more</h5>
        </div>
        {reviews.map(review => (
            <Review key={review.id} {...review} />
        ))}
    </div>
);

export default Reviews;
