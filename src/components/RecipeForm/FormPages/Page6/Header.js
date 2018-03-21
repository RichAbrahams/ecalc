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
  grid-column: 1/13;
  grid-row: 1/2;
  display: flex;
`;

export default () => {
  return (
    <Div>
      <Header>Desired Final PG/VG Ratio</Header>
      <Popup
        trigger={<Icon name="question circle" />}
        content="The desired final PG/VG ration of your e-liquid.  The min/max values are capped using the nicotine base and flavoring information provided on previous pages."
        inverted
      />
    </Div>
  );
};

