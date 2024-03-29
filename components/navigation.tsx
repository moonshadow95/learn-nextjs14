'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "../styles/navigation.module.css"

const Navigation = () => {
  const path = usePathname()
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href={'/'}>Home {path === '/' && '🎬'}</Link>
        </li>
        <li>
          <Link href={'/about-us'}>About Us {path === '/about-us' && '🎬'}</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Navigation;