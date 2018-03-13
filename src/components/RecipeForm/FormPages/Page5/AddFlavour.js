import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  justify-self: center;
  margin: 2em 0em 2em 0em !important;
  @media screen and (min-width: 480px) {
    margin: 2em 0em 0em 0em !important;

}
`;


const StyButton = styled(Button)`
  width: 100%;
  margin-bottom: 2em;
  @media screen and (min-width: 480px) {
   width: auto;
}
`;

export default ({ add }) => {
  return (
    <Wrapper>
      <StyButton
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
