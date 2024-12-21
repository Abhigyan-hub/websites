import React from "react";
import styles from "./Main.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <a href="./">I am aerospace</a>
      </div>
      <div className={styles.navAnchorContainer}>
        <a href="./">Project</a>
        <a href="./">About</a>
        <a href="./">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
