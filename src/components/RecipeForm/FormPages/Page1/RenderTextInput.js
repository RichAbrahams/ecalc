import React from "react";
import { Label, Input } from "semantic-ui-react";
import FormField from '../sharedComponents/FormField';

const renderInput = props => {
  const err = props.meta.touched && props.meta.error;
   return (
    <FormField className="formField">
      <Input
        value={props.input.value}
        type={props.type}
        label={props.sideLabel && { basic: true, content: props.sideLabel }}
        labelPosition="right"
        onChange={(param, data) => props.input.onChange(data.value)}
        placeholder={props.placeholder}
        min={props.min || null}
        error={err ? true : false}
        step={props.step || null}
      />
      {err && (
        <Label basic color="red" pointing size="large">
          {props.meta.error}
        </Label>
      )}
    </FormField>
  );
};

export default renderInput;
