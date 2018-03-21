import React from "react";
import styled from "styled-components";
import { Statistic } from "semantic-ui-react";

const Wrapper = styled.div`
  grid-column: 1/13;
  grid-row: 2/3;
  justify-self: center;
  margin-top: 2rem;
`;

export default ({ strength }) => {
  return (
      <Wrapper>
        <Statistic size="small">
          <Statistic.Value>{strength}</Statistic.Value>
          <Statistic.Label>mg/mL</Statistic.Label>
        </Statistic>
      </Wrapper>
  );
};
