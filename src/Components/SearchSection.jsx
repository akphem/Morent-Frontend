import React from 'react';
import img2 from '../images/img2.png';
import img1 from '../images/img1.png';

export const SearchSection = () => {
  return (
    <section className="p-4 bg-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img src={img2} alt="Car rental" className="w-full h-full object-contain" />
          <div className="absolute bottom-4 left-4">
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded mb-10">Rental Car</button>
          </div>
        </div>
        <div className="relative">
          <img src={img1} alt="Car rental" className="w-full h-full object-cover" />
          <div className="absolute bottom-4 left-4">
            <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded mb-10">Rental Car</button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
  <div className="mt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
      <input type="text" placeholder="Pick-Up Location" className="border rounded p-2 w-full md:w-auto" />
      <input type="date" className="border rounded p-2 w-full md:w-auto" />
      <input type="time" className="border rounded p-2 w-full md:w-auto" />
    </div>
    <button className="bg-blue-600 text-white py-2 px-4 rounded hidden md:block">Swap</button>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 w-full md:w-auto">
      <input type="text" placeholder="Drop-Off Location" className="border rounded p-2 w-full md:w-auto" />
      <input type="date" className="border rounded p-2 w-full md:w-auto" />
      <input type="time" className="border rounded p-2 w-full md:w-auto" />
    </div>
  </div>
</div>
    </section>
  );
};
