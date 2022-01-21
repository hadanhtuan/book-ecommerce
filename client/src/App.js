// import Product from "./pages/Product";
// import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Book from "./pages/Book";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cart from "./pages/Cart";
import User from "./pages/User";
import Auth from "./pages/Auth";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user/:id">
          <User />
        </Route>
        <Route exact path="/book/:id">
          <Book />
        </Route>
        <Route
          exact 
          path='/register' 
          render={props => <Auth {...props} 
          authRoute='register' />} 
        >
        </Route>
        <Route
          exact 
          path='/login' 
          render={props => <Auth {...props} 
          authRoute='login' />} 
        >
        </Route>
        <Route
          exact 
          path='/forgot-password' 
          render={props => <Auth {...props} 
          authRoute='forgot-password' />} 
        > 
        </Route>
        <Route
          exact 
          path='/reset-password' 
          render={props => <Auth {...props} 
          authRoute='reset-password' />} 
        >
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
