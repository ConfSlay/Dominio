import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoadingScreen from '../components/loading_screen'
import Matrix from '../components/matrix'
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
    <div className={styles.container}>
      <Head>
        <title>Richard PERRET</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}> 
        {fontAvailable 
          ? <Matrix></Matrix>         
          : <LoadingScreen title = "Dominio"></LoadingScreen>    
        }
      </main>
    </div>
  )
}

export default Home
