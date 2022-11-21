import logo from '../assets/logo.svg';
import '../assets/App.css';
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
import { Link, Grid, Image } from '@nextui-org/react';

library.add(fab/*, faCheckSquare, faCoffee*/)

function Header() {
  return(
          <div className="header">
          <Grid.Container gap={2} alignItems="center" justify="left" css={ styles.gridContainer }>

            <Grid>
              <Link href="/">
                <Image src={ logo } css={ styles.logo } />
              </Link>
            </Grid>
            
          </Grid.Container>
          <Grid.Container gap={3} alignItems="center" justify="right" css={ styles.gridContainer }>

            <Grid>
                <Link href="/teams" css={{ color: "#eeeeef" }}>Times</Link>     
            </Grid>
            
            <Grid>
              <Link href="/scheduled" css={{ color: "#eeeeef" }}>
                  Programação
              </Link>
            </Grid>
  
            <Grid>
              <Link href="https://instagram.com/nh_league" target="_blank" css={ styles.icon } >
                <FontAwesomeIcon icon={['fab', 'instagram']} className="header-icon" />
              </Link>
            </Grid>

            <Grid>
              <Link href="https://twitter.com/nh_league" target="_blank" css={ styles.icon } >
                <FontAwesomeIcon icon={['fab', 'twitter']} className="header-icon" />
              </Link>
            </Grid>

            <Grid>
              <Link href="https://www.youtube.com/channel/UCelP6gmT-4meSX7ZDb18nEQ" target="_blank" css={ styles.icon } >
                <FontAwesomeIcon icon={['fab', 'youtube']} className="header-icon" />
              </Link>
            </Grid>

            <Grid>
              <Link href="https://discord.gg/Jt4BQ8Na7F" target="_blank" css={ styles.icon } >
                <FontAwesomeIcon icon={['fab', 'discord']} className="header-icon" />
              </Link>
            </Grid>

          </Grid.Container> 
        </div>
    )
}

export default Header;