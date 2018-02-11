import React from 'react'
import { Button, Icon } from 'semantic-ui-react';

export default ({ toggleModal }) => {
  return (
    <Button
      icon
      labelPosition='right'
      primary
      onClick={ toggleModal }
    >Save<Icon name='save' /></Button>
  )
}
