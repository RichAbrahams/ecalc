import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  color: white;
  background: #2185d0;
`;

const A = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Footer = () => (
  <Wrapper>
    <A to="/terms">Terms & Conditions</A>
  </Wrapper>
);

export default Footer;