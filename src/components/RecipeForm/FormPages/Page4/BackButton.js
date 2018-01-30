import React from "react";
import { Button } from "semantic-ui-react";

export default ({ setPage }) => {
  return (
       <Button
       labelPosition="left"
       icon="left chevron"
       content="Previous"
       onClick={() => setPage(3)}
     />
  );
};
