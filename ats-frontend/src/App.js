import React, { useState } from 'react';
import JobList from './components/JobList';
import JobForm from './components/JobForm';

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (newJob) => {
    setJobs([...jobs, newJob]);
  };

  return (
    <div>
      <h1>Applicant Tracking System</h1>
      <JobForm addJob={addJob} />
      <JobList jobs={jobs} />
    </div>
  );
}

export default App;
