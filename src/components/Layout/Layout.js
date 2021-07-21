import React from "react";

import classes from "./Layout.module.css";
import Toolbar from "../Toolbar/Toolbar";
// import Footer from "../Footer/Footer";
import Backdrop from "../Backdrop/Backdrop";

const layout = (props) => (
  <>
    <Toolbar />
    <Backdrop>
      <main className={classes.Content}>{props.children}</main>
    </Backdrop>
    {/* <Footer /> */}
  </>
);

export default layout;
