import React from 'react'
import { Progress } from 'semantic-ui-react'

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 1rem 0rem 2rem 0rem;
  & > div {
    width: 100%;
  }
`;

const ProgressExampleStandard = ({ currentPage }) => (
  <Wrapper>
    <Progress percent={(100 / 5) * (currentPage -1)} size="large" color='olive'/>
  </Wrapper>
)

export default ProgressExampleStandard
