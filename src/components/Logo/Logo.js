import React from "react";
import classes from "./Logo.module.css";
import logotip from "../Img/logo.png";

const logo = (props) => (
    <div className={classes.Logo}>
     <img src={logotip} alt="to do list"/>
    </div>
)
  

export default logo;
