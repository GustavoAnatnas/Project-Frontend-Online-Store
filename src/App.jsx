import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import { getCategories } from './services/api';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
