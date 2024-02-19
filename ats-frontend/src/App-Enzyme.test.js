import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders applicant tracking system title', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toEqual('Applicant Tracking System');
  });
});
