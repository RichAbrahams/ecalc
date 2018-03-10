import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  background: rgba(33,143,208,1);
  color: white;
`
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