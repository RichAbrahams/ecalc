import React from "react";
import { Button } from "semantic-ui-react";
import RangeInput from '../sharedComponents/RangeInput';
import StrengthIndicator from "./StrengthIndicator";
import styled from "styled-components";
import RangeWrapper from '../sharedComponents/RangeWrapper';
import FormField from '../sharedComponents/FormField'

const buttonUpdate = (e, input, val) => {
  e.preventDefault();
  input.onChange(val);
};

const ButtonGroup = styled(Button.Group)`
  grid-column: 1/13;
  grid-row: 4/5;
  width: 100%;
  max-width: 450px;
  justify-self: center;
`;


const renderInput = ({ input, label, min, max, baseStrength }) => {
  return (
    <RangeWrapper>
      <StrengthIndicator strength={baseStrength} />
      <FormField>
          <RangeInput
            {...input}
            onChange={e => {
              const val = e.target.value;
              input.onChange(val);
            }}
            type="range"
            min={min}
            max={max}
          />
      </FormField>
      <ButtonGroup widths="3" size='mini' >
        <Button onClick={e => buttonUpdate(e, input, 18)}>18mg/mL</Button>
        <Button onClick={e => buttonUpdate(e, input, 50)}>50mg/mL</Button>
        <Button onClick={e => buttonUpdate(e, input, 72)}>72mg/mL</Button>
      </ButtonGroup>

    </RangeWrapper>
  );
};

export default renderInput;
