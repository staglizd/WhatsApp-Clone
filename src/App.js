import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter, Route } from 'react-router-dom';
import {Switch} from 'react-router'; 
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      
      {!user ? (
        <Login />
      ) : (

      <div className="app__body">

        <BrowserRouter>
          <Sidebar />
          
          <Switch>
          
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>

            <Route path="/">
              <Chat />
            </Route>

          </Switch>

        </BrowserRouter>

      </div>
      )}

    </div>
  );
}

export default App;
