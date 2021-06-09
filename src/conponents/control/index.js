import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import {AddNewTodo} from '../../store/actions'
import "./control.css";

function Control() {
  const dispatch = useDispatch();

  const [todo, SetTodo] = useState({
    name: "",
    isComplete: false,
    isDelete: false,
  });

  const handleInputValue = (evt) => {
    SetTodo(
      {
        ...todo,
        name: evt.target.value
      }
    )
  };

  function checkVlad () {
    if(todo.name === "")
      return true;
    return false
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const isValid = checkVlad();

    if(isValid)
      return;

    const newTodo = {
      id: Math.round(Math.random() * 9999),
      ...todo
    }

    dispatch(AddNewTodo(newTodo));

    SetTodo({
      ...todo,
      name: ''
    })
  };

  return (
    <div className="input-wrapper" >
      <input
        type="text"
        className="input__input"
        placeholder="sign in ..."
        value={todo.name}
        onChange={handleInputValue}
      />
      <div className="input__submit-btn" type="submit" onClick={handleSubmit}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Control;
