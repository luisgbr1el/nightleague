//import logo from './logo.svg';
import '../assets/App.css';
import * as React from 'react';
//import styles from './properties.json';
import Header from './Header.js';
//import ReactDOM from 'react-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import razeImg from './raze.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

// 1. import `NextUIProvider` component
import { NextUIProvider, /*Button,*/ createTheme, Text/*, Link/*, Grid, Image*/ } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

library.add(fab/*, faCheckSquare, faCoffee*/)

const darkTheme = createTheme({
  type: 'dark',
});


export default function ErrorPage() {
  return (
      <div className="App">

        <Header />
        
        <div className="body">
          <NextThemesProvider defaultTheme="dark" attribute="class"
            value={{
              dark: darkTheme.className
          }}>
            <NextUIProvider>

            <div className="error">
              <h1>404</h1>
              <Text>Não encontrado.</Text>
          </div>
              
            </NextUIProvider>
          </NextThemesProvider>
        </div>
        
      </div>
  );
}
//bordered color="#eeeee4"