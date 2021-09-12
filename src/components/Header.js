import React from "react";
import styles from './Header.module.css'
import Navigator from "./Navigator";
import MainHeader from "./MainHeader";
import SecondaryHeader from "./SecondaryHeader";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Navigator />
      <MainHeader />
      <SecondaryHeader />
    </div>
  );
};

export default Header;
