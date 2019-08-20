import React from 'react';
import { shallow } from 'enzyme';
import MemeInput from './MemeInput';

describe('MemeInput component', () => {
  it('renders MemeInput', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<MemeInput header="hi" imgURL="image" footer="footer" handleChange={handleChange}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
