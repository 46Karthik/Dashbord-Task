import React from 'react';
import {
  CalendarIcon,
  ClockIcon
} from "@heroicons/react/outline";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const InterviewCard = () => {
  return (
    <>
    <div className="flex items-center space-x-4 mb-4 border-gray-300 border-b-2">
      <div className="flex-grow ">
        <h3 className="text-xl  text-left text-black  font-bold mb-6">Today interviews Mettings info</h3>
      </div>
      <MoreVertIcon />
    </div>
      <table className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full text-black">
      <tbody className="border-b border-gray-300">
        <tr>
          <td rowSpan="5" className="border-r border-gray-300">
            <img
              src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/nicholas-turner.png"
              alt="John Smith Avatar"
              className="h-12 w-12 ml-20 mt-3 rounded-full border-2 border-blue-500"
            />
            <br />
            <span className="text-black">John Smith</span>
            <br/>
            <div className="border-b border-gray-300">Senior Python Developer</div>
            <br />
          
            <div className='flex justify-around'>
              <CalendarIcon className="h-5 w-5 text-[#1e72c4]" />
              <ClockIcon className="h-5 w-5 text-[#1e72c4]" />
            </div>
            <div className='flex justify-around'>
              <p className="text-[#1e72c4]"> 19th Feb 2024</p>
              <p className="text-[#1e72c4]">  10:30 A.M</p>
            </div>
          </td>
          <td className="border-b border-gray-300 border-r-2">1st Level: 7/10</td>
          <td className="border-b border-gray-300 ">Interviewer: Stella</td>
        </tr>
        <tr>
          <td className="border-b border-gray-300 border-r-2">2nd Level: 6/10</td>
          <td className="border-b border-gray-300">Interviewer: Smith</td>
        </tr>
        <tr>
          <td className="border-b border-gray-300 border-r-2">3nd Level Waiting </td>
          <td className="border-b border-gray-300">Interviewer: Stephan</td>
        </tr>
        <tr>
          <td className="border-b border-gray-300 border-r-2">Meet Via: G-Meet </td>
          <td className="border-b border-gray-300">Attendees: Johnson</td>
        </tr>
        <tr>
          <td colSpan="2">
            <div className="mt-4">
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-300">
                Reschedule Meeting
              </button>
              <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Join Meeting
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    
    </>
  
  );
};

export default InterviewCard;
