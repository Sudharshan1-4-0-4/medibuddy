import React from 'react';
import './header.css';
import { FaArrowLeft, FaMoneyBillAlt, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
     
      <div className="header-left">
        <FaArrowLeft className="icon" />
        <div className="location">
          <p className="main-location">Billekahalli</p>
          <p className="sub-location">Sarvabhoumanagar Billekahalli, BG Road, Bangalore, Karnataka - 560076</p>
        </div>
      </div>

      
      <div className="header-right">
        <FaMoneyBillAlt className="icon" />
        <FaShoppingCart className="icon" />
      </div>
    </header>
  );
};

export default Header;
