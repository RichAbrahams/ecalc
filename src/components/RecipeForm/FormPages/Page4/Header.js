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
      <Header>Nicotine Base Diluent</Header>
      <Popup
        trigger={<Icon name="question circle" style={{ fontSize: "1rem", transform: "translate(4px, 1px"}}/>}
        content="The the diluent used in your nicotine base liquid.  This should be stated on the bottle label."
        inverted
      />
    </Div>
  );
};
