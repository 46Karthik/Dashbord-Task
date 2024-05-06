import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const JobCard = ({ jobType, jobTitle, totalApplicants, percentageChange, timePosted }) => {
  return (
    <div className="bg-white p-4 m-2  w-64 border rounded shadow">
      <div className="flex items-center border-b-2">
        <img src={jobType.icon} alt="" className="w-6 h-6 mb-2" />
        <h2 className="ml-2  font-bold" style={{  fontSize: '8px' }}>{jobTitle}</h2>
        <MoreVertIcon/>
      </div>
      <p className="text-blue-500 mt-2">{jobType.category}</p>
      <div className="bg-blue-100 p-2 ml-9 rounded mt-2  w-12 mb-2 border border-blue-300">
        <p className="text-blue-700 text-xl font-bold">{totalApplicants}</p>
        
      </div>
      <div className='border-b-2'>
      <p className='mb-2'>Total Applicants</p>
      </div>
      
      <div className="flex items-center mt-2 "style={{  fontSize: '8px' }}>
        <p className={` ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {percentageChange}% vs last month
        </p>
        <p className="text-gray-500 ml-auto ">{timePosted}</p>
      </div>
    </div>
  );
};

export default JobCard;
