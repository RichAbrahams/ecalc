import React, { Fragment } from "react";
import styled from "styled-components";
import { Field } from "redux-form";
import RenderFlavourName from "./RenderFlavourName";
import RenderFlavourPercent from "./RenderFlavourPercent";
import RenderFlavourBase from "./RenderFlavourBase";
import AddFlavour from "./AddFlavour";
import RemoveFlavour from "./RemoveFlavour";

const FlavourList = styled.div`
  grid-column: 1/13;
  grid-row: 2/3;
`;

const FlavourItem = styled.div`
  display: grid;
  grid-gap: 1.5em;
  width: 100%;
  background: rgba(33, 133, 208, 0.08);
  grid-template-rows: repeat(4, max-content);
  grid-template-columns: repeat(2, auto);
  margin: 1em 0em 0em 0em;
  padding: 1em;
  border-radius: 5px;
`;

const renderInput = ({ fields, flavours, remaining, meta: { error, submitFailed } }) => {
  return (
    <Fragment>
      <FlavourList>
        {fields.map((flavour, index) => {
          return (
            <FlavourItem key={index} className="flavour-item">
              <RemoveFlavour remove={() => fields.remove(index)} />
              <Field
                name={`${flavour}.name`}
                type="text"
                component={RenderFlavourName}
                label="Flavor Name"
                placeholder="name"
              />
              <Field
                name={`${flavour}.percentage`}
                type="number"
                component={RenderFlavourPercent}
                label="Percent"
                remaining={remaining}
                parse={ value => (value && Number(value)) || ""}
                />
              <Field
                name={`${flavour}.base`}
                component={RenderFlavourBase}
                label="Base Liquid"
                base={flavours[index].base}
              />
            </FlavourItem>
          );
        })}
      </FlavourList>
      <AddFlavour add={() => fields.push({ base: "PG" })} />
    </Fragment>
  );
};

export default renderInput;
