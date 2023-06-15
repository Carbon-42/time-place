import React, { Component } from "react";

class NumberOfEvents extends Component {
  state={
    value: 36
  }
  

  handleClick = event => {
    const value = event.target.value;
    this.setState({value});
    this.props.updateEvents(this.props.selectedCity, value);
  };

  render() {
    return (
      <div className="selector">
        <label className="number">Number of Events: </label>
        <select 
          id="number"
          className="select"
          value={this.state.value}
          onChange={this.handleClick}
          >{this.state.value}
          <option id="option1" value="36">36</option>
          <option id="option2" value="24">24</option>
          <option id="option3" value="12">12</option>
          <option id="option4" value="6">6</option>
        </select>
      </div>

    );
  }
}

export default NumberOfEvents;