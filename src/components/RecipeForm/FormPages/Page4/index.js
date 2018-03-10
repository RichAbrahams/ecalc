import React from "react";
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import RenderNicotineBase from "./RenderNicotineBase";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";

let FormPage4 = props => {
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


FormPage4 = reduxForm({
  form: "FormPage4",
  destroyOnUnmount: false,
  initialValues: {
    nicotineBaseLiquid: "PG"
  }
})(FormPage4);

const selector = formValueSelector("FormPage4");

FormPage4 = connect(state => {
  const nicotineBaseLiquid = selector(state, "nicotineBaseLiquid");
  return {
    nicotineBaseLiquid
  };
})(FormPage4);

export default FormPage4;
