import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import { useState, useEffect } from "react";
import Transition from './transition';


const Base = () => {

  const [fontAvailable, setfontAvailable] = useState(false);

  useEffect(() => {
    if (!fontAvailable) {       
      document.fonts.load('20px "Chill"').then(() => {
        console.log(" FONT LOADED")
        setfontAvailable(true);
      })
    } 
  });


  return (
    <div>
        {fontAvailable 
          ? <h1 className="text-7xl">Date with Me</h1>         
          : <Transition></Transition>    
        }
    </div>
  )
}

export default Base