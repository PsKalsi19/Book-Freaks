import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";

// layouts
import RootLayout from "./layouts/RootLayout";
import ProductLayout from "./layouts/ProductLayout";

// pages
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import User from "./pages/user/User";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist"

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login/>}/>
        <Route path="create-account" element={<SignUp/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="wishlist" element={<Wishlist/>}/>
        <Route path="user" element={<User/>}/>
        <Route path="products" element={<ProductLayout/>}>
          <Route index element={<Products/>} />
          <Route path=":category" element={<Products/>} />
        </Route>

      </Route>
        <Route path="mocks" element={<Mockman />} />
    </Routes>
  );
}

export default App;
