import React from "react";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Akib</div>
      <Links />
    </div>
  );
};

export default Navbar;
