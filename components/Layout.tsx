import React, { FunctionComponent } from 'react'
import Navbar from '../components/Navbar'

import styles from './styles/Layout.module.css'

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer>sample footer</footer>
    </div>
  )
}

export default Layout
