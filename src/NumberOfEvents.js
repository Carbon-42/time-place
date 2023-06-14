import React, { Component } from "react";
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state={
    value: 36,
    errorAlert: ''
  }
  

  handleClick = event => {
    const value = event.target.value;
    console.log(value);
    if (value === '-1') {
      this.setState({
        value, 
        errorAlert: 'This is an invalid number of events'
      })
    } else {
      this.setState({value, errorAlert: ''});
      this.props.updateEvents(this.props.selectedCity, value);
    }
  };

  render() {
    return (
      <div className="selector">
        <ErrorAlert text={this.state.errorAlert} />
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
          <option id="option5" value="-1">-1 for exc 4.8 alert testing only</option>          
        </select>
      </div>

    );
  }
}

export default NumberOfEvents;