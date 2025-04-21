import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

import NavBar from './NavBar';
import Footer from './Footer';
import Home from "./Home"
import ProductList from './ProductList';
import ProductDtails from './ProductDtails';
import Cart from './Cart';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import AuthDetails from './AuthDetails';
import { ProductProvider } from './productContext';
import AllProduct from './AllProduct';
//https://www.jerry-log.com/en/aboutdetail.aspx?classid=010904
const Layout = () => {
  return (
    <>
      <NavBar />
      {/* <AuthDetails /> */}
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (load) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' ,alignItems:'center'}}>
        <ScaleLoader color="#f6b31a" height={40} radius={14} width={5} />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<ProductDtails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/RegisterPage" element={<RegisterPage />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/AllProduct" element ={<AllProduct /> } />
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  );
};

export default App;
