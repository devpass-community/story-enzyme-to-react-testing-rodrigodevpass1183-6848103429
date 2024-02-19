import React from 'react';
import './setupTests';
import { shallow } from 'enzyme';
import JobList from './components/JobList';
import JobCard from './components/JobCard';

describe('JobList', () => {
  it('renders the correct number of JobCard components', () => {
    const jobs = [
      { id: 1, title: 'Job 1', company: 'Company A' },
      { id: 2, title: 'Job 2', company: 'Company B' },
    ];
    const wrapper = shallow(<JobList jobs={jobs} />);
    expect(wrapper.find(JobCard)).toHaveLength(jobs.length);
  });
});
