import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> ACTUM Digital</h1>
        <HeaderCartButton/>
      </header>

      <div className={classes["main-image"]}>
      </div>
    </Fragment>
  );
}

export default Header;
