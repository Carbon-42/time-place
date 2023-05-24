import React, { Component } from "react";

class NumberOfEvents extends Component {
  state={
    value: 36
  }
  
  handleClick = (event)=> {
    this.setState({
      value: event
    });
    this.props.updateEvents(this.props.selectedCity, event);
  };

  render() {
    return (
      <div className="selector">
        <label className="number">Number of Events: </label>
        <select 
          id="number"
          type="number"
          className="selector"
          >{this.state.value}
          <option id="option1" onClick={() => this.handleClick(36)}>36</option>
          <option id="option2" onClick={() => this.handleClick(24)}>24</option>
          <option id="option3" onClick={() => this.handleClick(12)}>12</option>
          <option id="option4" onClick={() => this.handleClick(6)}>6</option>
        </select>
      </div>

    );
  }
}

export default NumberOfEvents;