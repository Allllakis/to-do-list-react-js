import React, { useState } from "react";
import cx from "classnames";
import "./TodoList.css";

import TodoHeader from "../TodoHeader/TodoHeader";
import TodoListItem from "../../containers/TodoListItem/TodoListItem";

const TodoList = ({
  section,
  sectionKey,
  onTodoDone,
  onTodoImportant,
  onDeleted,
  todo,
  done,
}) => {
  const [hideList, setHideList] = useState(true);
  const onListHide = () => {
    setHideList(!hideList)
  }

  const elements = section.items.map((item) => {
    const { id, databaseId, ...itemProps } = item;

    return (
      <TodoListItem
        key={item.id}
        {...itemProps}
        onTodoDone={() => onTodoDone(databaseId, sectionKey)}
        onTodoImportant={() => onTodoImportant(databaseId, sectionKey)}
        onDeleted={() => onDeleted(databaseId, sectionKey)}
      />
    );
  });
  return (
    <div className={cx("List")}>
      <TodoHeader name={section.name} todo={todo} done={done} hide={onListHide}/>
      <ul className={cx("Todolist", hideList && "TodolistHide", !hideList && "TodoList")}>{elements}</ul>
    </div>
  );
};

export default TodoList;
