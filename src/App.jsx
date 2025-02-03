import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import WomenCollection from "./pages/collections/WomenCollection";
import MenCollection from  "./pages/collections/MenCollection";
import FormalWear from "./pages/collections/FormalWear";
import Accessories from  "./pages/collections/Accessories";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Help from "./pages/help/Help";
import ProductPage from "./pages/ProductPage";
import Favorites from "./pages/account/Favorites";
import { FavoritesProvider } from "./context/FavoritesContext";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./ScrollToTop";
import Cart from "./components/Cart";
import Orders from "./pages/account/Orders";
import Addresses from "./pages/account/Adresses";
import Account from "./pages/account/Account";
import MyProfile from "./pages/account/MyProfile";
import CartPage from "./pages/cart/CartPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartOpen = () => setIsCartOpen(true);
  const handleCartClose = () => setIsCartOpen(false);

  return (
    <>
    <ToastContainer/>
    <FavoritesProvider>
    <CartProvider onAddToCart={handleCartOpen}>
    <Navbar />
   <ScrollToTop/>
   <Cart isOpen={isCartOpen} closeCart={handleCartClose} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/womencollection" element={<WomenCollection/>}/>
        <Route path="/mencollection" element={<MenCollection/> }/>
        <Route path="/formalwear" element={<FormalWear/> }/>
        <Route path="/accessories" element={<Accessories/> }/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About/> }/>
        <Route path="/contact" element={<Contact/> }/>
        <Route path="/help" element={<Help/> }/>
        <Route path="/cart" element={<CartPage/>}/>

        {/* Nested routes for UserPage */}
        <Route path="/account" element={<Account />}>
              <Route path="myprofile" element={<MyProfile />} />
              <Route path="addresses" element={<Addresses />} />
              <Route path="favorites" element={<Favorites/>}/>
              <Route path="orders" element={<Orders />} />
            </Route>
      </Routes>
    <Footer />
    </CartProvider>
    </FavoritesProvider>
    </>
  )
}

export default App
