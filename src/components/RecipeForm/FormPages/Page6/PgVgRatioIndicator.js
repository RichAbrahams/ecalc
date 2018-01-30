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
          <Statistic.Value>{strength}%</Statistic.Value>
          <Statistic.Label>PG</Statistic.Label>
        </Statistic>
        <Statistic size="small">
          <Statistic.Value>{100 - strength}%</Statistic.Value>
          <Statistic.Label>VG</Statistic.Label>
        </Statistic>
    </Wrapper>
  );
};
