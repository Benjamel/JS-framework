import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Layout from './components/Layout';
import PageNotFound from './pages/PageNotFound';
import CheckOutSuccess from './pages/CheckOutSuccess';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const location = useLocation();

  useEffect((post) => {
    if (location.pathname === '/product') {
      document.title = post.title;
    } else {
      document.title = 'Online Shop';
    }
  });

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/product/:postId' element={<Product />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkoutsuccess' element={<CheckOutSuccess />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
