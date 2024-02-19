import React from 'react';

function JobCard({ job }) {
  return (
    <div data-testid="job-card">
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      {/* Add more details about the job application */}
    </div>
  );
}

export default JobCard;
