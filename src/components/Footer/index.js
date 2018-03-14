import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: #1b1c1d;
  color: white;
  @media screen and (min-width: 800px) {
    justify-content: flex-end;
    flex-direction: row;
  }
  & a {
    color: white;
    text-decoration: none;
  }
  & a:hover {
    color: #1e70bf;
    text-decoration: none;
}


  }
`;

const A = styled(Link)`
  color: white;
  text-decoration: none;
  @media screen and (min-width: 800px) {
    margin-left: 1em;
  }
`;

const Footer = () => (
  <Wrapper>
    <a href="mailto:webmaster@eliquidwizard.com">Contact</a>
    <A to="/terms">Terms & Conditions</A>
  </Wrapper>
);

export default Footer;
