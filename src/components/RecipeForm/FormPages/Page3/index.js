import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import RenderBaseStrength from "./RenderBaseStrength";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";

let FormPage3 = props => {
  const { handleSubmit, baseStrength, targetStrength } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Header />
      <Field
        name="baseStrength"
        component={RenderBaseStrength}
        label="Nicotine Solution Strength"
        sideLabel="mg/mL"
        placeHolder="Nicotine Solution Strength"
        type="number"
        min={targetStrength}
        max="100"
        step="1"
        baseStrength={baseStrength}
        parse={Number}
      />
      <ButtonWrapper style={{ marginTop: "5rem" }}>
        <BackButton {...props} />
        <NextButton />
      </ButtonWrapper>
    </Form>
  );
};

FormPage3 = reduxForm({
  form: "FormPage3",
  destroyOnUnmount: false,
  initialValues: {
    baseStrength: 72
  }
})(FormPage3);

const selector = formValueSelector("FormPage3");

FormPage3 = connect(state => {
  const baseStrength = selector(state, "baseStrength");
  return {
    baseStrength: baseStrength
  };
})(FormPage3);

export default FormPage3;
