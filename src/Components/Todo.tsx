import React from "react";
import Todoitems from "./TodoItems";
import "./todo.css";

const Todo = () => {
  return (
    <form>
      <div className="head-form">
        <input type="text" placeholder="enter todo" />
        <button>Add </button>
      </div>
      <ul className="form-body">
        <Todoitems />
        <Todoitems />
        <Todoitems />
      </ul>
    </form>
  );
};

export default Todo;
