import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  font-size: 1em;
  @media screen and (min-width: 786px) {
  font-size: 1em;
}
`
export default () => {
  return (
    <Wrapper>
      <p>Easy E-Liquid calculations with save and print</p>
    </Wrapper>
  )
}