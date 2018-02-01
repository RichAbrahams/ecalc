import React from "react";
import { Field, reduxForm } from "redux-form";
import RenderTextInput from "./RenderTextInput";
import ButtonWrapper from "../RecipeForm/FormPages/sharedComponents/ButtonWrapper";
import SubmitButton from "./SubmitButton";
import Form from '../RecipeForm/FormPages/sharedComponents/Form';

const validate = (values) => {
  const errors = {}
  if (!values.recipeName) {
    errors.recipeName = 'Please enter a recipe name';
  }
  return errors
}

const SaveForm = props => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={ handleSubmit }>
      <Field
        name="recipeName"
        component={ RenderTextInput }
        label="Recipe Name"
        type="text"
        placeholder="Recipe Name"
      />
      <ButtonWrapper>
      <SubmitButton {...props} />
      </ButtonWrapper>
    </Form>
  );
};

export default reduxForm({
  form: "saveRecipe", // a unique identifier for this form
  validate
})(SaveForm);
