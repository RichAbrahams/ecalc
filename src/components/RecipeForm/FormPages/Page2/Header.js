import { Header, Icon as IconImp, Popup } from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const Icon = styled(IconImp)`
  transform: translate(2px, 0px);
  &:hover {
    color: green;
  }
`;

const Div = styled.div`
  grid-column: 1/13;
  grid-row: 1/2;
  display: flex;
`;

export default () => {
  return (
    <Div>
      <Header>Desired Nicotine Strength</Header>
      <Popup
        trigger={<Icon name="question circle" />}
        content="The desired nicotine strength of your finished e-liquid."
        inverted
      />
    </Div>
  );
};
