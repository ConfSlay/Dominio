import React, { ReactNode } from 'react';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from "react";

type Props = {
  title?: string
}

const Welcome = ({title = 'Create Next App'}: Props) => {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={styles.title}>
      {title} <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  )
}
  
export default Welcome
