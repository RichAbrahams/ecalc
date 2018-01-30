import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const Nav = () => (
  <Menu
    icon="labeled"
    attached
    color="blue"
    inverted
    borderless
    position="right"
  >
  <Menu.Menu position='right'>
  <Link to="/">
    <Menu.Item name="New">
      <Icon name="add" />
      New Recipe
    </Menu.Item>
  </Link>
  <Link to="savedrecipes">
    <Menu.Item name="saved">
      <Icon name="save" />
      Saved Recipes
    </Menu.Item>
    </Link>
    </Menu.Menu>
  </Menu>
);

export default Nav;