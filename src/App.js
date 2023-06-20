import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


class App extends Component {
  state= {
    events: [],
    locations: [], 
    eventCount: 36,
    selectedCity: null,
    offlineAlert: '', 
    showWelcomeScreen: undefined
  }

  offlineWarning = () =>{
    if (!navigator.onLine) {
      this.setState({
        offlineAlert: 'You are offline, events may not be up to date.'
      })
    }  
  } 
  
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
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

    getData = () => {
      const {locations, events} = this.state;
      const data = locations.map((location)=>{
        const number = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift()
        return {city, number};
      })
      console.log(data)

      return data;
    };

    
  render() {
    if (this.state.showWelcomeScreen === undefined) 
      return <div className="App" />;
    return (
      <div className="App">
        <h1>A TIME & PLACE APP</h1>
        <OfflineAlert text={this.state.offlineAlert} />
        <CitySearch locations={this.state.locations} eventCount={this.state.eventCount} updateEvents={this.updateEvents} />
        <NumberOfEvents  eventCount={this.state.eventCount} selectedCity={this.state.selectedCity} updateEvents={this.updateEvents} />
        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} height={400} />
          <ResponsiveContainer height={400} >
            <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );  
  }
}

export default App;
