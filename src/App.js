import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Platforms from './Components/Platforms';
import Platforms2 from './Components/Platforms2';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Header/>
          <HomePage/>
        </Route>
        <Route exact path="/platforms">
          <Header/>
          <Platforms/>
        </Route>
        <Route path="/platforms/:platform">
          <Header/>
          <Platforms2/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App