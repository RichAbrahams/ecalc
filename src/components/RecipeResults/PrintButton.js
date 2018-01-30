import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default ({ newPrintTab }) => {
  return (
    <Button
      icon
      labelPosition='right'
      primary
      type="button"
      onClick={ newPrintTab }
    >Print<Icon name='print' />
    </Button>
  );
};
