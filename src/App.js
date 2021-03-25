import React from 'react'
import './App.css'
import Home from './Screens/Home'
import Send from './Screens/Send'
import Receive from './Screens/Receive'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/send">
          <Send />
        </Route>
        <Route path="/receive">
          <Receive />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
