import React from "react";
import styled from "styled-components";

const SectionStyle = styled.div`
  background: palevioletred;
  color: white;
  padding: 5px;
  ul {
    list-style: none;
  }
  li {
    padding: 5px;
  }
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

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
        <SectionStyle>
          <form>
            <h2>Exercise one:</h2>
            <p>Close Grip Bench Press</p>
            <ul>
              <li>Sets: 3</li>
              <li>Reps: 10</li>
              <li>Rest: 30 Seconds</li>
            </ul>
            <Input
              onChange={this.handleChange}
              placeholder="Enter Weight Here"
              type="text"
            />
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </SectionStyle>
      </div>
    );
  }
}

export default ExerciseOne;
