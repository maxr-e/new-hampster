import React from 'react';
import Header from '../components/Header.js';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* You can also include a footer or other common elements here */}
    </div>
  );
};

export default Layout;

//do i even need a layout?