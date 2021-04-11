import React from "react";
import { useSelector } from "react-redux";
import "./todolist.css";
import TodoItem from "../todo item";

function TodoList() {
  const todoList = useSelector((state) => state.todoList);
  // const doneTodoList = useSelector((state) => state.doneTodoList);
  let optionsValues = useSelector((state) => state.optionValue);

  const showTodo = todoList.map((todoItem) => {
    return (
      <TodoItem
        key={todoItem.id}
        title={todoItem.name}
        index={todoList.indexOf(todoItem)}
        isComplete={todoItem.isComplete}
        todoItem={todoItem}
      />
    );
  });

  let doneTodoList = todoList.filter((item) => item.isComplete === true);

  let showDoneTodo = doneTodoList.map((todoItem) => {
    return (
      <TodoItem
        key={todoItem.id}
        title={todoItem.name}
        index={todoList.indexOf(todoItem)}
        isComplete={todoItem.isComplete}
        todoItem={todoItem}
      />
    );
  });

  return (
    <div className="todo-list-wrapper">
      <ul className="todo-list">
        {
          optionsValues === 1 ? showTodo : showDoneTodo
        }
      </ul>
    </div>
  );
}

export default TodoList;
