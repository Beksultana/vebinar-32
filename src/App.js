import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import MainContainer from "./containers/MainContainer/MainContainer";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={MainContainer}/>
      </Switch>
    );
  }
}

export default App;
