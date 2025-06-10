'use client';

import Link from "next/link";
import styles from "../navigation.module.css";
import { useState } from "react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Brillex Logo" />
        </div>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/calculator">Calculator</Link>
          <Link href="/slider">Swiper</Link>
          <Link href="/counter">Counter</Link>
          <Link href="/product">Product</Link>
        </nav>

        {/* <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
      </div>
    </header>
  );
}
