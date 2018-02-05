
import React, { Component } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import SaveForm from "./SaveForm";

export default class SaveModal extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { recipe, saveRecipe } = this.props;
    return (
      <Modal
      closeOnDimmerClick={false}
      closeOnDocumentClick={false}
      trigger={
      <Button
        icon
        labelPosition='right'
        primary
      >Save<Icon name='save' /></Button>
      }>
        <Modal.Header style={{ background: '#2185d0', color: 'white' }}>Recipe Name</Modal.Header>
        <Modal.Content>
          <Modal.Description style={{ display:'flex', justifyContent:'center'}}>
            <SaveForm
              onSubmit={payload =>
                saveRecipe(
                  Object.assign({}, { ...recipe }, { name: payload.recipeName, id: (new Date()).getTime() })
                )
              }
              recipe={recipe}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}
