import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  @media screen and (min-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  @media screen and (min-width: 1000px) {
    grid-column-start: 3;
  }
`
const Inner = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 1rem 0rem 1rem;
`;

const Span = styled.span`
  margin: 0;
`
const Nav = ({ resetPage }) => (
  <Wrapper>
    <Link to="/" onClick={ resetPage }>
      <Inner>
        <Icon name="add" size="large" />
        <Span>
          New Recipe
        </Span>
      </Inner>
    </Link>
    <Link to="savedrecipes">
      <Inner>
        <Icon name="save" size="large" />
        <Span>
        Saved Recipes
        </Span>
      </Inner>
    </Link>
  </Wrapper>

);


export default Nav;