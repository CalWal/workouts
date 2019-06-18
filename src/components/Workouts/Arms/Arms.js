import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

import ArmsOne from "./Weekly/WeekOne.js";

const TitleStyle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  ::before {
    content: "💪";
  }
`;

const ButtonStyle = styled.button`
  text-align: center;
  color: white;
  background: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration: none;
`;

class Arms extends React.Component {
  render() {
    return (
      <div>
        <TitleStyle>Sun's Out Gun's Out!</TitleStyle>
        <ButtonStyle as="a" href="/arms1">
          Week 1
        </ButtonStyle>
        <ButtonStyle as="a" href="/arms2/">
          Week 2
        </ButtonStyle>
        <ButtonStyle as="a" href="/arms3">
          Week 3
        </ButtonStyle>
        <ButtonStyle as="a" href="/arms4/">
          Week 4
        </ButtonStyle>
      </div>
    );
  }
}

export default Arms;
