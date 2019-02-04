import React from 'react';
// import { Link } from 'react-router-dom';

import { Dropdown, NavItem, Badge, Button, Icon } from 'react-materialize'

const Categories = () => (
  <Dropdown
    trigger={
      <Button>Categorias<Icon right>arrow_drop_down</Icon></Button>
    }>
    <NavItem>
      one
    <Badge>1</Badge>
    </NavItem>

    <NavItem>
      two
    <Badge newIcon>1</Badge>
    </NavItem>

    <NavItem>
      three
  </NavItem>
  </Dropdown>
)
export default Categories