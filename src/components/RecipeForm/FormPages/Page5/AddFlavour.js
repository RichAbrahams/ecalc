import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`

  justify-self: center;
  margin: 2em 0em 0em 0em !important;
`;

export default ({ add }) => {
  return (
    <Wrapper>
      <Button
        color='olive'
        labelPosition="left"
        icon="plus"
        content="Add Flavor"
        onClick={ add }
        type="button"
      />
    </Wrapper>
  );
};
