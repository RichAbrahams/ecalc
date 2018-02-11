import React from 'react'
import styled from 'styled-components';
import SaveForm from './SaveForm';
import { Message } from 'semantic-ui-react'

const Dimmer = styled.div`
  width: 100vw;
  height: 100vh;
  background: black;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center
`;

const Card = styled.div`
  background: white;
  opacity: 1;
  width: 700px;
  z-index: 10;
  border-radius: 3px;
  `;

const Header = styled.div`
  width: 100%;
  padding: 1em;
  background:  #2185d0;
  color: white;
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
export default (props) => {
  const { recipe, saveRecipe } = props;
  return (
    <Dimmer>
      <Card>
        <Header>
          <h1>Recipe Name</h1>
        </Header>
        <Body>
          <Message warning>
            <p>Recipes are saved in your device browser storage and will be deleted if your browser history is cleaned.</p>
          </Message>
          <SaveForm
            onSubmit={ payload =>
              saveRecipe(
                Object.assign({}, { ...recipe }, { name: payload.recipeName, id: (new Date()).getTime() })
              )
            }
            {...props}
          />
        </Body>
      </Card>
    </Dimmer>
  )
}
