import React from "react";
import { Button } from "semantic-ui-react";

export default ({ handleClose}) => {
  return (
    <Button
      content="Close"
      primary
      type="button"
      onClick={handleClose}
    />
  );
};
