import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ name, role, date, rating, comment, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <img src={imageUrl} alt={name} className="w-15 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-gray-700">{comment}</p>
  </div>
);

const Reviews = () => {
  const reviews = [
    {
      name: 'Alex Stanton',
      role: 'CEO at Bukalapak',
      date: '21 July 2022',
      rating: 4,
      comment: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      imageUrl: '/path-to-alex-image.jpg',
    },
    {
      name: 'Skylar Dias',
      role: 'CEO at Amazon',
      date: '20 July 2022',
      rating: 4,
      comment: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
      imageUrl: '/path-to-skylar-image.jpg',
    },
  ];

  return (
    <div className="max-w-4xl w-full p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">13</span>
      </div>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <button className="w-full text-center text-blue-600 font-semibold py-2 mt-4 hover:underline">
        Show All
      </button>
    </div>
  );
};

export default Reviews;