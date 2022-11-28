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
//import teamSchema from "../schemas/teamSchema.js";
//import '../dbConnect.js'
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// 1. import `NextUIProvider` component
import { NextUIProvider, /*Button,*/ createTheme, /*Text,*/ Link/*, Grid, Image*/ } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

library.add(fab/*, faCheckSquare, faCoffee*/)

const darkTheme = createTheme({
  type: 'dark',
});

const Team = (props) => (
  <Link className="btn btn-link" href={`/team/${props.team.TeamId}`}>{props.team.TeamName}</Link>
);

export default function Teams() {
 const [teams, setTeams] = React.useState([]);
 
 // This method fetches the records from the database.
 React.useEffect(() => {
   async function getTeams() {   
    const apiUrl = process.env['apiUrl'] || process.env.API_URL
    console.log(apiUrl)
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
        
        <div className="body">
          <NextThemesProvider defaultTheme="dark" attribute="class"
            value={{
              dark: darkTheme.className
          }}>
            <NextUIProvider>

            <div className="teams">
              {teamsList()}
          </div>
              
            </NextUIProvider>
          </NextThemesProvider>
        </div>
        
      </div>
  )
}