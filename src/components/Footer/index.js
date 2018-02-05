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

const A = styled.a`
  color: white;
  text-decoration: none;
`;

const Footer = () => (
  <Wrapper>
    <Link to="/terms"><A>Terms & Conditions</A></Link>
  </Wrapper>
);

export default Footer;