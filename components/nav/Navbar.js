import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import styles from './nav.module.css';

const MENU_LIST = [
  { text: "Home", href: "/" },
//   { text: "About Us", href: "/about" },
//   { text: "Contact", href: "/contact" },
  { text: "Attivida", href: "/attivida" },
  { text: "C'entra", href: "/centra" },
  { text: "Connettiti", href: "/connettiti" },
  { text: "Messina", href: "/messina" },
  { text: "Educación", href: "/educacion" },
  { text: "Partenza", href: "/partenza" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`${styles.nav}`}>
        <Link href={"/"}>
            <h1 className="logo">Élitacietè</h1>
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

