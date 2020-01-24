import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ListingContainer from './Components/ListingContainer';
import RoomContainer from './Components/RoomContainer';
import ListingFormContainer from './Components/ListingFormContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ListingContainer}></Route>
        <Route exact path="/room/:roomId" component={RoomContainer}></Route>
        <Route exact path="/room/add" component={ListingFormContainer}></Route>
      </Switch>
    </div>
  );
}

export default App;
