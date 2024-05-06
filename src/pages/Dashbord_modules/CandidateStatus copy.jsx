import React from 'react';

const CandidateStatus2 = ({ Tittle }) => {
  return (
    <div className="flex items-center space-x-4 mb-4 border-gray-300 border-b-2">
      <div className="flex-grow mb-6">
        <h1 className="text-xl  text-left text-black  font-bold">{Tittle}</h1>
      </div>
      <button className="text-blue-500 hover:underline">View All</button>
    </div>
  );
};

export default CandidateStatus2;
