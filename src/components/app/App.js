import React from 'react';
import logo from '../../assets/images/logo.svg';
import Accordion2 from "../accordion"
import Category from "../category"
import './App.css';
import {Switch,Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div>
            Header
        </div>
        <Category/>
        <div style={{width:300}}>
        </div>
            <Route render={({location})=> (
                <Switch location={location}>
                    <Route exact path="/cc" component={Accordion2} />
                    <Route path="/c1" component={Accordion2} />
                </Switch>
            )} />
    </div>

  );
}

export default App;
