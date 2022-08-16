import React from 'react';
import Admin from '../components/admin/adminLogin';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/footer';

const AdminLogin = () => {
  return (
    <div>
        <NavBar />
        <Admin />
        <Footer />
    </div>
  )
}

export default AdminLogin;