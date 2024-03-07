import React, { useState, useEffect } from 'react';

interface HeaderProps {}

const Footer: React.FC<HeaderProps> = () => {


  return (
    <footer className="bg-slate-100 py-4 md:py-6">
      <div className="container mx-auto px-4 text-center">
        <p className='blue-gradient-text'>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
