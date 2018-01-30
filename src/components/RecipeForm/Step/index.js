import React from 'react'
import { Step } from 'semantic-ui-react'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 5em;
  display: none;
  @media screen and (min-width: 786px) {
    display: initial;
  }
`;

const StepExampleGroup = ({ currentPage }) => (
  <Wrapper>
    <Step.Group size='mini' ordered fluid>
      <Step active={ currentPage === 1 } completed={currentPage > 1}>
        <Step.Content >
          <Step.Description>Quantity</Step.Description>
        </Step.Content>
      </Step>
      <Step active={ currentPage === 2 } completed={currentPage > 2}>
        <Step.Content>
          <Step.Description>Strength</Step.Description>
        </Step.Content>
      </Step>
      <Step active={ currentPage === 3 } completed={currentPage > 3}>
        <Step.Content>
          <Step.Description>Base</Step.Description>
        </Step.Content>
      </Step>
      <Step active={ currentPage === 4 } completed={currentPage > 4}>
        <Step.Content>
          <Step.Description>Base Diluent</Step.Description>
        </Step.Content>
      </Step>
      <Step active={ currentPage === 5 } completed={currentPage > 5}>
        <Step.Content>
          <Step.Description>Flavorings</Step.Description>
        </Step.Content>
      </Step>
      <Step active={ currentPage === 6 } completed={currentPage > 6}>
        <Step.Content>
          <Step.Description>PG/VG Ratio</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  </Wrapper>
)

export default StepExampleGroup
