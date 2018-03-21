import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbbd08;
  color: white;
  flex-direction: column;
  padding: 2em 1em 2em 1em;
  text-align: center;
  & > h3 {
    margin-top: 0;
  }
  & > h2 {
    margin-bottom: 0.5em;
  }
  @media screen and (max-width: 480px) {
    & h2 {
      font-size: 1.5rem;
    }
    & h3 {
      font-size: 1.1rem;
    }
  }
`;

export default () => {
  return (
    <Wrapper>
      <h2>Welcome to E-Liquid Wizard</h2>
      <h3>Free e-liquid recipe calculator.</h3>
    </Wrapper>
  )
}
