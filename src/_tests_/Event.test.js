import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  const event = mockData[0]
  beforeAll(() => {
    EventWrapper = shallow(<Event event={event}/>);
  });

  test('render event title', () => {
    expect(EventWrapper.find('.summary').text()).toBe(event.summary);
  });
  
  test('render event start time', () => {
    expect(EventWrapper.find('.startTime').text()).toBe(new Date(event.start.dateTime).toString());
  });

  test('render event location', () => {
    expect(EventWrapper.find('.location').text()).toBe(event.location);
  });

  test('render collapsed state by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
    expect(EventWrapper.find('.details')).toHaveLength(0)
  });

  test('render details of events', () => {
    EventWrapper.setState({
      collapsed: false
    })
    expect(EventWrapper.find('.details')).toHaveLength(1);
    expect(EventWrapper.find('.description')).toHaveLength(1)
    expect(EventWrapper.find('.description').text()).toBe(event.description);
    expect(EventWrapper.find('a')).toHaveLength(1)
    expect(EventWrapper.find('a').prop("href")).toBe(event.htmlLink);
    EventWrapper.setState({ collapsed: true})
  });

  test('render Details button', () => {
    expect(EventWrapper.find('.toggle-details')).toHaveLength(1);
  });

  test('When Details are hidden render Details visible when button is clicked', () => {
    EventWrapper.find('.toggle-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('When Details are visible render Details hidden when button is clicked', () => {
    EventWrapper.setState({
      collapsed: false
    });
    EventWrapper.find('.toggle-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

});