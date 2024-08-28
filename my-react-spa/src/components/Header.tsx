import React from 'react';
import logo from '/Users/rapha/teste cp/my-react-spa/src/img/logo.png'
const Header: React.FC = () => {
  return (
    <header>
    <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      <h1>My React SPA</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
