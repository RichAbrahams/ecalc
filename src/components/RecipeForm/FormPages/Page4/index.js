import React from "react";
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import RenderNicotineBase from "./RenderNicotineBase";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";

const FormPage = props => {
  const {
    handleSubmit,
    nicotineBaseLiquid,
  } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <Header />
        <Field
          name="nicotineBaseLiquid"
          component={RenderNicotineBase}
          label="Nicotine Solution Base Liquid"
          nicotineBaseLiquid={nicotineBaseLiquid}
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
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(FormPage);

const selector = formValueSelector('wizard') // <-- same as form name
SelectingFormValuesForm = connect(
  state => {
    const nicotineBaseLiquid = selector(state, 'nicotineBaseLiquid')
    return {
      nicotineBaseLiquid
    }
  }
)(SelectingFormValuesForm)

export default SelectingFormValuesForm