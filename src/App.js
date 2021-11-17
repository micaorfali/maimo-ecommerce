import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './Contexts/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path={`/shop`}>
              <Category />
            </Route>
            <Route exact path={`/category/:id`}>
              <Category />
            </Route>
            <Route exact path={`/product/:id`}>
              <Product />
            </Route>
            <Route exact path={`/checkout`}>
              <Checkout />
            </Route>
            <Route exact path={`/`}>
              <Home />
            </Route>
            <Route path="*">NOT FOUND</Route>
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;

/*  <Route exact path={`/cart`}>
              <Cart />
            </Route> */