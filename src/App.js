import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Gallery from "./pages/Gallery/Gallery";

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
               <Route path="/gallery">
               <Gallery></Gallery>
               </Route>
               <Route path="*">
               <Notfound></Notfound>
              </Route>
           </Switch>
       </Router>
    );
}

export default App;