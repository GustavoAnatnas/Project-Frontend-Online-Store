import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductCard from './pages/ProductCard';
import Cart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
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
    let prodList = [...localStg];
    // let prodList = [...localStg, product];
    const element = prodList.find((ele) => ele.id === product.id);
    if (element) {
      prodList = prodList.map((prod) => {
        if (prod.id === product.id) {
          prod.quantity += 1;
        }
        return prod;
      });
    } else {
      prodList = [...prodList, { ...product, quantity: 1 }];
    }
    // localStorage.setItem('cart', JSON.stringify(list));
    localStorage.setItem('cart', JSON.stringify(prodList));
    this.setState({ localStg: prodList });
  }

  render() {
    return (
      <div className="container">
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
            <Route exact path="/checkout" component={ Checkout } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
