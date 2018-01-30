import React from "react";
import SiteName from './SiteName';
import Nav from './nav';
import styled from 'styled-components';

const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  background: #2185d0;
  color: white;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Banner = () => (
  <OuterWrapper>
    <div>
      <SiteName>E-JUICE WIZARD</SiteName>
    </div>
    <div>
      <Nav />
    </div>

  </OuterWrapper>
);

export default Banner;