import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import GlobalImageViewer from '../common/GlobalImageViewer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
      <GlobalImageViewer />
    </div>
  );
};

export default Layout;