import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import styles from "./nav.module.css";

const MENU_LIST = [
  { text: "Belifs", href: "/belifs" },
  { text: "Attivida", href: "/attivida" },
  { text: "C'entra", href: "/centra" },
  { text: "Educación", href: "/educacion" },
  { text: "Partenza", href: "/partenza" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`${styles.nav}`}>
        <Link href="/" className={styles.logoContainer}>
          <img
            src="/images/logo/Cool-Goat-Logo.webp"
            alt="ES Logo"
            className={styles.logoImage}
          />
          {/* <img src="/favicon.ico" alt="Vercel Logo" className={styles.logoImage} /> */}
          <h1 className={styles.logoText}>Élitacietè</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`${styles.navMenuBar}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} ${styles.navMenuList}`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
