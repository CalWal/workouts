import React from "react";
import styled from "styled-components";

const SectionStyle = styled.div`
  background: white;
  color: palevioletred;
  padding: 5px;
  ul {
    list-style: none;
  }
  li {
    padding: 5px;
  }
`;

const ExerciseTwo = () => {
  return (
    <div>
      <SectionStyle>
        <h2>Exercise Two:</h2>
        <p>Skull Crushers</p>
        <ul>
          <li>Sets: 4</li>
          <li>Reps: 10</li>
          <li>Rest: 0 Seconds</li>
        </ul>
        <p>Superset with:</p>
        <p>Rope Pushdown</p>
        <ul>
          <li>Sets: 4</li>
          <li>Reps: 10</li>
          <li>Rest: 60 Seconds</li>
        </ul>
      </SectionStyle>
    </div>
  );
};

export default ExerciseTwo;
