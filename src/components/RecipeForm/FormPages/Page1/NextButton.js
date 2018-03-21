import React from "react";
import { Button } from "semantic-ui-react";
import styled from 'styled-components';

const StyButton = styled(Button)`
  width: 100%;
  @media screen and (min-width: 480px) {
   width: auto;
}
`;

export default () => {
  return (
    <StyButton
      labelPosition="right"
      icon="right chevron"
      content="Next"
      primary
      type="submit"
      size='large'
    />
  );
};
