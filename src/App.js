//import logo from './logo.svg';
import './App.css';
import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider, Button, createTheme, Text, Link, Grid } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const darkTheme = createTheme({
  type: 'dark',
});


function App() {
  return (
    <div className="App">
      <body className="App-body">
        <NextThemesProvider
          defaultTheme="dark"
          attribute="class"
          value={{
            dark: darkTheme.className
          }}
          >
          <NextUIProvider>
            <Text h2 css={{
              textGradient: "45deg, #ffffff -20%, #eeeee4 50%",
            }}
            weight="bold">Night League</Text>
            <Grid.Container gap={2}>
              <Grid>
                <Link href="https://twitch.tv/nh_league" target="_blank">
                  <Button shadow color="primary" auto>
                    Assistir
                  </Button>
                </Link>
              </Grid>
              <Grid>
                <Button disabled auto>
                  Inscrever-se
                </Button>
              </Grid>
            </Grid.Container>
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </div>
  );
}
//bordered color="#eeeee4"
export default App;