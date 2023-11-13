import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../util/Header/Header';
import Footer from '../util/Footer/Footer';
const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer/>
    </div>
  )
};

export default MainLayout;