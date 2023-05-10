import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  test('render number of events selector', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('select')).toHaveLength(1);
  })

  test('rendered number of events is 32 by default', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('select').prop('value')).toBe(32);
  })
  
  test('change number of events when value is entered', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    const value = { target: { value: 24 }};
    NumberOfEventsWrapper.find('select').simulate('change', value);
    expect(NumberOfEventsWrapper.find('select').prop('value')).toBe(24);
  })

})

