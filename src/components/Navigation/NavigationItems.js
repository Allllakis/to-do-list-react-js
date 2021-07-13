import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>CALENDAR</NavigationItem>
    <NavigationItem link="/organizer" >ORGANIZER</NavigationItem>
    <NavigationItem link="/autentification">AUTENTIFICATION</NavigationItem>
    
  </ul>
);

export default navigationItems;
