import React from "react";
import { Button } from "semantic-ui-react";

export default ({newRecipe}) => {
  return (
    <Button
      content="New Recipe"
      primary
      type="button"
      onClick={newRecipe}
      size="large"
    />
  );
};
