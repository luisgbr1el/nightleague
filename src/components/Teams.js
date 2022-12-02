//import logo from './logo.svg';
import '../assets/App.css';
import * as React from 'react';
import styles from '../properties.json';
import Header from './Header.js';
//import ReactDOM from 'react-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import razeImg from './raze.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
//import teamSchema from "../schemas/teamSchema.js";
//import '../dbConnect.js'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// 1. import `NextUIProvider` component
import { NextUIProvider, /*Button,*/ createTheme, Card, Text, Link, Grid/*, Image*/, Loading } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

library.add(fab/*, faCheckSquare, faCoffee*/)

const darkTheme = createTheme({
  type: 'dark',
});

const Team = (props) => (
  <Link className="btn btn-link" href={`/team/${props.team.TeamId}`}>
    <Card isHoverable variant="bordered" css={{ p: "$6", mw: "400px", backgroundColor: "#1c1c1c" }}>
      <Card.Header>
        <img
          alt="team logo"
          src={props.team.TeamLogoUrl}
          width="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {props.team.TeamName}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{props.team.GameName}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      {/*<Card.Body css={{ py: "$2" }}>
        <Text>{props.team.GameName}</Text>
      </Card.Body>*/}
    </Card>
  </Link>
);

export default function Teams() {
 const [teams, setTeams] = React.useState([]);
 
 // This method fetches the records from the database.
 React.useEffect(() => {
   async function getTeams() {   
    const apiUrl = process.env['apiUrl'] || process.env.API_URL || "https://nhlapi.luisgabriel53.repl.co/api/teams"
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const teams = await response.json();
     setTeams(teams);
   }
   getTeams();
 
   return;
 }, [teams.length])

  // This method will map out the records on the table
 function teamsList() {
   return teams.map((team) => {
     return (
       <Team
         team={team}
         key={team.TeamId}
       />
     );
   });
 }

  return (
      <div className="App">

        <Header />
        
        <div className="body" style={ styles.defaultDiv }>
          <NextThemesProvider defaultTheme="dark" attribute="class"
            value={{
              dark: darkTheme.className
          }}>
            <NextUIProvider>

            <div className="teams">
              <Text h2 css={ styles.mainTitle }>Times</Text>
              {teams.length > 0 ? teamsList() : <Loading size="lg" color="white" css={ styles.loading } />}
            </div>
              
            </NextUIProvider>
          </NextThemesProvider>
        </div>
        
      </div>
  )
}