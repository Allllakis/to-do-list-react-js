import React, { useState } from "react";
import classes from "./TodoHeader.module.css";

const TodoHeader = ({ name, todo, done, hide, lengthSection }) => {
  const [toggleText, setToggleText] = useState(false);

  const onToggle = () => {
    hide();
    setToggleText(!toggleText);
  };

  return (
    <div className={classes.Content}>
      <div className={classes.Box1}>
        <h1 className={classes.h1}>{name}</h1>
      </div>
      <div className={classes.Box2}>
        <h1 className={classes.h1}>{`${todo} TO DO ${done} DONE`}</h1>
      </div>
      <button className={classes.Box3} onClick={onToggle} disabled={!lengthSection}>
        <h1 className={classes.open}>
          {toggleText && lengthSection !== 0 ? "Clouse" : "Open"}
        </h1>
      </button>
    </div>
  );
};

export default TodoHeader;
