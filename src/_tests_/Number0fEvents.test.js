import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {

  test('render number of events selector and options', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.find('select')).toHaveLength(1);
    expect(NumberOfEventsWrapper.find('#option1').html()).toBe('<option id="option1" value="36">36</option>');
    expect(NumberOfEventsWrapper.find('#option2').html()).toBe('<option id="option2" value="24">24</option>');
    expect(NumberOfEventsWrapper.find('#option3').html()).toBe('<option id="option3" value="12">12</option>');
    expect(NumberOfEventsWrapper.find('#option4').html()).toBe('<option id="option4" value="6">6</option>');
  })


  test('rendered number of events is 36 by default', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    expect(NumberOfEventsWrapper.state('value')).toBe(36);
  })

  test('change number of events when value is entered', () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
    expect(NumberOfEventsWrapper.state('value')).toBe(36);
    NumberOfEventsWrapper.find('select').simulate('change', { target: { value: 24 } });
    expect(NumberOfEventsWrapper.state('value')).toBe(24);
  })

})

