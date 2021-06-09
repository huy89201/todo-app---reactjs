import React from "react";
import ClassNames from "classnames";
import { useDispatch } from "react-redux";
import { ToggleCompleteBtn, DeleteTodo, UpdateTodo } from "../../store/actions";
import "./todoitem.css";

function TodoItem({ index, title, isComplete, todoItem }) {
  const dispatch = useDispatch();

  const classes = ClassNames("todo-item__name", {
    "isComplete": isComplete,
  });

  const toggleCompleteBtn = () => {
    dispatch(ToggleCompleteBtn(todoItem));
    dispatch(UpdateTodo());
  };

  const toggleDeleteBtn = () => {
    let action = DeleteTodo(todoItem.id);
    dispatch(action);
  };

  return (
    <li className="todo-item">
      <div className="todo-item__id">{index + 1}</div>
      <div className={classes}>{title}</div>
      <div className="todo-item__btn-wrapper">
        <div className="todo-item__btn-isComplete" onClick={toggleCompleteBtn}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </div>
        <div className="todo-item__btn-notComplete" onClick={toggleDeleteBtn}>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
    </li>
  );
}

export default TodoItem;
