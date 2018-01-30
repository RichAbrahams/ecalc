import React from "react";
import styled from "styled-components";
import { Label } from "semantic-ui-react";

const Wrapper = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: flex-end;
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
