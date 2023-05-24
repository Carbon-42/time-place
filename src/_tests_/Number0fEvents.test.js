import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  test('render number of events selector', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('select')).toHaveLength(1);
  })

  test('rendered number of events is 36 by default', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.state('value')).toBe(36);
  })
  
  test('change number of events when value is entered', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
    expect(NumberOfEventsWrapper.state('value')).toBe(36);
    NumberOfEventsWrapper.find('#option2').simulate('click');
    expect(NumberOfEventsWrapper.state('value')).toBe(24);
  })

})

