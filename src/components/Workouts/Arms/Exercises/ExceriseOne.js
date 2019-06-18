import React from "react";

class ExerciseOne extends React.Component {
  render() {
    return (
      <div>
        <h2>Exercise one:</h2>
        <p>Close Grip Bench Press</p>
        <ul>
          <li>Sets: 3</li>
          <li>Reps: 10</li>
          <li>Rest: 0 Seconds</li>
        </ul>
        <p>Superset with:</p>
        <p>Dips</p>
        <ul>
          <li>Sets: 3</li>
          <li>Reps: 10</li>
          <li>Rest: 60 Seconds</li>
        </ul>
      </div>
    );
  }
}

export default ExerciseOne;
