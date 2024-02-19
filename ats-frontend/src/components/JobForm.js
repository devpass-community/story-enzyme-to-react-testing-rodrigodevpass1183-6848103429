import React, { useState } from 'react';

function JobForm({ addJob }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form inputs
    if (title.trim() === '' || company.trim() === '') {
      return;
    }
    // Create a new job object
    const newJob = {
      id: Date.now(), // Generate a unique ID
      title,
      company,
    };
    // Add the new job to the list
    addJob(newJob);
    // Reset the form inputs
    setTitle('');
    setCompany('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Job Application</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default JobForm;
