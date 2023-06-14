import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';  

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user has not specified a number, 36 is the default number.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has not made a selection', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();

    });

    when('the user views the event list', () => {

    });

    then('the event list will be 36 entires in length by default', () => {
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });
  });  

  test('User can change the number of events they want to see.', ({ given, when, then }) => {
    let AppWrapper;
    given('the user wants to change the number of events in the list', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user selects a number in the "number of events" field', () => {
      AppWrapper.find('select').simulate('change', { target: { value: 2 } });
      });

    then('the number of events displayed in the list will match that number', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });
});