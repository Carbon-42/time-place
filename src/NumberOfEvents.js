import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    value: 32
  }

  handleSelect = (event) => {
    const inputValue = event.target.value;
    this.setState({
      value: inputValue,
    });
    
  };

  
  render() {
    return (
      <div className="selector">
        <label for="number">Number of Events:</label>
        <select 
          id="number"
          type="number"
          className="selector"
          value={this.state.value}
          onChange={this.handleSelect}
          >{this.state.value}
          <option id="option1">32</option>
          <option id="option2">24</option>
          <option id="option3">12</option>
          <option id="option4">6</option>
        </select>
      </div>

    );
  }
}

export default NumberOfEvents;