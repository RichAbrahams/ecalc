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

let FormPage6 = props => {
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
    <Form onSubmit={handleSubmit} >
      <Header />
      {info(formatNumber(pgContent, 2), formatNumber(vgContent, 2))}
      <Field
        name="pgVgRatio"
        component={RenderPgVgRatioRange}
        label="Target PG/VG Ratio"
        type="range"
        min={Math.round(pgContent)}
        max={(Math.round(100 - vgContent))}
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

FormPage6 = reduxForm({
  form: "FormPage6",
  destroyOnUnmount: false,
})(FormPage6);

const selector = formValueSelector("FormPage6");

FormPage6 = connect((state, ownProps) => {
  const pgVgRatio = selector(state, "pgVgRatio");
  return {
    pgVgRatio
  };
})(FormPage6);

export default FormPage6;