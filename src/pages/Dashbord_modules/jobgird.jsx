import React from 'react';
import JobCard from './jobcard';
import CandidateStatus from './CandidateStatus';

const JobGrid = () => {
  const jobs = [
    {
      jobType: { icon: 'https://img.icons8.com/color/48/null/python--v1.png' },
      jobTitle: 'Python Developer',
      totalApplicants: 50,
      percentageChange: 10,
      timePosted: '2 hours ago'
    },
    {
        jobType: { icon: 'https://karthik-bio.netlify.app/static/media/api.39a1cafd6e037970991a.png' },
        jobTitle: 'RestAPI Developer',
        totalApplicants: 100,
        percentageChange: 7,
        timePosted: '12 hours ago'
      },
      {
        jobType: { icon: 'https://karthik-bio.netlify.app/static/media/django.f1f43a690e632daf0e22.png' },
        jobTitle: 'Django Developer',
        totalApplicants: 40,
        percentageChange: 66,
        timePosted: '7 hours ago'
      },
      {
        jobType: { icon: 'https://img.icons8.com/color/48/null/nodejs.png' },
        jobTitle: 'Node Developer',
        totalApplicants: 7,
        percentageChange: 13,
        timePosted: '7 hours ago'
      }
  ];

  return (
    <>
          <CandidateStatus Tittle={"Posted Jobs"}/>
    <div className='flex'>
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          jobType={job.jobType}
          jobTitle={job.jobTitle}
          totalApplicants={job.totalApplicants}
          percentageChange={job.percentageChange}
          timePosted={job.timePosted}
        />
      ))}
    </div>
    </>
    
  );
};

export default JobGrid;
