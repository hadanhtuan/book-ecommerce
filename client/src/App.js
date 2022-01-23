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
import Cart from "./pages/order-books/Cart";
import User from "./pages/User";
import Auth from "./pages/Auth";
import Admin from "./pages/admin-dashboard/Admin";
import ProtectedRoute from "./components/routing/ProtectedRoute";

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <ProtectedRoute exact path='/user/:id' component={User}/>
        <Route exact path="/book/:id">
          <Book />
        </Route>
        <Route exact path="/admin">
          <Admin />
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
          path='/reset-password/:resetToken' 
          render={props => <Auth {...props} 
          authRoute='reset-password' />} 
        >
        </Route>
        {/* <Route path="/cart">
          <Cart />
        </Route> */}
        <ProtectedRoute exact path='/cart' component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
