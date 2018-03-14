import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: rgba(33, 143, 208, 1);
  color: white;
  @media screen and (min-width: 480px) {
    justify-content: flex-end;
  }
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
