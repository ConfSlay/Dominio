import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import { useState, useEffect } from "react";
import Transition from '../../components/dateWithMe/transition';
import Base from '../../components/dateWithMe/base';
import DatePickerAndMeteo from "../../components/dateWithMe/datePickerAndMeteo";
import ConfirmButton from "../../components/dateWithMe/confirmButton";

const Home: NextPage = () => {

  const [nextPage,setNextPage] = useState(false);

  return (
    <div>
      <Head>
        <title>Date with Me</title>
        <meta name="description" content="Date a King" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="containerCustom"> 
        <Base></Base>
        <DatePickerAndMeteo></DatePickerAndMeteo>
        <ConfirmButton nextPageURL="url" title="Save this date"></ConfirmButton>
      </main>
    </div>
  )
}

export default Home
