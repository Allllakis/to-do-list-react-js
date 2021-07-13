import React from "react";
import cx from "classnames";
import { Button } from "antd";
import { HeartTwoTone } from "@ant-design/icons";

import "./TodoListItem.css";

const TodoListItem = (props) => {
  const {
    label,
    onTodoDone,
    onTodoImportant,
    done,
    important,
    onDeleted,
  } = props;

  return (
    <li className={cx("ListItem")}>
      <span
        className={cx("SpanStyle", done && "Done", important && "Important")}
        onClick={onTodoDone}
      >
        {label}
      </span>
      <Button type="primary" className={cx("Button")} onClick={onTodoImportant}>
        <HeartTwoTone twoToneColor="#eb2f96" />
      </Button>
      <Button danger className={cx("Button2")} onClick={onDeleted}>
        DELETE
      </Button>
    </li>
  );
};

export default TodoListItem;
