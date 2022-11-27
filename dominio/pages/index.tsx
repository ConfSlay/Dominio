import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Matrix from '../components/Matrix/matrix'
import MyAvatarScene from '../components/MyAvatar/MyAvatar-scene'
import React from 'react';
import { useState, useEffect } from "react";

const Home: NextPage = () => {

  const [fontAvailable, setfontAvailable] = useState(false);

  useEffect(() => {
    if (!fontAvailable) {       
      document.fonts.load('20px "Matrix"').then(() => {
        console.log(" FONT LOADED")
        setfontAvailable(true);
      })
    } 
  });


  return (
    <div>
      <Head>
        <title>Richard PERRET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main> 
        {fontAvailable 
          ? <Matrix></Matrix>         
          : <span>not available yet</span>    
        }
        <MyAvatarScene></MyAvatarScene>
      </main>
    </div>
  )
}

export default Home
