import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Listing from './Components/Listing';
import Room from './Components/Room';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Listing}></Route>
        <Route exact path="/room" component={Room}></Route>
      </Switch>
    </div>
  );
}

export default App;
