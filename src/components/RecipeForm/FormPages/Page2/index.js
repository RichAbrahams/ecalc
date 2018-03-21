import React from "react";
import RenderStrengthRange from "./RenderStrengthRange";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";

let FormPage2 = props => {
  const { handleSubmit, targetStrength } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Header />
      <Field
        name="targetStrength"
        component={RenderStrengthRange}
        label="Desired Nicotine Strength"
        min="0"
        max="24"
        targetStrength={targetStrength}
        parse={Number}
      />
      <ButtonWrapper>
        <BackButton {...props} />
        <NextButton />
      </ButtonWrapper>
    </Form>
  );
};

FormPage2 = reduxForm({
  form: 'FormPage2',
  destroyOnUnmount: false,
  initialValues: {
    targetStrength: 18
  }
})(FormPage2)

const selector = formValueSelector("FormPage2");

FormPage2 = connect(state => {
  const targetStrength = selector(state, "targetStrength");
  return {
    targetStrength: targetStrength
  };
})(FormPage2);

export default FormPage2
