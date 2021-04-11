import React from 'react'
import Link from 'next/link'

import styles from './styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}
