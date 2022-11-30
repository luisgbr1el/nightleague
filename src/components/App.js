//import logo from './logo.svg';
import '../assets/App.css';
import * as React from 'react';
import styles from '../properties.json';
import Header from '../components/Header.js';
//import ReactDOM from 'react-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import razeImg from './raze.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import { BrowserRouter as Router } from "react-router-dom";
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// 1. import `NextUIProvider` component
import { NextUIProvider, Button, createTheme, Text, Link, Grid/*, Image*/ } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

library.add(fab/*, faCheckSquare, faCoffee*/)

const darkTheme = createTheme({
  type: 'dark',
});


function App() {
  return (
      <div className="App">

        <Header />
        
        <div className="body" style={ styles.centerPoint }>
          <NextThemesProvider defaultTheme="dark" attribute="class"
            value={{
              dark: darkTheme.className
          }}>
            <NextUIProvider>

                  <Text h2 css={ styles.mainTitle }>Night League 2022</Text>
              <Grid.Container gap={1} justify="center">
      
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