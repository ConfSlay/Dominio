import React, { useState, useEffect } from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {


  return (
    <header className="bg-slate-100 py-4 md:py-6">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between blue-gradient-text">
        <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left mb-4 md:mb-0 blue-gradient-text">Header</h1>
        <nav className="text-center md:text-right">
          <a href="#" className="block md:inline-block px-2 py-1 md:ml-4 blue-gradient-text">Home</a>
          <a href="#" className="block md:inline-block px-2 py-1 md:ml-4 blue-gradient-text">About</a>
          <a href="#" className="block md:inline-block px-2 py-1 md:ml-4 blue-gradient-text">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
