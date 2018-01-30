import React from "react";
import RenderStrengthRange from "./RenderStrengthRange";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";

const FormPage = props => {
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

let SelectingFormValuesForm = reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true // <------ unregister fields on unmount
})(FormPage);

// Decorate with connect to read form wizard
const selector = formValueSelector("wizard"); // <-- same as form name
SelectingFormValuesForm = connect(state => {
  const targetStrength = selector(state, "targetStrength");
  return {
    targetStrength
  };
})(SelectingFormValuesForm);

export default SelectingFormValuesForm;
