import React from "react";
import { Field, reduxForm } from "redux-form";
import RenderTextInput from "./RenderTextInput";
import NextButton from './NextButton';
import Header from './Header'
import ButtonWrapper from "../sharedComponents/ButtonWrapperRight";
import Form from '../sharedComponents/Form';

const validate = (values) => {
  const errors = {}
  if (!values.batchSize) {
    errors.batchSize = 'Please enter a value';
  }
  return errors
}

const FormPage = props => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={ handleSubmit }>
      <Header />
      <Field
        name="batchSize"
        component={ RenderTextInput }
        label="Quantity Of E-Liquid To Make"
        sideLabel="ml"
        placeHolder="Quantity"
        type="number"
        min="0"
        step="1"
        parse={ value => (value && Number(value)) || ""}
      />
      <ButtonWrapper>
        <NextButton />
      </ButtonWrapper>
    </Form>
  );
};

export default reduxForm({
  form: "wizard", // <------ same form name
  validate,
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  initialValues: {
    pgVgRatio: 50,
    targetStrength: 18,
    baseStrength: 72,
    nicotineBaseLiquid: "PG",
    flavours: [],
  }
})(FormPage);
