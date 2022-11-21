import App from './App'
import Teams from './Teams'
import Team from './Team'

import {
  Routes as RoutesA, Route, BrowserRouter as Router } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <RoutesA>
        <Route path="/" element={<App />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:id" element={<Team />} />
      </RoutesA>
    </Router>
  )
}

export default Routes;