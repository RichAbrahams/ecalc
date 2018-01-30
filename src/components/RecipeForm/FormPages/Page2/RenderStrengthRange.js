import React from "react";
import RangeInput from '../sharedComponents/RangeInput';
import StrengthIndicator from './StrengthIndicator';
import RangeWrapper from '../sharedComponents/RangeWrapper';
import FormField from '../sharedComponents/FormField'

const renderInput = ({ input, label, min, max, targetStrength}) => {
  return (
    <RangeWrapper>
      <StrengthIndicator strength={targetStrength} />
        <FormField>
          <RangeInput
            {...input}
            onChange={e => {
              const val = e.target.value || 0;
              input.onChange(val);
            }}
            type="range"
            min={min}
            max={max}
          />
      </FormField>
    </RangeWrapper>
);}

export default renderInput;
