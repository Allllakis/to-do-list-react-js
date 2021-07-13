import React from "react";
import classes from "./TodoHeader.module.css";

const TodoHeader = ({ name, todo, done, hide }) => {
  return (
    <div className={classes.Content}>
      <div className={classes.Box1}>
        <h1 className={classes.h1}>{name}</h1>
      </div>
      <div className={classes.Box2}>
        <h1 className={classes.h1}>{`${todo} TO DO ${done} DONE`}</h1>
      </div>
      <div className={classes.Box3}
      onClick={hide}>
        <h1 className={classes.open}>OPEN</h1>
      </div>
    </div>
  );
};

export default TodoHeader;
