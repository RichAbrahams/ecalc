import React from "react";
import { connect } from "react-redux";
import { FieldArray, reduxForm, formValueSelector } from "redux-form";
import NextButton from "./NextButton";
import BackButton from "./BackButton";
import Header from "./Header";
import RenderFlavours from "./RenderFlavours";
import baseToAdd from "../../../utils/calcBaseToAdd";
import ButtonWrapper from "../sharedComponents/ButtonWrapper";
import Form from "../sharedComponents/Form";
import formatNumber from "../../../utils/formatNumber";
import { Message } from "semantic-ui-react";

const validate = (values, props) => {
  const { baseStrength, targetStrength, batchSize } = props;
  const errors = {};
  if (values.flavours) {
    const flavoursArrayErrors = [];
    values.flavours.forEach((flavour, flavourIndex) => {
      const flavourErrors = {};
      if (!flavour || !flavour.name) {
        flavourErrors.name = "Please enter a flavor name";
        flavoursArrayErrors[flavourIndex] = flavourErrors;
      }
      if (!flavour || !flavour.percentage) {
        flavourErrors.percentage = "Please enter flavor percentage";
        flavoursArrayErrors[flavourIndex] = flavourErrors;
      }
      const { remaining } = checkRemaining(
        values.flavours,
        baseStrength,
        targetStrength,
        batchSize
      );
      if (remaining < 0) {
        flavourErrors.percentage =
          "Total percentage of flavorings is too high.";
        flavoursArrayErrors[flavourIndex] = flavourErrors;
      }
    });
    if (flavoursArrayErrors.length) {
      errors.flavours = flavoursArrayErrors;
    }
  }
  return errors;
};

const checkRemaining = (
  flavours = [],
  baseStrength,
  targetStrength,
  batchSize
) => {
  const baseAdded = baseToAdd(baseStrength, targetStrength, batchSize);
  const basePercent = 100 / batchSize * baseAdded;
  const flavoursAdded = flavours.reduce((total, flavour) => {
    return (total += flavour.percentage || 0);
  }, 0);
  return {
    basePercent: formatNumber(basePercent, 0),
    flavoursAdded: formatNumber(flavoursAdded, 0),
    remaining: formatNumber(100 - (basePercent + flavoursAdded), 0)
  };
};

const info = (basePercent, flavoursAdded, remaining) => {
  if (remaining >= 0) {
    return (
      <Message info>
        <p
        >{`${basePercent}% of your liquid is nicotine base.  You can add up to ${100 -
          basePercent}% of flavoring.`}</p>
      </Message>
    );
  } else {
    return (
      <Message warning>
        <p
        >{`The flavoring and nicotine ratios entered do not produce a valid recipe.  Please reduce the percentage of flavorings or the nicotine base content.`}</p>
      </Message>
    );
  }
};

let FormPage5 = props => {
  const {
    handleSubmit,
    flavours,
    baseStrength,
    targetStrength,
    batchSize
  } = props;

  const { basePercent, flavoursAdded, remaining } = checkRemaining(
    flavours,
    baseStrength,
    targetStrength,
    batchSize
  );
  return (
    <Form onSubmit={handleSubmit}>
      <Header />
      {info(basePercent, flavoursAdded, remaining)}
      <FieldArray
        name="flavours"
        component={RenderFlavours}
        flavours={flavours}
        remaining={remaining}
      />
      <ButtonWrapper>
        <BackButton {...props} />
        <NextButton />
      </ButtonWrapper>
    </Form>
  );
};

FormPage5 = reduxForm({
  form: "FormPage5",
  destroyOnUnmount: false,
  validate,
  initialValues: {
    flavours: []
  }
})(FormPage5);

const selector = formValueSelector("FormPage5");

FormPage5 = connect(state => {
  const flavours = selector(state, "flavours");
  return {
    flavours
  };
})(FormPage5);

export default FormPage5;
