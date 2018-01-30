import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import RenderBaseStrength from "./RenderBaseStrength";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";

const FormPage = props => {
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
      <ButtonWrapper style={{ marginTop: "5rem"}}>
        <BackButton {...props} />
        <NextButton />
      </ButtonWrapper>
    </Form>
  );
};

let SelectingFormValuesForm = reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FormPage);

const selector = formValueSelector("wizard"); // <-- same as form name
SelectingFormValuesForm = connect(state => {
  const { baseStrength, targetStrength } = selector(
    state,
    "baseStrength",
    "targetStrength"
  );
  return {
    baseStrength,
    targetStrength
  };
})(SelectingFormValuesForm);

export default SelectingFormValuesForm;
