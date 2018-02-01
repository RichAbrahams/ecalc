import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
  background: #2185d0;
`;

const Footer = () => (
  <Wrapper>
    <h1>Footer</h1>
  </Wrapper>
);

export default Footer;