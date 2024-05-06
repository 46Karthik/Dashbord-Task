import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CandidateTable = ({ candidates }) => {
  return (
    <div className="overflow-x-auto"style={{  fontSize: '8px' }}>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2">Job ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">1st Level</th>
            <th className="px-4 py-2">2nd Level</th>
            <th className="px-4 py-2">3rd Level</th>
            <th className="px-4 py-2">4th Level</th>
            <th className="px-4 py-2">Total Marks</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td className="px-4 py-2">{candidate.jobId}</td>
              <td className="px-4 py-2">{candidate.name}</td>
              <td className="px-4 py-2">{candidate.position}</td>
              <td className="px-4 py-2">{candidate.firstLevel}</td>
              <td className="px-4 py-2">{candidate.secondLevel}</td>
              <td className="px-4 py-2">{candidate.thirdLevel}</td>
              <td className="px-4 py-2">{candidate.fourthLevel}</td>
              <td className="px-4 py-2">{candidate.totalMarks}</td>
              <td className={` ${candidate.status== "Hired" ?'px-4 py-2 text-green-500' :candidate.status== "Active" ? 'px-4 py-2 text-yellow-500' : 'px-4 py-2 text-red-500'}`}>{candidate.status}</td>
              <td className="px-4 py-2">
<VisibilityIcon/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateTable;
