import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Home from './pages/Home';
import Cart from './pages/ShoppingCart';
// import { getCategories } from './services/api';

class App extends React.Component {
  render() {
    return (
      <div>
        <Categories />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
