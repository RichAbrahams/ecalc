import React from "react";
import styled from "styled-components";
import { Header, Button } from "semantic-ui-react";

const Wrapper = styled.div`
  margin-top: 1em;
`;

const ButtonWrapper = styled.div`
  width: 100%;
`;

const buttonUpdate = (e, input, val) => {
  e.preventDefault();
  input.onChange(val);
};

const renderInput = ({ input, label, base }) => {
  return (
    <Wrapper>
      <Header size="small" floated="left" style={{ width: '100%' }}>{label}</Header>
      <ButtonWrapper>
        <Button
          type='button'
          onClick={e => buttonUpdate(e, input, "PG")}
          color={base === "PG" ? "green" : null}
          style={{ marginRight: '1rem' }}
        >
          PG
        </Button>
        <Button
          type='button'
          onClick={e => buttonUpdate(e, input, "VG")}
          color={base === "VG" ? "green" : null}
        >
          VG
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default renderInput;
