import React from "react";
import classes from "./Toolbar.module.css";
import "antd/dist/antd.css";

// import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <h1 className={classes.Logo}>WORK DAY ORGANIZER</h1>
    <div className={classes["Nav-item"]}>
      <NavigationItems />
    </div>
  </header>
);

export default toolbar;
