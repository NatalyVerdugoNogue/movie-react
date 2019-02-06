import React from 'react';
import { Link } from 'react-router-dom';
import filmPick from '../../img/backFilm.jpg';
import userIcon from '../../img/userIcon.png';

import Categories from '../../components/Categories';
import Ranking from '../../components/Ranking';

import './style.css';

import { SideNav, SideNavItem, Icon } from 'react-materialize';

const SideNavCom = () => (

  <SideNav>

    <SideNavItem userView
      user={{
        background: filmPick,
        image: userIcon,
        name: 'John Doe',
        email: 'jdandturk@gmail.com'
      }}
    />

    <SideNavItem divider />

    <SideNavItem href='#!second'>
      <Categories />
    </SideNavItem>

    <SideNavItem divider />

    <SideNavItem >
      <Ranking />
    </SideNavItem>

    <SideNavItem divider />

    <SideNavItem className="side-favorites">
      <Link to={`/favorites`}>
        <p className='fond-fav'>FAVORITAS</p>
      </Link>
    </SideNavItem>

    <SideNavItem divider />

    <SideNavItem className="fotter">
      <Link to={`/`}>
        <Icon className="i-side">home</Icon>
      </Link>
    </SideNavItem>

  </SideNav >
);

export default SideNavCom;