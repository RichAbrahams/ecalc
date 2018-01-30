// import React from 'react'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import { Field, reduxForm } from 'redux-form'
// import SaveForm from './SaveForm';

// const SaveModal = ({saveRecipe, recipe, saved}) => (
//   <Modal trigger={<Button>Save</Button>}>
//     <Modal.Header>Save Recipe</Modal.Header>
//     <Modal.Content>
//       <Modal.Description>
//         <SaveForm saved={saved} onSubmit={(payload) => saveRecipe(Object.assign({}, {...recipe}, { name: payload.recipeName }))} recipe={recipe}/>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )

// export default SaveModal;

import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import SaveForm from "./SaveForm";

export default class SaveModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { saved, recipe, saveRecipe } = this.props;
    return (
      <Modal trigger={
      <Button
        icon
        labelPosition='right'
        primary
      >Save<Icon name='save' /></Button>
      }>
        <Modal.Header style={{ background: '#2185d0', color: 'white' }}>Recipe Name</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <SaveForm
              saved={saved}
              onSubmit={payload =>
                saveRecipe(
                  Object.assign({}, { ...recipe }, { name: payload.recipeName, id: (new Date()).getTime() })
                )
              }
              recipe={recipe}
              closeOnDimmerClick={false}
              closeOnDocumentClick={false}
              handleClose={this.handleClose}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
