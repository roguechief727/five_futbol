import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AdminLayout;
