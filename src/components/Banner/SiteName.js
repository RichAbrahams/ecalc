import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`

  }
`;

const H1 = styled.h1`
  font-size: 36px;
  font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
  color: white;
  line-height: 1.2em;
  margin-bottom: 7px;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1000px) {
    text-align: left;
  }
`;

const H4 = styled.h4`
  font-family: Lato, Helvetica Neue, Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 0;
  text-align: center;
  @media screen and (min-width: 1000px) {
    text-align: left;
  }
`;

export default ({ resetPage }) => {
  return (
    <Wrapper>
      <Link to="/" onClick={resetPage}>
          <H1>E-LIQUID WIZARD</H1>
          <H4>Easy e-liquid calculation with save and print</H4>
      </Link>
    </Wrapper>
  );
};
