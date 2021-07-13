import React from "react";
import classes from "./Toolbar.module.css";
import "antd/dist/antd.css";

import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
