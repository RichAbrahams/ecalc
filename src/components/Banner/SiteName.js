

import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`

`

const H1 = styled.h1`
  font-size: 48px;
  font-family: 'Oswald', sans-serif;
  color: white;
  line-height: 1.2em;
  text-align: center;
`;

export default () => {
  return (
    <Wrapper>
      <H1>
        E-LIQUID WIZARD
      </H1>
    </Wrapper>
  )
}
