import React from "react";
import { Button } from "semantic-ui-react";

const handleBackButton = (setPage, targetStrength) => {
  if (targetStrength === 0) {
    setPage(2);
  } else {
    setPage(4);
  }
};

export default ({ setPage, targetStrength }) => {
  return (
       <Button
       labelPosition="left"
       icon="left chevron"
       content="Previous"
       onClick={() => handleBackButton(setPage, targetStrength)}
     />
  );
};
