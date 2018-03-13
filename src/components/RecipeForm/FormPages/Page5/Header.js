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
  display: flex;
`;

export default () => {
  return (
    <Div>
      <Header>Flavorings</Header>
      <Popup
        trigger={<Icon name="question circle" style={{ fontSize: "1rem", transform: "translate(4px, 1px"}}/>}
        content="Flavorings that you wish to add to your e-liquid.  For each flavoring please add a flavor name, the percentage required and whether the flavoring is PG or VG based."
        inverted
      />
    </Div>
  );
};
