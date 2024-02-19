import React from 'react';
import './setupTests';
import { shallow } from 'enzyme';
import JobForm from './components/JobForm';

describe('JobForm', () => {
  it('calls addJob function with correct job object', () => {
    const addJobMock = jest.fn();
    const wrapper = shallow(<JobForm addJob={addJobMock} />);
    const titleInput = wrapper.find('input[type="text"]').at(0);
    const companyInput = wrapper.find('input[type="text"]').at(1);

    titleInput.simulate('change', { target: { value: 'Job 1' } });
    companyInput.simulate('change', { target: { value: 'Company A' } });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(addJobMock).toHaveBeenCalledTimes(1);
    expect(addJobMock).toHaveBeenCalledWith({
      id: expect.any(Number),
      title: 'Job 1',
      company: 'Company A',
    });
  });
});
