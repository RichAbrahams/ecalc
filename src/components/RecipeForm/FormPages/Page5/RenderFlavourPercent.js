import React from "react";
import { Header } from "semantic-ui-react";
import { Input as InputImp, Label } from "semantic-ui-react";
import styled from "styled-components";

const Input = styled(InputImp)`
  width: 100%;
`;

const Wrapper = styled.div`
  grid-column: 1/2;
  grid-row: 2/3;
`;

const renderInput = ({ input, label, type, remaining, meta: { touched, error } }) => {
  const err = touched && error;
  return (
    <Wrapper>
      <Header size="small" floated="left">
        {label}
      </Header>
      <Input
        {...input}
        type={type}
        label={{ basic: true, content: "%" }}
        labelPosition="right"
        error={err ? true : false}
      />
      {err && (
        <Label basic color="red" pointing>
          {error}
        </Label>
      )}
    </Wrapper>
  );
};

export default renderInput;
