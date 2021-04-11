const initState = {
  todoList: [],
  doneTodoList: [],
  optionValue: 1,
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_NEW_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.payload.todo],
      };

    case "TOGGLE_COMPLETE_BTN":
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload.todoItem.id) {
            return {
              ...item,
              isComplete: !action.payload.todoItem.isComplete,
            };
          }
          return item;
        }),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter(
          (item) => item.id !== action.payload.todoId
        ),
        doneTodoList: state.todoList.filter(
          (item) => item.id !== action.payload.todoId && item.isComplete === true
        ),
      };

    case "CHOOSE_OPTIONS_VALUE":
      return {
        ...state,
        optionValue: action.payload.value,
      };

    case "UPDATE_TODO":
      return {
        ...state,
        doneTodoList: state.todoList.filter((item) => item.isComplete === true),
      };
    default:
      return state;
  }
}

export default rootReducer;
