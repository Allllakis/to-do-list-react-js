import React from 'react';
import img from "../Img/color3.jpg"

import classes from "./Backdrop.module.css"


const Backdrop = ({ children }) => {
  return (
      <div className={classes.Backdrop}>
          <img className={classes.Image} src={img} alt="pencil" />
          {children}
      </div>
  )
}

export default Backdrop;