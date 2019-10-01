import React from 'react';
import { shallow } from 'enzyme';
import MemeDisplay from './MemeDisplay';

describe('MemeDisplay component', () => {
  it('renders MemeDisplay', () => {
    const wrapper = shallow(<MemeDisplay header="hi" imgURL="image" footer="footer"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
