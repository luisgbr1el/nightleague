import App from './App'
import Teams from './components/Teams'
import Team from './components/Team'
import Scheduled from './components/Scheduled'
import ErrorPage from './components/ErrorPage'

import {
  Routes as RoutesA, Route, BrowserRouter as Router } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <RoutesA>
        <Route path="/" element={<App />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/team/:id" element={<Team />} />
        <Route path="/scheduled" element={<Scheduled />} />

        <Route path="*" element={<ErrorPage />} />
      </RoutesA>
    </Router>
  )
}

export default Routes;