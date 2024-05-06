import React from 'react';

const EventCard = ({ date, title, creator, time,col, buttonLabel }) => {
  return (
    <div className="flex items-center m-2 p-4 bg-gray-100 rounded-lg" style={{  fontSize: '8px' }}>
      <div className={` ${col==1?'bg-[#d5e5ee] p-4 rounded-lg ' :col==2 ? 'bg-[#c0c1c1]  p-4 rounded-lg ' : 'bg-[#e1e1e1]  p-4 rounded-lg'}`}>
        <p className="text-white font-bold">{date}</p>
        <p className="text-white">Feb</p>
      </div>
      <div className="ml-4">
        <h3 className="font-bold text-gray-700">{title}</h3>
        <p>Created by {creator}</p>
        <p>{time}</p>
      </div>
      <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-lg">
        {buttonLabel}
      </button>
    </div>
  );
};

export default EventCard;
