import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';

function App() {
    return ( 
       <Router>
           <Switch>
               <Route exact path="/">
               <Home></Home>
               </Route>
               <Route path="/home">
               <Home></Home>
               </Route>
               <Route path="*">
               <Notfound></Notfound>
              </Route>
           </Switch>
       </Router>
    );
}

export default App;