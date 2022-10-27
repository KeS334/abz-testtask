import React from 'react';
import Header from "./components/Header";
import Poster from "./components/Poster";
import CardsBlock from "./components/CardsBlock";
import NewUser from "./components/NewUser";
import {UserState} from "./UserContext";


function App() {

  return (
    <UserState>
        <Header/>
        <Poster/>
        <CardsBlock/>
        <NewUser/>
    </UserState>
  );
}

export default App;
