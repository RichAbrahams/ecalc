import React from "react";
import RangeInput from "../sharedComponents/RangeInput";
import PgVgRatioIndicator from "./PgVgRatioIndicator";
import RangeWrapper from '../sharedComponents/RangeWrapper';
import FormField from '../sharedComponents/FormField';

const renderInput = ({ input, label, min, max, pgVgRatio }) => {
  return (
    <RangeWrapper>
      <PgVgRatioIndicator strength={pgVgRatio} />
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
    </RangeWrapper>
  );
};

export default renderInput;
