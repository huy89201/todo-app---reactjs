import React from "react";
import './option.css';
import {useDispatch} from "react-redux"
import {ChooseOptionsValue} from "../../store/actions"

function Options() {
  const dispatch = useDispatch();

  const handleValueChange = (evt) => {
    const action = ChooseOptionsValue(Number(evt.target.value));
    dispatch(action);
  }


  return (
    <div className="form-select-wrapper">
      <select className="form-select" onChange={handleValueChange}>
        <option className="form-select__item" value={1}>All</option>
        <option className="form-select__item" value={2}>Done</option>
      </select>
    </div>
  );
}

export default Options;
