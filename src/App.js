import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact></Route>
      </Switch>
    </Router>
  )
}

export default App
