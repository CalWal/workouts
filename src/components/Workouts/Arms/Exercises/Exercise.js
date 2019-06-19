import React from "react";

const Exercise = props => {
  return (
    <div>
      <h2>Exercise {props.exercise}</h2>
      <p>{props.name}</p>
      <ul>
        <li>Sets: {props.sets}</li>
        <li>Reps: {props.reps}</li>
        <li>Rest: {props.rest}</li>
      </ul>
      <input placeholder="Enter Weight Here" type="text" />
      <button> Submit </button>
    </div>
  );
};

export default Exercise;
