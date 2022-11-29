import logo from '../assets/logo.svg';
//import Teams from './Teams.js'
import * as React from 'react';
import styles from '../properties.json';
//import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import razeImg from './raze.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  /*Routes,*/
} from "react-router-dom";
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// 1. import `NextUIProvider` component
import { Navbar, Image, Link } from "@nextui-org/react";
//import { Layout } from "./Layout.js";

library.add(fab/*, faCheckSquare, faCoffee*/)

function Header() {
  
  return(
      <Navbar variant="sticky" maxWidth="xl">
        <Navbar.Content showIn="xs">
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Content>
        <Navbar.Brand>
          <Link href="/">
            <Image src={ logo } css={ styles.logo } />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="/teams">Times</Navbar.Link>
          <Navbar.Link href="/scheduled">Programação</Navbar.Link>
          <Navbar.Link href="https://instagram.com/nh_league" target="_blank">
            <FontAwesomeIcon icon={['fab', 'instagram']} className="header-icon" />
          </Navbar.Link>
          <Navbar.Link href="https://twitter.com/nh_league" target="_blank">
            <FontAwesomeIcon icon={['fab', 'twitter']} className="header-icon" />
          </Navbar.Link>
          <Navbar.Link href="https://www.youtube.com/channel/UCelP6gmT-4meSX7ZDb18nEQ" target="_blank">
            <FontAwesomeIcon icon={['fab', 'youtube']} className="header-icon" />
          </Navbar.Link>
          <Navbar.Link href="https://discord.gg/Jt4BQ8Na7F" target="_blank">
            <FontAwesomeIcon icon={['fab', 'discord']} className="header-icon" />
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          <Navbar.CollapseItem>
            <Link href="/teams" css={ styles.linkToggle }>Times</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="/scheduled" css={ styles.linkToggle }>Programação</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="https://instagram.com/nh_league" target="_blank" css={ styles.linkToggle }>Instagram</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="https://twitter.com/nh_league" target="_blank" css={ styles.linkToggle }>Twitter</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="https://www.youtube.com/channel/UCelP6gmT-4meSX7ZDb18nEQ" target="_blank" css={ styles.linkToggle }>YouTube</Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem>
            <Link href="https://discord.gg/Jt4BQ8Na7F" target="_blank" css={ styles.linkToggle }>Discord</Link>
          </Navbar.CollapseItem>
      </Navbar.Collapse>
      </Navbar>   
    )
}

export default Header;