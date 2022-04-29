import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductCard from './pages/ProductCard';
import Cart from './pages/ShoppingCart';
// import { getCategories } from './services/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      localStg: [],
    };
  }

  handleClick= (product) => {
    const { localStg } = this.state;
    const list = [...localStg, product];
    localStorage.setItem('cart', JSON.stringify(list));
    this.setState({ localStg: list });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (<Home
                { ...props }
                onClick={ this.handleClick }
              />) }
            />
            <Route exact path="/cart" component={ Cart } />
            <Route
              exact
              path="/productCard/:id"
              render={ (props) => (<ProductCard
                { ...props }
                onClick={ this.handleClick }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
