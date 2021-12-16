import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route, Link, useParams } from "react-router-dom";

//Custom modules
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Error from './pages/Error';
import NavBar from './pages/elements/NavBar';
import Footer from './pages/elements/Footer';
//Styles
import './App.css';
// DB
import DB from "./data.json"

// Interesting point from review, but not useful to change here: 
// Typically you don't need to use useCallback. Unless you have a very
// specific reason for using it, consider just removing it. (or if you just
// want to learn about it, it's fine to use it for that reason). But either way,
// the naming should the the same. You should be able to remove the
// useCallback logic and the rest of the code should run just fine.

function App() {
  const [qtt, setQtt] = useState(1);

  //To maintain a single function instance between rendering with Home etc
  const wrapperSetQtt = useCallback(val => {
    setQtt(val);
  }, [setQtt]);
  //Cart
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []);
  const wrapperSetCartItems =  useCallback(val => {
    setCartItems(val);
  }, [setCartItems]);
  localStorage.setItem('cart', JSON.stringify(cartItems))
  

  return (
    <div className="App">
      <NavBar 
      cartItems={cartItems}
      cartItemsSetter={wrapperSetCartItems}
      />
      <Routes> 
      
        <Route exact path="/" element={<Home qtt={qtt} qttSetter={wrapperSetQtt} />}></Route>
        <Route path="/headphones" element={<Category product="headphones" />}></Route>
        {/* & with params for detail page */}
        <Route 
        path="/headphones/:slug" 
        element={<ProductDetail 
        qtt={qtt} 
        qttSetter={wrapperSetQtt}
        cartItems={cartItems}
        cartItemsSetter={wrapperSetCartItems}
        />}></Route>
        <Route path="/speakers" element={<Category product="speakers" />}></Route>
        {/* & with params for detail page */}
        <Route 
        path="/speakers/:slug" 
        element={<ProductDetail 
        qtt={qtt} 
        qttSetter={wrapperSetQtt}
        cartItems={cartItems}
        cartItemsSetter={wrapperSetCartItems}
        />}></Route>
        <Route path="/earphones" element={<Category product="earphones" />}></Route>
        {/* & with params for detail page */}
        <Route 
        path="/earphones/:slug" 
        element={<ProductDetail 
        qtt={qtt} 
        qttSetter={wrapperSetQtt}
        cartItems={cartItems}
        cartItemsSetter={wrapperSetCartItems}
        />}></Route>
        {/* Checkout Page */}
        <Route path='/checkout' element={<Checkout />}></Route>  
        {/* Error 404 page */}
        <Route path='*' element={<Error />}></Route>  
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
