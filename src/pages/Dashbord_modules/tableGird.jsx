import React from 'react';
import CandidateTable from './CandidateTable'; // Assuming CandidateTable component is in the same directory
import CandidateStatus from './CandidateStatus';
const Tablegird = () => {
  // Assuming you have an array of candidate objects
  const candidates = [
    {
      id: 1,
      jobId: '#001',
      name: 'John Doe',
      position: 'Software Engineer',
      firstLevel: '7/10',
      secondLevel: '6/10',
      thirdLevel: '5/10',
      fourthLevel: '8/10',
      totalMarks: '26/40',
      status: 'reject'
    },
    {
      id: 2,
      jobId: '#002',
      name: 'John Smith',
      position: 'Python Developer',
      firstLevel: '7/10',
      secondLevel: '6/10',
      thirdLevel: '5/10',
      fourthLevel: '8/10',
      totalMarks: '26/40',
      status: 'Active'
    },
    {
      id: 3,
      jobId: '#003',
      name: 'Jane Doe',
      position: 'Frontend Developer',
      firstLevel: '7/10',
      secondLevel: '6/10',
      thirdLevel: '5/10',
      fourthLevel: '8/10',
      totalMarks: '26/40',
      status: 'Hired'
    },
    {
      id: 4,
      jobId: '#004',
      name: 'Alice Johnson',
      position: 'Data Scientist',
      firstLevel: '7/10',
      secondLevel: '6/10',
      thirdLevel: '5/10',
      fourthLevel: '8/10',
      totalMarks: '26/40',
      status: 'Pending'
    },
    {
      id: 5,
      jobId: '#005',
      name: 'Bob Smith',
      position: 'Backend Developer',
      firstLevel: '7/10',
      secondLevel: '6/10',
      thirdLevel: '5/10',
      fourthLevel: '8/10',
      totalMarks: '26/40',
      status: 'Active'
    }
  ];
  

  return (
    <div>
      <CandidateStatus Tittle={"Candidate Status"}/>
      {/* Render the CandidateTable component and pass the candidates array as a prop */}
      <CandidateTable candidates={candidates} />
    </div>
  );
};

export default Tablegird;
