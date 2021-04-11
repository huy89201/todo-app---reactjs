export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_COMPLETE_BTN = "TOGGLE_COMPLETE_BTN"
export const CHOOSE_OPTIONS_VALUE = "CHOOSE_OPTIONS_VALUE"
export const UPDATE_TODO = "UPDATE_TODO"
export function AddNewTodo(todo) {
  return {
    type: ADD_NEW_TODO,
    payload: {
      todo,
    },
  };
}

export function DeleteTodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: {
      todoId,
    },
  };
}

export function ToggleCompleteBtn(todoItem) {
  return {
    type: TOGGLE_COMPLETE_BTN,
    payload: {
      todoItem,
    },
  };
}

export function ChooseOptionsValue(value){
  return {
    type: CHOOSE_OPTIONS_VALUE,
    payload: {
      value,
    }
  }
}

export function UpdateTodo(){
  return{
    type: UPDATE_TODO
  }
}
