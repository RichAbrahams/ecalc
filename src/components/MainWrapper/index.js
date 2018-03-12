import styled from 'styled-components';
import React from 'react'

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e6e9ec;
  flex-grow: 1;
`;

const Wrapper = styled.div`
background: white;
padding: 1em 1em 5em 1em;
display: flex;
flex-grow: 1;
flex-direction: column;
align-items: center;
width: 100%;
@media screen and (min-width: 786px) {
  padding: 1em 3em 5em 3em;
}
@media screen and (min-width: 991px) {
  width: 826px;
};
@media screen and (min-width: 1200px) {
  width: 933px;
};
@media screen and (min-width: 1200px) {
  width: 1200px;
};
`;

export default ({children}) => {
  return (
    <OuterWrapper>
      <Wrapper>
        {children}
      </Wrapper>
    </OuterWrapper>
  )
}
