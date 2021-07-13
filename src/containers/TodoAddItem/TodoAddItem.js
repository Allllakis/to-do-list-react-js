import React, { useState } from "react";
import classes from "./TodoAddItem.module.css";
import { Button } from 'antd';
import 'antd/dist/antd.css';


const TodoAddItem = (props) => {
  const { addTodoItem, sectionKey } = props;
  const [addItemstate, setAddItemstate] = useState({ label: "" });
 
  const onLabelChange = (e) => {
    setAddItemstate({
      label: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodoItem(addItemstate.label, sectionKey);
    setAddItemstate({
      label: "",
    });
   
  };

  return (
    <form className={classes.AddItem} onSubmit={onSubmit}>
      <input
        type="text"
        className={classes.OnInput}
        onChange={onLabelChange}
        value={addItemstate.label}
      />
      <Button htmlType="submit" type="primary" className={classes.Button} disabled={!addItemstate.label}>
        ADD
      </Button>
    </form>
  );
};

export default TodoAddItem;
