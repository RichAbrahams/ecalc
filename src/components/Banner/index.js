import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import SiteName from './SiteName';
import Nav from './nav';
import styled from 'styled-components';
import * as actions from "../../actions";
import { destroy } from 'redux-form';
import Description from './Description';

const OuterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  padding: 1rem 2rem 1rem 2rem;
  background: #2185d0;
  color: white;
  @media screen and (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export class Banner extends Component {

  resetPage(e) {
    this.props.setPage(1);
  };

//   render() {
//     return (
//       <OuterWrapper>
//           <SiteName>E LIQUID WIZARD</SiteName>
//         <Description />
//         <div>
//           <Nav resetPage={(e) => this.resetPage(e)}/>
//         </div>

//       </OuterWrapper>
//     )
//   }
// }


// render() {
//   return (
//     <OuterWrapper>
//       <SiteName>E-LIQUID WIZARD</SiteName>
//       <Description>Easy E-liquid calculations with print and save.</Description>
//       <Nav />
//     </OuterWrapper>
//   )
// }

render() {
  return (
    <OuterWrapper>
      <SiteName>E-LIQUID WIZARD</SiteName>
      <Description>Easy E-liquid calculations with print and save.</Description>
      <Nav resetPage={(e) => this.resetPage(e)}/>
    </OuterWrapper>
  )
}
}

const mapDispatchToProps = dispatch => ({
  setPage: payload => dispatch(actions.setPage(payload)),
  destroyForm: () => dispatch(destroy('wizard'))

});

export default connect(null, mapDispatchToProps)(Banner);
