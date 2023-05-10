import React, { Component } from "react";

class Event extends Component {
  state= { collapsed: true }
  
  toggleDetails = () => {
    this.setState((prevState) => ({
      collapsed: !prevState.collapsed,
    }));
  };
  
  render() {
    const { event } = this.props;
    const { collapsed } =this.state;
    return (
    <div>
      <h2 className="summary">{event.summary}</h2>
      <div className="startTime">{new Date(event.start.dateTime).toString()}</div>
      <div className="location">{event.location}</div>
      {!collapsed && (
      <div className='details'>
        <div className="description">{event.description}</div>
        <a href={event.htmlLink}>See Details in Google Calendar</a>
      </div>
      )}
      <button className='toggle-details' onClick={this.toggleDetails}>Details</button>
    </div>
  )};
}

// console.log(summary);
export default Event;