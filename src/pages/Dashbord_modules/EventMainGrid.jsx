import React from 'react';
import EventCard from './EventCard';
import CandidateStatus2 from './CandidateStatus copy';

const eventData = [
  {
    id: 1,
    date: "07",
    title: "Interview with Designer",
    creator: "Stella",
    time: "10 AM to 11 AM",
    buttonLabel: "Details",
    col:1
  },
  {
    id: 2,
    date: "12",
    title: "Meeting with Client",
    creator: "John",
    time: "2 PM to 3 PM",
    buttonLabel: "More Info",
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

const EventList = () => {
  return (
    <>
        <div>
 <CandidateStatus2 Tittle={"Upcoming"}/>

    </div>
    <div>
      {eventData.map(event => (
        <EventCard
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

export default EventList;
