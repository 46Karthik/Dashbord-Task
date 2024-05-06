import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';

const CandidateStatus = ({ Tittle }) => {
  return (
    <div className="flex items-center space-x-4 mb-4 border-gray-300 border-b-2">
      <div className="flex-grow mb-6 ">
        <h1 className="text-xl  text-left text-black  font-bold">{Tittle}</h1>
      </div>
      <button className="text-blue-500 hover:underline">View All</button>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border rounded pl-8 pr-4 py-2"
        />
        <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <i className="fas fa-search"></i>
        </span>
      </div>
      <button className="px-4 py-2 border rounded">
        <FilterListIcon color="primary"/>
        Filters</button>
    </div>
  );
};

export default CandidateStatus;
