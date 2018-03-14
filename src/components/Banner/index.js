import React, { Component } from "react";
import { connect } from "react-redux";
import SiteName from "./SiteName";
import Nav from "./nav";
import styled from "styled-components";
import * as actions from "../../actions";
import Description from "./Description";
import LogoBig from './LogoBig';
import LogoSmall from './LogoSmall';

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  padding: 1rem 1rem 1rem 1rem;
  background: rgba(33, 143, 208, 1);
  color: white;
  @media screen and (min-width: 480px) {
    grid-row-gap: 3rem;
  }
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1000px) {
    align-items: flex-start;
  }
`;

export class Banner extends Component {
  resetPage(e) {
    this.props.resetRecipeState();
    this.props.setPage(1);
  }

  render() {
    return (
      <Header>
        <Wrapper>
        <SiteName />
        </Wrapper>
        <Nav resetPage={e => this.resetPage(e)} />
      </Header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setPage: payload => dispatch(actions.setPage(payload)),
  resetRecipeState: () => dispatch(actions.resetRecipeState())
});

export default connect(null, mapDispatchToProps)(Banner);
