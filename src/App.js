import './App.css'

import React from 'react'
import { Navbar } from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path={'/'} exact />
        </Switch>
      </Router >
    </>
  )
}
