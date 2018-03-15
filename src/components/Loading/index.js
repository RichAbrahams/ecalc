import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const SpinOuter = styled.div`
  display: inline-block;
  position: relative;
  width: 128px;
  height: 128px;
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 112px;
    height: 112px;
    margin: 8px;
    border: 8px solid #2185d0;
    border-radius: 50%;
    animation: ${rotate360} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #2185d0 transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

export default class Loading extends Component {
  render() {
    return (
      <Wrapper>
        <SpinOuter>
          <div />
          <div />
          <div />
          <div />
        </SpinOuter>
      </Wrapper>
    );
  }
}
