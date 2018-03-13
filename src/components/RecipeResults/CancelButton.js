import React from "react";
import { Button } from "semantic-ui-react";

export default ({ toggleModal }) => {
  return (
    <Button content="Cancel" type="button" onClick={toggleModal} size="large" />
  );
};
