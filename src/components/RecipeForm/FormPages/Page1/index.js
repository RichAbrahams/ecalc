import React from "react";
import { Field, reduxForm } from "redux-form";
import RenderTextInput from "./RenderTextInput";
import NextButton from './NextButton';
import Header from './Header'
import ButtonWrapper from "../sharedComponents/ButtonWrapperRight";
import Form from '../sharedComponents/Form';
import { connect } from 'react-redux';

const validate = (values) => {
  const errors = {}
  if (!values.batchSize) {
    errors.batchSize = 'Please enter a value';
  }
  return errors
}

let FormPage1 = props => {
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
        parse={Number}
      />
      <ButtonWrapper>
        <NextButton />
      </ButtonWrapper>
    </Form>
  );
};

FormPage1 = reduxForm({
  form: 'FormPage1',
  validate,
})(FormPage1)

FormPage1 = connect(
  state => ({
    initialValues: {
      batchSize: state.formData.batchSize
    }
  })
)(FormPage1)

export default FormPage1
