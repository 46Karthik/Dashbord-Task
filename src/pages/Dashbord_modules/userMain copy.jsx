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
    buttonLabel: "More",
    col:1
  },
  {
    id: 2,
    date: "12",
    title: "Meeting with Client",
    creator: "John",
    time: "2 PM to 3 PM",
    buttonLabel: "More",
    col:2
  },
  {
    id: 2,
    date: "12",
    title: "Meeting with Client",
    creator: "John",
    time: "2 PM to 3 PM",
    buttonLabel: "view",
  },
];

const UserMain2 = () => {
  return (
    <>
    
    <div>
 <CandidateStatus2 Tittle={"Hairing Candidates"}/>

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
        />
      ))}
    </div>
    </>
  );
};

export default UserMain2;
