import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { getEvents, extractLocations } from './api';
import NumberOfEvents from './NumberOfEvents';


class App extends Component {
  state= {
    events: [],
    locations: [], 
    eventCount: 36,
    selectedCity: null
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        const locationEvents = (events)
        const shownEvents = locationEvents.slice(0, this.state.eventCount)
        this.setState({ 
          events: shownEvents,
          locations: extractLocations(events)});
      }

    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }
  
    updateEvents = (location, eventCount) => {
      // console.log(location, eventCount)
      getEvents().then((events) => {
        if (!location || location === 'all') {
          // const locationEvents = 
          // events.filter((event) => event.location === location);
          const shownEvents = events.slice(0, eventCount);
          this.setState({
            events: shownEvents,
            eventCount: eventCount
          });
          // console.log('location', location)
          // console.log('locationEvents', locationEvents.length)
          // console.log('UE events', events.length)
          // console.log('UE eventcount', eventCount)
        } else {
        const locationEvents = events.filter((event) => event.location === location);
        const shownEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: shownEvents,
          selectedCity: location,
          eventCount: eventCount
        })
        // console.log('location', location)
        // console.log('locationEvents', locationEvents.length)
        // console.log('UE events', shownEvents.length)
        // console.log('UE eventcount', eventCount)
      }
    });
    }

  render() {
    // console.log('eventCount', this.state.eventCount, 'events', this.state.events.length)
    return (
      <div className="App">
      <CitySearch locations={this.state.locations} eventCount={this.state.eventCount} updateEvents={this.updateEvents} />
      <NumberOfEvents  eventCount={this.state.eventCount} selectedCity={this.state.selectedCity} updateEvents={this.updateEvents} />
      <EventList events={this.state.events}/>
      </div>
    );  
  }
}

export default App;
