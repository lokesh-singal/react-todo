import { useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { TodoList } from "./TodoList";

const todoKey = "reactTodo";

export const Todo = () => {
  const [list, setList] = useState(() => {
    const rawTodo = localStorage.getItem(todoKey);
    if (!rawTodo) return [];
    return JSON.parse(rawTodo);
  });
  const [inputVal, setInputVal] = useState({ listVal: "", checked: false });

  // Handle input value
  const handleInputVal = (e) => {
    setInputVal({ listVal: e.target.value, checked: false });
  };

  // Adding list item
  const handleAddList = (e) => {
    e.preventDefault();

    // Validator
    let trimVal = inputVal.listVal.trim();
    if (trimVal == "" || list.find((cur) => cur.listVal == trimVal))
      return setInputVal({ listVal: "", checked: false });

    setList((prev) => [...prev, { listVal: trimVal, checked: false }]);
    setInputVal({ listVal: "", checked: false });
  };

  //   delete list item
  const handleDeleteItem = (val) => {
    let newArr = list.filter((curElem) => curElem.listVal !== val);
    setList(newArr);
  };

  //   Checking list item
  const handleCheckItem = (check) => {
    let newObj = list.map((cur) => {
      if (cur.listVal == check) {
        return { ...cur, checked: !cur.checked };
      } else {
        return cur;
      }
    });
    setList(newObj);
  };

  //   Adding localstorage
  localStorage.setItem(todoKey, JSON.stringify(list));

  return (
    <section className="inner">
      {/* Heading  */}
      <div className="head">
        <FaRegCalendarPlus style={{ fontSize: "1.4rem" }} />
        <span className="heading">To-Do List</span>
      </div>

      {/* Form  */}
      <form onSubmit={handleAddList}>
        <input
          type="text"
          placeholder="Add your task"
          value={inputVal.listVal}
          onChange={handleInputVal}
        />
        <button type="submit">ADD +</button>
      </form>

      {/* List items */}
      <div className="list-items">
        {list.map((curElem) => (
          <TodoList
            key={curElem.listVal}
            curListItem={curElem.listVal}
            curItemCheck={curElem.checked}
            checkItem={handleCheckItem}
            deleteItem={handleDeleteItem}
          />
        ))}
      </div>
    </section>
  );
};
