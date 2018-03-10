import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default class Loading extends Component {
  render() {
    return (
      <Wrapper>
        <Loader active size="massive" style={{ transform: "matrix(2,0,0,2,0,-64" }} />
      </Wrapper>
    );
  }
}
