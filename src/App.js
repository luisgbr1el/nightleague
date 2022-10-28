import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import styles from './properties.json';
//import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import razeImg from './raze.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// 1. import `NextUIProvider` component
import { NextUIProvider, Button, createTheme, Text, Link, Grid, Image } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

library.add(fab/*, faCheckSquare, faCoffee*/)

const darkTheme = createTheme({
  type: 'dark',
});


function App() {
  return (
      <div className="App">
        
        <div className="header">
          <Grid.Container gap={2} alignItems="center" justify="left" css={ styles.gridContainer }>

            <Grid>
              <Link href="#">
                <Image src={ logo } css={ styles.logo } />
              </Link>
            </Grid>
            
          </Grid.Container>
          <Grid.Container gap={3} alignItems="center" justify="right" css={ styles.gridContainer }>
                
            <Grid>
              <Link href="#scheduled" css={{ color: "#eeeeef" }}>
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
        
        <div className="body">
          <NextThemesProvider defaultTheme="dark" attribute="class"
            value={{
              dark: darkTheme.className
          }}>
            <NextUIProvider>
              
              <Text h2 css={{
                textGradient: "45deg, #ffffff -20%, #eeeee4 50%",
              }}
              weight="bold">Night League</Text>
              <Grid.Container gap={1}>
                
                <Grid>
                  <Link href="https://twitch.tv/nh_league" target="_blank">
                    <Button auto shadow css={ styles.primaryButton }>
                      Assistir
                    </Button>
                  </Link>
                </Grid>
                
                <Grid>
                  <Button disabled auto>
                    Formulário
                  </Button>
                </Grid>
                
              </Grid.Container>
              
            </NextUIProvider>
          </NextThemesProvider>
        </div>
        
      </div>
  );
}
//bordered color="#eeeee4"
export default App;