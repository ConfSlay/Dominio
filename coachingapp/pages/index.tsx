import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import { useState, useEffect } from "react";
// My elements
// import Matrix from '../components/Matrix/matrix'
// import GravitationalButton from '../components/Buttons/Gravitational-button'
import Header from  '../components/Header/Header'
import Footer from  '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>CoachingApp</title>
        <meta name="description" content="Coaching app made by Richard PERRET" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/icon-logo.png" />
      </Head>

      <Header/>   
      <main className="flex-grow">
      </main>
      <Footer/>
    </div>
  )
}

export default Home
