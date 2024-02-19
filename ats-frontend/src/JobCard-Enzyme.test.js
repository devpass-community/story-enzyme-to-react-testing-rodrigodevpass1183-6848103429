import React from 'react';
import './setupTests';
import { shallow } from 'enzyme';
import JobCard from './components/JobCard';

describe('JobCard', () => {
  it('renders the job title and company correctly', () => {
    const job = { id: 1, title: 'Job 1', company: 'Company A' };
    const wrapper = shallow(<JobCard job={job} />);
    expect(wrapper.find('h3').text()).toEqual(job.title);
    expect(wrapper.find('p').text()).toEqual(job.company);
  });
});
