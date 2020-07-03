import React from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header'
import Home from '../Home'
import NewMeeting from '../NewMeeting'
import Footer from '../Footer'

import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/newMeeting">
        <NewMeeting />
      </Route>
      <Footer />
    </div>
  )
}

export default App
