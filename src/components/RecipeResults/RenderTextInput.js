import React from "react";
import { Label, Input } from "semantic-ui-react";
import FormField from '../RecipeForm/FormPages/sharedComponents/FormField';

const renderInput = props => {
  const err = props.meta.touched && props.meta.error;
   return (
    <FormField className="formField">
      <Input
        value={props.input.value}
        type={props.type}
        labelPosition="right"
        onChange={(param, data) => props.input.onChange(data.value)}
        placeholder={props.placeholder}
        error={err ? true : false}
      />
      {err && (
        <Label basic color="red" pointing>
          {props.meta.error}
        </Label>
      )}
    </FormField>
  );
};

export default renderInput;
