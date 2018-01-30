import React, { Fragment } from "react";
import { Form, Button } from "semantic-ui-react";
import styled from "styled-components";

const buttonUpdate = (e, input, val) => {
  e.preventDefault();
  input.onChange(val);
};

const FormField = styled(Form.Field)`
  display: flex;
  justify-content: center;
  margin: 3rem 0rem 2rem 1rem;
  & > button {
    margin: 0em 1.5rem 0em 1.5rem !important;
  }
`;

const renderInput = ({ input, label, nicotineBaseLiquid }) => {
  return (
    <Fragment>
      <FormField>
        <Button
          size="big"
          onClick={e => buttonUpdate(e, input, "PG")}
          color={nicotineBaseLiquid === "PG" ? "green" : null}
        >
          PG
        </Button>
        <Button
          size="big"
          onClick={e => buttonUpdate(e, input, "VG")}
          color={nicotineBaseLiquid === "VG" ? "green" : null}
        >
          VG
        </Button>
      </FormField>
    </Fragment>
  );
};

export default renderInput;
