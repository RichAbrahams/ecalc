import React from "react";
import { Field, reduxForm } from "redux-form";
import RenderTextInput from "./RenderTextInput";
import SubmitButton from "./SubmitButton";
import CancelButton from './CancelButton';
import styled from 'styled-components';

const validate = (values) => {
  const errors = {}
  if (!values.recipeName) {
    errors.recipeName = 'Please enter a recipe name';
  }
  return errors
}

const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 3rem;
width: 100%;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid rgba(34,36,38,.15);
  padding: 2rem;
`;


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
      <CancelButton {...props} />
      </ButtonWrapper>
    </Form>
  );
};

export default reduxForm({
  form: "saveRecipe", // a unique identifier for this form
  validate
})(SaveForm);
