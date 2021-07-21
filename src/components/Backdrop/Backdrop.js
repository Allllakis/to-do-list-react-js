import React from 'react';
import img from "../Img/pencil.jpg"

import classes from "./Backdrop.module.css"


const Backdrop = ({ children }) => {
  return (
      <div className={classes.Backdrop}>
          <img className={classes.Image} src={img} alt="Oranges" />
          {children}
      </div>
  )
}

export default Backdrop;