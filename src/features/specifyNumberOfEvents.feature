Feature: SPECIFY NUMBER OF EVENTS

Scenario: When user has not specified a number, 36 is the default number.
Given the user has not made a selection  
When the user views the event list  
Then the event list will be 36 entires in length by default

Scenario: User can change the number of events they want to see.

Given the user wants to change the number of events in the list  
When the user selects a number in the "number of events" field  
Then the number of events displayed in the list will match that number
