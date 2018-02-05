import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import pgMinMax from "./pgMinMax";
import RenderPgVgRatioRange from "./RenderPgVgRatioRange";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";
import { Message } from 'semantic-ui-react'
import formatNumber from '../../../utils/formatNumber';

const info = (pgContent, vgContent) => {
  return (
  <Message info>
      <p>{`Your liquid contains ${pgContent}% PG and ${vgContent}% VG from nicotine base and flavorings.`}</p>
  </Message>
  )
};

const FormPage = props => {
  const {
    handleSubmit,
    targetStrength,
    baseStrength,
    nicotineBaseLiquid,
    batchSize,
    flavours,
    pgVgRatio
  } = props;

  const [pgContent, vgContent] = pgMinMax(
    targetStrength,
    baseStrength,
    nicotineBaseLiquid,
    flavours,
    batchSize
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Header />
      {info(formatNumber(pgContent, 2), formatNumber(vgContent, 2))}
      <Field
        name="pgVgRatio"
        component={RenderPgVgRatioRange}
        label="Target PG/VG Ratio"
        type="range"
        min={pgContent}
        max={(100 - vgContent)}
        pgVgRatio={pgVgRatio}
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
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  onSubmitSuccess: (result, dispatch, props) => {
  }
})(FormPage);

const selector = formValueSelector("wizard");
SelectingFormValuesForm = connect(state => {
  const {
    batchSize,
    targetStrength,
    baseStrength,
    nicotineBaseLiquid,
    flavours,
    pgVgRatio
  } = selector(
    state,
    "batchSize",
    "targetStrength",
    "baseStrength",
    "nicotineBaseLiquid",
    "flavours",
    "pgVgRatio"
  );
  return {
    batchSize,
    targetStrength,
    baseStrength,
    nicotineBaseLiquid,
    flavours,
    pgVgRatio
  };
})(SelectingFormValuesForm);

export default SelectingFormValuesForm;
