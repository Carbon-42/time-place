Feature: SHOW/HIDE AN EVENT’S DETAILS

Scenario: An event element is collapsed by default.
Given user is viewing the event list  
When the user sees an event  
Then the event details will be hidden by default

Scenario: User can expand an event to see its details.
Given the user finds an event they want to know more about  
When the user clicks a button  
Then the event details will be displayed

Scenario: User can collapse an event to hide its details.
Given the user no longer wants to see the event details  
When the user clicks a button  
Then the event details will be hidden