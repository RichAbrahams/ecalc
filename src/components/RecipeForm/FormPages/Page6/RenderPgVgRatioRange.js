import React from "react";
import RangeInput from "../sharedComponents/RangeInput";
import PgVgRatioIndicator from "./PgVgRatioIndicator";
import RangeWrapper from '../sharedComponents/RangeWrapper';
import FormField from '../sharedComponents/FormField';
import formatNumber from '../../../utils/formatNumber';

const renderInput = ({ input, label, min, max, pg, pgVgRatio}) => {
  return (
    <RangeWrapper>
      <PgVgRatioIndicator pgVgRatio={pgVgRatio}/>
        <FormField>
          <RangeInput
            {...input}
            onChange={e => {
              let val = e.target.value;
              if (val < min) {
                val = min;
              }
              input.onChange(formatNumber(val, 10));
            }}
            type="range"
            min={min}
            max={max}
            step="any"
          />
        </FormField>
    </RangeWrapper>
  );
};

export default renderInput;
