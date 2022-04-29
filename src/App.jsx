import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductCard from './pages/ProductCard';
import Cart from './pages/ShoppingCart';
// import { getCategories } from './services/api';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ Cart } />
            <Route
              exact
              path="/productCard/:id"
              render={ (props) => <ProductCard { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
