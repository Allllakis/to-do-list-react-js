import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Organizer.module.css";

import AppHeader from "../../components/AppHeader/AppHeader";
import TodoList from "../../components/TodoList/TodoList";
import TodoAddItem from "../../containers/TodoAddItem/TodoAddItem";

const Organizer = (props) => {
  const [liststate, setListstate] = useState({
    lists: {
      pn: {
        name: "MON",
        items: [],
      },
      vt: {
        name: "TUE",
        items: [],
      },
      sr: {
        name: "WED",
        items: [],
      },
      cht: {
        name: "THU",
        items: [],
      },
      pt: {
        name: "FRI",
        items: [],
      },
      sub: {
        name: "SAT",
        items: [],
      },
      vs: {
        name: "SUN",
        items: [],
      },
    },
  });

  useEffect(() => {
    axios
      .get(
        "https://happyorganizer-38749-default-rtdb.firebaseio.com/items.json"
      )
      .then((response) => {
        console.log(response);
        if (response.data) {
          const items = Object.entries(response.data);
          console.log("items", items);

          setListstate(({ lists }) => {
            let listsCopy = { ...lists };
            items.forEach((item) => {
              const itemValue = item[1];
              const itemKey = item[0];

              listsCopy = {
                ...listsCopy,
                [itemValue.idDay]: {
                  ...listsCopy[itemValue.idDay],
                  items: [
                    ...listsCopy[itemValue.idDay].items,
                    { ...itemValue, databaseId: itemKey },
                  ],
                },
              };
            });

            return {
              lists: listsCopy,
            };
          });
        }
      });
  }, []);

  const createTodoItem = (label, key) => {
    let unik = Math.random();
    return {
      idDay: key,
      id: unik,
      label,
      done: false,
      important: false,
    };
  };

  const addTodoItem = (text, key) => {
    const newItem = createTodoItem(text, key);
    axios
      .post(
        "https://happyorganizer-38749-default-rtdb.firebaseio.com/items.json",
        newItem
      )
      .then((response) => {
        setListstate(({ lists }) => {
          const section = lists[key];
          const oldArray = section.items;
          const newArray = [
            ...oldArray,
            { ...newItem, databaseId: response.data.name },
          ];
          const newObject = {
            ...lists,
            [key]: {
              ...lists[key],
              items: newArray,
            },
          };
          return {
            lists: newObject,
          };
        });
      });
  };

  const toggleProperty = (arr, key, databaseId, propName) => {
    axios
      .patch(
        `https://happyorganizer-38749-default-rtdb.firebaseio.com/items/${databaseId}.json`,
        { [propName]: true }
      )
      .then((response) => {
        console.log("done", response);
      });
    const section = arr[key];
    const idx = section.items.findIndex(
      (item) => item.databaseId === databaseId
    );

    const oldItem = section.items[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const before = section.items.slice(0, idx);
    const after = section.items.slice(idx + 1);
    const newArray = [...before, newItem, ...after];

    return {
      ...arr,
      [key]: {
        ...arr[key],
        items: newArray,
      },
    };
  };

  const onTodoDone = (databaseId, key) => {
    setListstate(({ lists }) => {
      return {
        lists: toggleProperty(lists, key, databaseId, "done"),
      };
    });
  };

  const onTodoImportant = (databaseId, key) => {
    setListstate(({ lists }) => {
      return {
        lists: toggleProperty(lists, key, databaseId, "important"),
      };
    });
  };

  const onDeleted = (id, key) => {
    axios
      .delete(
        `https://happyorganizer-38749-default-rtdb.firebaseio.com/items/${id}.json`
      )
      .then((response) => {
        setListstate(({ lists }) => {
          const section = lists[key];
          const idx = section.items.findIndex((item) => item.databaseId === id);
          const before = section.items.slice(0, idx);
          const after = section.items.slice(idx + 1);
          const newArray = [...before, ...after];
          const newObject = {
            ...lists,
            [key]: {
              ...lists[key],
              items: newArray,
            },
          };
          return {
            lists: newObject,
          };
        });
      });
  };

  return (
    <div className={classes.DataOrganizer}>
      <React.Fragment>
        <AppHeader />
        {Object.keys(liststate.lists).map((key) => {
          const section = liststate.lists[key];

          const doneCount = liststate.lists[key].items.filter((el) => el.done)
            .length;
          const todoCount = liststate.lists[key].items.length - doneCount;

          return (
            <React.Fragment key={section.id}>
              <TodoList
                section={section}
                sectionKey={key}
                onTodoDone={onTodoDone}
                onTodoImportant={onTodoImportant}
                onDeleted={onDeleted}
                todo={todoCount}
                done={doneCount}
              />
              <TodoAddItem sectionKey={key} addTodoItem={addTodoItem} />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    </div>
  );
};

export default Organizer;
