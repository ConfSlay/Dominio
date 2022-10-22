import React, { ReactNode } from 'react'
import styles from '../styles/Home.module.css'

type Props = {
  children?: ReactNode
  title?: string
}

const Welcome = ({ children, title = 'Create Next App' }: Props) => {
    return (
        <h1 className={styles.title}>
        {title} <a href="https://nextjs.org">Next.js!</a>
        </h1>
    )
}
  
export default Welcome
