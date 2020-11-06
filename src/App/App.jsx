/* eslint-disable react/no-unescaped-entities */
import './App.scss'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import React from 'react'

import Header from '../components/Header'
import Rules from '../components/Rules'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Rules />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
