import React, { Fragment } from "react";
import styled from "styled-components";
import { Field } from "redux-form";
import RenderFlavourName from "./RenderFlavourName";
import RenderFlavourPercent from "./RenderFlavourPercent";
import RenderFlavourBase from "./RenderFlavourBase";
import AddFlavour from "./AddFlavour";

const FlavourList = styled.div`

`;

const FlavourItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const renderInput = ({ fields, flavours, remaining, meta: { error, submitFailed } }) => {
  return (
    <Fragment>
      <FlavourList>
        {fields.map((flavour, index) => {
          return (
            <FlavourItem key={index} className="flavour-item">
              <Field
                name={`${flavour}.name`}
                type="text"
                component={RenderFlavourName}
                label="Flavor Name"
                placeholder="name"
                remove ={() => fields.remove(index)}
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
              <hr />
            </FlavourItem>
          );
        })}
      </FlavourList>
      <AddFlavour add={() => fields.push({ base: "PG" })} />
    </Fragment>
  );
};

// const renderInput = ({ fields, flavours, remaining, meta: { error, submitFailed } }) => {
//   return (
//     <Fragment>
//       <FlavourList>
//         {fields.map((flavour, index) => {
//           return (
//             <FlavourItem key={index} className="flavour-item">
//               <RemoveFlavour remove={() => fields.remove(index)} />
//               <Field
//                 name={`${flavour}.name`}
//                 type="text"
//                 component={RenderFlavourName}
//                 label="Flavor Name"
//                 placeholder="name"
//               />
//               <Field
//                 name={`${flavour}.percentage`}
//                 type="number"
//                 component={RenderFlavourPercent}
//                 label="Percent"
//                 remaining={remaining}
//                 parse={ value => (value && Number(value)) || ""}
//                 />
//               <Field
//                 name={`${flavour}.base`}
//                 component={RenderFlavourBase}
//                 label="Base Liquid"
//                 base={flavours[index].base}
//               />
//             </FlavourItem>
//           );
//         })}
//       </FlavourList>
//       <AddFlavour add={() => fields.push({ base: "PG" })} />
//     </Fragment>
//   );
// };

export default renderInput;
