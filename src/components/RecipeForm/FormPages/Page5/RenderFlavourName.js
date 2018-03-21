import React from "react";
import { Header } from "semantic-ui-react";
import { Input as InputImp, Label } from "semantic-ui-react";
import styled from "styled-components";
import RemoveFlavour from "./RemoveFlavour";

const Input = styled(InputImp)`
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

const HeaderWrapper = styled.div`
  display: flex;
`

const renderInput = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error },
  remove
}) => {
  const err = touched && error;
  return (
    <Wrapper>
      <HeaderWrapper>
        <Header size="small" floated="left" style={{ flex: 1 }}>
          {label}
        </Header>
        <div>
          <RemoveFlavour remove={remove}/>
        </div>
      </HeaderWrapper>
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
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
