import React from "react";
import { Button } from "semantic-ui-react";

export default ({ setPage }) => {
  return (
    <Button
      labelPosition="left"
      icon="left chevron"
      content="Previous"
      onClick={() => setPage(5)}
      type="button"
      size="large"
    />
  );
};
