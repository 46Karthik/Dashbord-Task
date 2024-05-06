import React from 'react';
import UserCard from './usercard';
import CandidateStatus2 from './CandidateStatus copy';

const eventData = [
  {
    id: 1,
    date: "07",
    title: "Interview with Designer",
    creator: "Stella",
    time: "10 AM to 11 AM",
    col:1,
    role :true
  },
  {
    id: 2,
    date: "12",
    title: "Meeting with Client",
    creator: "John",
    time: "2 PM to 3 PM",
    col:2,
    role :true
  },
  {
    id: 2,
    date: "12",
    title: "Meeting with Client",
    creator: "John",
    time: "2 PM to 3 PM",
    role :true
  },
];

const UserMain = () => {
  return (
    <>
    
    <div>
 <CandidateStatus2 Tittle={"Activity"}/>

    </div>
    <div>
      {eventData.map(event => (
        <UserCard
          key={event.id}
          date={event.date}
          title={event.title}
          creator={event.creator}
          time={event.time}
          buttonLabel={event.buttonLabel}
          col={event.col}
          role={event.role}
        />
      ))}
    </div>
    </>
    
  );
};

export default UserMain;
