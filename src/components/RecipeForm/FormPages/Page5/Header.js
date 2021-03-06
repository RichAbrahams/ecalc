import { Header, Icon as IconImp, Popup } from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const Icon = styled(IconImp)`
  transform: translate(2px, -1px);
  font-size: 1rem;
  &:hover {
    color: green;
  }
`;

const Div = styled.div`
  display: flex;
`;

export default () => {
  return (
    <Div>
      <Header>Flavorings</Header>
      <Popup
        trigger={<Icon name="question circle" />}
        content="Flavorings that you wish to add to your e-liquid.  For each flavoring please add a flavor name, the percentage required and the flavors base."
        inverted
      />
    </Div>
  );
};
