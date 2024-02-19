import React from 'react';
import JobCard from './JobCard';

function JobList({ jobs }) {
  return (
    <div>
      <h2>Job Applications</h2>
      {jobs.map((job) => (
        <JobCard data-testid="job-card" key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobList;
