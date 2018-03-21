import { Header, Icon as IconImp, Popup } from "semantic-ui-react";
import React from "react";
import styled from "styled-components";

const Icon = styled(IconImp)`
  transform: translate(2px, -5px);
  &:hover {
    color: green;
  }
`;

const Div = styled.div`
  grid-column: 1/13;
  grid-row: 1/2;
  display: flex;
  margin-bottom: 3rem;
`;

export default () => {
  return (
    <Div>
      <Header>Quantity Of E-Liquid To Make
      <Popup
        trigger={<Icon name="question circle" style={{ fontSize: "1rem", transform: "translate(6px, -7px"}}/>}
        content="The total quantity of e-liquid that you wish to make expressed in millilitres."
        inverted
      />
      </Header>
    </Div>
  );
};
