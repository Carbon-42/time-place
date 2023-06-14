import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';  

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppWrapper;
    given('user is viewing the event list', async () => {
      AppWrapper = await mount(<App />)
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user sees an event', () => {

    });

    then('the event details will be hidden by default', () => {
      expect(AppWrapper.find('.details').at(0)).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user finds an event they want to know more about', async () => {
      AppWrapper = await mount(<App />)
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      expect(AppWrapper.find('.details').at(0)).toHaveLength(0);
    });

    when('the user clicks a button', () => {
      AppWrapper.find('.details-btn').at(0).simulate('click');
    });

    then('the event details will be displayed', () => {
      expect(AppWrapper.find('.details').at(0)).toHaveLength(1);
    });
  }); 

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user no longer wants to see the event details', async () => {
      AppWrapper = await mount(<App />)
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      AppWrapper.find('.details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.details').at(0)).toHaveLength(1);
    });

    when('the user clicks a button', () => {
      AppWrapper.find('.details-btn').at(0).simulate('click');
    });

    then('the event details will be hidden', () => {
      expect(AppWrapper.find('.details').at(0)).toHaveLength(0);
    });
  });
});