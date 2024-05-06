import React from 'react';
import Button from '@mui/material/Button';

const UserCard = ({ date, title, creator, time,col, buttonLabel,role }) => {
  return (
    <div className="flex items-center m-2 p-2 bg-gray-100 rounded-lg" style={{  fontSize: '9px' }}>
      <div>
      <img
              src="https://saasblocks-preview-tdg1-prd.fly.dev/assets/avatars/nicholas-turner.png"
              alt="John Smith Avatar"
              className="h-12 w-12  mt-3 rounded-full border-2 border-blue-500"
            />
        <p className="text-white font-bold">{date}</p>
        <p className="text-white">Feb</p>
      </div>
      <div className="ml-4">
        <div className='flex'>
        <h3 className="font-bold text-gray-700 m-3">{title}</h3>
        {role ==true?
      <>         <p className='mt-3' style={{ color:"blue" }}>Python Developer</p>
      </>:<>
      </>  
      }
        </div>
        <p className='m-3'>Created by {creator}</p>
        <p>{time}</p>
      </div>
      {buttonLabel ?
    <>
     {/* <button >
        
      </button> */}
      <div className="ml-auto  px-4 py-2 rounded-lg">
      <Button variant="outlined">{buttonLabel}</Button>
      </div>
      
      
      </>:<>
    
    </>  
    }
     
    </div>
  );
};

export default UserCard;
