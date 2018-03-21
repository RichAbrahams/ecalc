import React from "react";
import styled from "styled-components";
import { Label } from "semantic-ui-react";

const Wrapper = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

export default ({ remove }) => {
  return (
    <Wrapper>
        <Label circular color="orange" content="X" onClick={remove}/>
    </Wrapper>
  );
};
