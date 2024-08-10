"use client";

import React, { useState } from "react";
import styles from "./hamburgerMenu.module.css";
import Nav from "@/components/header/hamburgerMenu/nav/Nav";
import Search from "@/components/header/hamburgerMenu/search/Search";

const HamburgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className={`${styles.hamburgerMenuButtonContainer} ${
          isOpened && styles.isOpened
        }`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <menu
        className={`${styles.hamburgerMenuMenuContainer} ${
          isOpened && styles.isOpened
        }`}
      >
        <Nav />
        <Search />
      </menu>
    </>
  );
};

export default HamburgerMenu;
