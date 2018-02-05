import React from "react";
import styled from "styled-components";
import { Statistic } from "semantic-ui-react";
import formatNumber from '../../../utils/formatNumber';

const Wrapper = styled.div`
  grid-column: 1/13;
  grid-row: 2/3;
  justify-self: center;
  margin-top: 2rem;
`;

export default ({ pgVgRatio }) => {
  const pg = formatNumber(pgVgRatio, 0);
  const vg = formatNumber(100 - pgVgRatio, 0);
  console.log(pgVgRatio, pg, vg)
  return (
      <Wrapper>
        <Statistic size="small">
          <Statistic.Value>{pg}%</Statistic.Value>
          <Statistic.Label>PG</Statistic.Label>
        </Statistic>
        <Statistic size="small">
          <Statistic.Value>{vg}%</Statistic.Value>
          <Statistic.Label>VG</Statistic.Label>
        </Statistic>
    </Wrapper>
  );
};
