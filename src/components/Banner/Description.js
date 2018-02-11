import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export default () => {
  return (
    <Wrapper>
      <p>Easy E-liquid calculations with save and print.</p>
    </Wrapper>
  )
}