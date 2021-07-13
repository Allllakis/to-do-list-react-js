import React from "react";

import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
import Backdrop from "../Backdrop/Backdrop";

const layout = (props) => (
  <>
    <Backdrop>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Backdrop>
  </>
);

export default layout;
