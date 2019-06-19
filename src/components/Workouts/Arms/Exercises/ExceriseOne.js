import React from "react";

class ExerciseOne extends React.Component {
  state = {
    CloseGripBenchPress: ""
  };

  handleChange = event => {
    event.preventDefault();
    const { name, value, type } = event.target.value;
    this.setState({
      CloseGripBenchPress: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      CloseGripBenchPress: event.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <h2>Exercise one:</h2>
          <p>Close Grip Bench Press</p>
          <ul>
            <li>Sets: 3</li>
            <li>Reps: 10</li>
            <li>Rest: 30 Seconds</li>
          </ul>
          <input
            onChange={this.handleChange}
            placeholder="Enter Weight Here"
            type="text"
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ExerciseOne;
